// GDPR/DSGVO Compliant Analytics Consent
import { inject } from '@vercel/analytics';

interface ConsentState {
  analytics: boolean;
  functional: boolean;
  timestamp: number;
}

class PrivacyConsent {
  private consentKey = 'marius-portfolio-consent';
  private bannerShown = false;

  constructor() {
    this.checkConsent();
  }

  private getConsentState(): ConsentState | null {
    const stored = localStorage.getItem(this.consentKey);
    if (!stored) return null;

    try {
      const consent = JSON.parse(stored) as ConsentState;
      // Check if consent is older than 1 year
      const oneYear = 365 * 24 * 60 * 60 * 1000;
      if (Date.now() - consent.timestamp > oneYear) {
        localStorage.removeItem(this.consentKey);
        return null;
      }
      return consent;
    } catch {
      return null;
    }
  }

  private saveConsent(consent: ConsentState): void {
    localStorage.setItem(this.consentKey, JSON.stringify(consent));
  }

  private initializeAnalytics(): void {
    // Only initialize analytics if user consented
    const consent = this.getConsentState();
    if (consent?.analytics) {
      inject();
    }
  }

  private createConsentBanner(): HTMLElement {
    const banner = document.createElement('div');
    banner.id = 'privacy-banner';
    banner.className = 'privacy-banner';

    const isGerman = window.location.pathname.includes('/de');

    banner.innerHTML = `
      <div class="privacy-banner-content">
        <p>
          ${isGerman
            ? 'Diese Website verwendet Vercel Analytics zur Verbesserung der Nutzererfahrung. Ihre Daten werden GDPR-konform verarbeitet.'
            : 'This website uses Vercel Analytics to improve user experience. Your data is processed in compliance with GDPR.'
          }
        </p>
        <div class="privacy-banner-buttons">
          <button id="accept-all" class="privacy-btn privacy-btn-primary">
            ${isGerman ? 'Alle akzeptieren' : 'Accept All'}
          </button>
          <button id="accept-functional" class="privacy-btn privacy-btn-secondary">
            ${isGerman ? 'Nur funktional' : 'Functional Only'}
          </button>
          <a href="${isGerman ? '/de/datenschutz.html' : '/privacy.html'}" class="privacy-link">
            ${isGerman ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </a>
        </div>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .privacy-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        color: white;
        padding: 1rem;
        z-index: 10000;
        backdrop-filter: blur(10px);
        border-top: 1px solid #333;
      }
      .privacy-banner-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .privacy-banner-buttons {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        flex-wrap: wrap;
      }
      .privacy-btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.2s;
      }
      .privacy-btn-primary {
        background: #00ff88;
        color: black;
      }
      .privacy-btn-primary:hover {
        background: #00cc6a;
      }
      .privacy-btn-secondary {
        background: transparent;
        color: white;
        border: 1px solid #666;
      }
      .privacy-btn-secondary:hover {
        background: #333;
      }
      .privacy-link {
        color: #00ff88;
        text-decoration: none;
        font-size: 0.9rem;
      }
      .privacy-link:hover {
        text-decoration: underline;
      }
      @media (max-width: 768px) {
        .privacy-banner-content {
          flex-direction: column;
          text-align: center;
        }
        .privacy-banner-buttons {
          justify-content: center;
        }
      }
    `;
    document.head.appendChild(style);

    return banner;
  }

  private showConsentBanner(): void {
    if (this.bannerShown) return;

    const banner = this.createConsentBanner();
    document.body.appendChild(banner);
    this.bannerShown = true;

    // Add event listeners
    const acceptAll = banner.querySelector('#accept-all') as HTMLButtonElement;
    const acceptFunctional = banner.querySelector('#accept-functional') as HTMLButtonElement;

    acceptAll?.addEventListener('click', () => {
      this.setConsent({ analytics: true, functional: true });
      banner.remove();
    });

    acceptFunctional?.addEventListener('click', () => {
      this.setConsent({ analytics: false, functional: true });
      banner.remove();
    });
  }

  private setConsent(consent: { analytics: boolean; functional: boolean }): void {
    const consentState: ConsentState = {
      ...consent,
      timestamp: Date.now()
    };

    this.saveConsent(consentState);

    if (consent.analytics) {
      this.initializeAnalytics();
    }
  }

  private checkConsent(): void {
    const consent = this.getConsentState();

    if (!consent) {
      // No consent yet, show banner
      setTimeout(() => this.showConsentBanner(), 1000);
    } else {
      // Has consent, initialize accordingly
      this.initializeAnalytics();
    }
  }

  // Public method to check if analytics is enabled
  public hasAnalyticsConsent(): boolean {
    const consent = this.getConsentState();
    return consent?.analytics || false;
  }

  // Public method to revoke consent
  public revokeConsent(): void {
    localStorage.removeItem(this.consentKey);
    location.reload();
  }
}

export default PrivacyConsent;