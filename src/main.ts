// GDPR-compliant analytics
import PrivacyConsent from './privacy-consent';

// Initialize privacy consent system
new PrivacyConsent();

(() => {
  const toggle = document.getElementById("nav-toggle") as HTMLButtonElement | null;
  const links = document.getElementById("nav-links") as HTMLUListElement | null;

  toggle?.addEventListener("click", () => {
    links?.classList.toggle("open");
  });

  links?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });
})();
