(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=()=>{window.va||(window.va=function(...e){window.vaq||(window.vaq=[]),window.vaq.push(e)})},t=`@vercel/analytics`,n=`2.0.1`;function r(){return typeof window<`u`}function i(){return`production`}function a(e=`auto`){if(e===`auto`){window.vam=i();return}window.vam=e}function o(){return(r()?window.vam:i())||`production`}function s(){return o()===`development`}function c(e){return e.scriptSrc?u(e.scriptSrc):s()?`https://va.vercel-scripts.com/v1/script.debug.js`:e.basePath?u(`${e.basePath}/insights/script.js`):`/_vercel/insights/script.js`}function l(e,r){let i=e;if(r)try{i={...JSON.parse(r)?.analytics,...e}}catch{}a(i.mode);let o={sdkn:t+(i.framework?`/${i.framework}`:``),sdkv:n};return i.disableAutoTrack&&(o.disableAutoTrack=`1`),i.viewEndpoint&&(o.viewEndpoint=u(i.viewEndpoint)),i.eventEndpoint&&(o.eventEndpoint=u(i.eventEndpoint)),i.sessionEndpoint&&(o.sessionEndpoint=u(i.sessionEndpoint)),s()&&i.debug===!1&&(o.debug=`false`),i.dsn&&(o.dsn=i.dsn),i.endpoint?o.endpoint=i.endpoint:i.basePath&&(o.endpoint=u(`${i.basePath}/insights`)),{beforeSend:i.beforeSend,src:c(i),dataset:o}}function u(e){return e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:`/${e}`}function d(t={debug:!0},n){var i;if(!r())return;let{beforeSend:a,src:o,dataset:c}=l(t,n);if(e(),a&&((i=window.va)==null||i.call(window,`beforeSend`,a)),document.head.querySelector(`script[src*="${o}"]`))return;let u=document.createElement(`script`);u.src=o;for(let[e,t]of Object.entries(c))u.dataset[e]=t;u.defer=!0,u.onerror=()=>{let e=s()?`Please check if any ad blockers are enabled and try again.`:`Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;console.log(`[Vercel Web Analytics] Failed to load script from ${o}. ${e}`)},document.head.appendChild(u)}new class{consentKey=`marius-portfolio-consent`;bannerShown=!1;constructor(){this.checkConsent()}getConsentState(){let e=localStorage.getItem(this.consentKey);if(!e)return null;try{let t=JSON.parse(e);return Date.now()-t.timestamp>365*24*60*60*1e3?(localStorage.removeItem(this.consentKey),null):t}catch{return null}}saveConsent(e){localStorage.setItem(this.consentKey,JSON.stringify(e))}initializeAnalytics(){this.getConsentState()?.analytics&&d()}createConsentBanner(){let e=document.createElement(`div`);e.id=`privacy-banner`,e.className=`privacy-banner`;let t=window.location.pathname.includes(`/de`);e.innerHTML=`
      <div class="privacy-banner-content">
        <p>
          ${t?`Diese Website verwendet Vercel Analytics zur Verbesserung der Nutzererfahrung. Ihre Daten werden GDPR-konform verarbeitet.`:`This website uses Vercel Analytics to improve user experience. Your data is processed in compliance with GDPR.`}
        </p>
        <div class="privacy-banner-buttons">
          <button id="accept-all" class="privacy-btn privacy-btn-primary">
            ${t?`Alle akzeptieren`:`Accept All`}
          </button>
          <button id="accept-functional" class="privacy-btn privacy-btn-secondary">
            ${t?`Nur funktional`:`Functional Only`}
          </button>
          <a href="${t?`/de/datenschutz.html`:`/privacy.html`}" class="privacy-link">
            ${t?`Datenschutzerklärung`:`Privacy Policy`}
          </a>
        </div>
      </div>
    `;let n=document.createElement(`style`);return n.textContent=`
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
    `,document.head.appendChild(n),e}showConsentBanner(){if(this.bannerShown)return;let e=this.createConsentBanner();document.body.appendChild(e),this.bannerShown=!0;let t=e.querySelector(`#accept-all`),n=e.querySelector(`#accept-functional`);t?.addEventListener(`click`,()=>{this.setConsent({analytics:!0,functional:!0}),e.remove()}),n?.addEventListener(`click`,()=>{this.setConsent({analytics:!1,functional:!0}),e.remove()})}setConsent(e){let t={...e,timestamp:Date.now()};this.saveConsent(t),e.analytics&&this.initializeAnalytics()}checkConsent(){this.getConsentState()?this.initializeAnalytics():setTimeout(()=>this.showConsentBanner(),1e3)}hasAnalyticsConsent(){return this.getConsentState()?.analytics||!1}revokeConsent(){localStorage.removeItem(this.consentKey),location.reload()}},(()=>{let e=document.getElementById(`nav-toggle`),t=document.getElementById(`nav-links`);e?.addEventListener(`click`,()=>{t?.classList.toggle(`open`)}),t?.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{t.classList.remove(`open`)})})})();