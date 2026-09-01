/* ====================================================================
   1) HASŁO DO STRONY
   Zmieńcie poniższy tekst na własne hasło (to, które damy gościom).
   UWAGA: to jest tylko "kurtyna" przed przypadkowymi osobami z linku —
   każdy, kto zajrzy w kod strony, może je zobaczyć. To NIE jest
   prawdziwe zabezpieczenie danych, tylko prosty filtr.
   ==================================================================== */
const SITE_PASSWORD = "NikodemAnna2027";

/* ====================================================================
   2) ADRES WEB APP Z GOOGLE APPS SCRIPT
   Po wdrożeniu skryptu (patrz README.md) wklejcie tu URL, który
   dostaniecie z "Wdróż" -> "Nowe wdrożenie" -> "Aplikacja internetowa".
   ==================================================================== */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwCIBerym0JQdOX-9kHe0j6-HgClCNcHN3ENmvKL42WFMpm_expojLkxJG-3T0CbGA/exec";

/* ---------------------------------------------------------------- */

const gate = document.getElementById("gate");
const site = document.getElementById("site");
const gateForm = document.getElementById("gate-form");
const gateError = document.getElementById("gate-error");

function unlockSite() {
  gate.classList.add("hidden");
  site.classList.remove("hidden");
}

// Jeśli gość już podał hasło w tej sesji przeglądarki, nie pytamy ponownie.
if (sessionStorage.getItem("wesele_unlocked") === "yes") {
  unlockSite();
}

gateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.getElementById("gate-password").value.trim();
  if (value.toLowerCase() === SITE_PASSWORD.toLowerCase()) {
    sessionStorage.setItem("wesele_unlocked", "yes");
    gateError.classList.remove("show");
    unlockSite();
  } else {
    gateError.classList.add("show");
  }
});

/* ---------------------------------------------------------------- */

const rsvpForm = document.getElementById("rsvp-form");
const rsvpStatus = document.getElementById("rsvp-status");

rsvpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (GOOGLE_SCRIPT_URL.indexOf("http") !== 0) {
    rsvpStatus.textContent = "Formularz nie jest jeszcze podłączony do arkusza — zobacz README.md.";
    rsvpStatus.className = "rsvp-status err";
    return;
  }

  const formData = new FormData(rsvpForm);
  const payload = {
    imie: formData.get("imie"),
    kosciol: formData.get("kosciol"),
    wesele: formData.get("wesele"),
    dieta: formData.get("dieta"),
    uwagi: formData.get("uwagi") || ""
  };

  const submitBtn = rsvpForm.querySelector(".submit-btn");
  submitBtn.disabled = true;
  rsvpStatus.textContent = "Wysyłanie…";
  rsvpStatus.className = "rsvp-status";

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  })
    .then(function () {
      rsvpStatus.textContent = "Dziękujemy! Wasza odpowiedź została zapisana. 🎉";
      rsvpStatus.className = "rsvp-status ok";
      rsvpForm.reset();
      submitBtn.disabled = false;
    })
    .catch(function () {
      rsvpStatus.textContent = "Coś poszło nie tak — spróbujcie jeszcze raz lub napiszcie do nas bezpośrednio.";
      rsvpStatus.className = "rsvp-status err";
      submitBtn.disabled = false;
    });
});
