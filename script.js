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
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwxn9hpwmCHq7uzYI0wEua_OV1hVeHkC-axkCbo2_kLyGTvt22unZ3sPiRh2emCudM/exec";

/* ====================================================================
   3) TŁUMACZENIA (PL / EN)
   Jeśli chcesz zmienić treść w którymś języku, edytuj tekst poniżej.
   ==================================================================== */
const TRANSLATIONS = {
  pl: {
    gateTitle: "Wesele Nikodema i Anny",
    gateText: "Ta strona jest tylko dla naszych gości. Podajcie hasło, które dostaliście na zaproszeniu.",
    gatePasswordPlaceholder: "Hasło",
    gateButton: "Wejdź",
    gateError: "To hasło nie pasuje — spróbujcie jeszcze raz.",
    heroEyebrow: "Zapraszamy na nasz ślub",
    heroDate: "8 maja 2027 · Chybie & Jaworze",
    welcomeText: "Kochani, 8 maja 2027 roku powiemy sobie „tak” i chcemy mieć Was wtedy blisko siebie. Na tej stronie znajdziecie wszystko, co potrzebne na ten dzień — gdzie i o której się spotykamy oraz krótki formularz, w którym dacie nam znać, czy możemy na Was liczyć. Nie możemy się doczekać, żeby świętować razem z Wami.",
    timelineTitle: "Plan dnia",
    timelineChurch: "Ceremonia w kościele",
    timelineParty: "Przyjęcie weselne",
    churchKicker: "Godzina 13:00",
    churchName: "Kościół Chrystusa Króla",
    venueKicker: "Godzina 14:30",
    venueName: "Gościniec Szumny",
    mapLink: "Otwórz w Mapach Google →",
    rsvpTitle: "Potwierdź obecność",
    rsvpIntro: "Dajcie nam znać do 1 kwietnia 2027 — to bardzo pomoże nam w organizacji.",
    labelImie: "Imię i nazwisko",
    placeholderImie: "np. Dariusz Moroz",
    legendKosciol: "Czy będziesz na ceremonii w kościele (13:00)?",
    legendWesele: "Czy będziesz na przyjęciu weselnym (14:30)?",
    radioTak: "Tak, będę",
    radioNie: "Niestety nie",
    legendNocleg: "Czy potrzebujecie noclegu?",
    noclegTak: "Tak, poproszę",
    noclegNie: "Nie, mamy własny",
    noclegNieWiem: "Jeszcze nie wiem",
    labelDieta: "Dieta",
    dietaWybierz: "Wybierz…",
    dietaStandardowa: "Standardowa",
    dietaWege: "Wegetariańska",
    dietaWegan: "Wegańska",
    dietaGluten: "Bezglutenowa",
    dietaInna: "Inna (napiszcie w uwagach)",
    labelTowarzyszacy: "Czy ktoś Ci towarzyszy?",
    towarzyszacy0: "Nie, przyjdę/przyjadę sam/a",
    towarzyszacy1: "Tak, 1 osoba",
    towarzyszacy2: "Tak, 2 osoby",
    companionLegend: "Osoba towarzysząca",
    companionImie: "Imię i nazwisko",
    companionImiePlaceholder: "np. Jan Kowalski",
    companionDieta: "Dieta tej osoby",
    labelUwagi: "Uwagi",
    labelUwagiEm: "(alergie, dziecko — cokolwiek chcecie nam przekazać)",
    uwagiPlaceholder: "Opcjonalnie",
    submitBtn: "Wyślij potwierdzenie",
    footerText: "Wasza obecność to dla nas największy prezent. Jeśli jednak chcielibyście nas czymś obdarować, zamiast kwiatów najbardziej ucieszy nas los na loterię — kto wie, może to właśnie Wy przyniesiecie nam szczęście na nowej drodze. 🍀",
    footerSignature: "Do zobaczenia 8 maja 2027 — Nikodem & Anna",
    statusNotConnected: "Formularz nie jest jeszcze podłączony do arkusza — zobacz README.md.",
    statusSending: "Wysyłanie…",
    statusOk: "Dziękujemy! Wasza odpowiedź została zapisana. 🎉",
    statusErr: "Coś poszło nie tak — spróbujcie jeszcze raz lub napiszcie do nas bezpośrednio."
  },
  en: {
    gateTitle: "Nikodem & Anna's Wedding",
    gateText: "This page is just for our guests. Please enter the password from your invitation.",
    gatePasswordPlaceholder: "Password",
    gateButton: "Enter",
    gateError: "That password doesn't match — please try again.",
    heroEyebrow: "You're invited to our wedding",
    heroDate: "May 8, 2027 · Chybie & Jaworze, Poland",
    welcomeText: "Dear friends and family, on May 8, 2027 we're saying \"I do\" — and we'd love to have you there with us. On this page you'll find everything you need for the day: where and when we're meeting, plus a short form to let us know if we can count on you. We can't wait to celebrate together.",
    timelineTitle: "Schedule",
    timelineChurch: "Church ceremony",
    timelineParty: "Wedding reception",
    churchKicker: "1:00 PM",
    churchName: "Christ the King Church",
    venueKicker: "2:30 PM",
    venueName: "Gościniec Szumny",
    mapLink: "Open in Google Maps →",
    rsvpTitle: "RSVP",
    rsvpIntro: "Please let us know by April 1, 2027 — it really helps with planning.",
    labelImie: "Full name",
    placeholderImie: "e.g. Jane Smith",
    legendKosciol: "Will you attend the church ceremony (1:00 PM)?",
    legendWesele: "Will you attend the reception (2:30 PM)?",
    radioTak: "Yes, I'll be there",
    radioNie: "Sorry, can't make it",
    legendNocleg: "Do you need accommodation?",
    noclegTak: "Yes, please",
    noclegNie: "No, we're sorted",
    noclegNieWiem: "Not sure yet",
    labelDieta: "Dietary needs",
    dietaWybierz: "Choose…",
    dietaStandardowa: "Standard",
    dietaWege: "Vegetarian",
    dietaWegan: "Vegan",
    dietaGluten: "Gluten-free",
    dietaInna: "Other (tell us in the notes)",
    labelTowarzyszacy: "Is anyone joining you?",
    towarzyszacy0: "No, just me",
    towarzyszacy1: "Yes, 1 person",
    towarzyszacy2: "Yes, 2 people",
    companionLegend: "Guest",
    companionImie: "Full name",
    companionImiePlaceholder: "e.g. John Smith",
    companionDieta: "Their dietary needs",
    labelUwagi: "Notes",
    labelUwagiEm: "(allergies, kids, anything else we should know)",
    uwagiPlaceholder: "Optional",
    submitBtn: "Send RSVP",
    footerText: "Your presence is the only gift we need. If you'd still like to give us something, instead of flowers we'd love a lottery ticket — who knows, maybe you'll bring us luck on this new road. 🍀",
    footerSignature: "See you on May 8, 2027 — Nikodem & Anna",
    statusNotConnected: "The form isn't connected to the spreadsheet yet — see README.md.",
    statusSending: "Sending…",
    statusOk: "Thank you! Your response has been saved. 🎉",
    statusErr: "Something went wrong — please try again or contact us directly."
  }
};

let currentLang = localStorage.getItem("wesele_lang") || "pl";

function applyTranslations() {
  const dict = TRANSLATIONS[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  document.documentElement.lang = currentLang;
  document.getElementById("lang-toggle").textContent = currentLang === "pl" ? "EN" : "PL";
  if (typeof renderCompanionFields === "function") renderCompanionFields();
}

document.getElementById("lang-toggle").addEventListener("click", function () {
  currentLang = currentLang === "pl" ? "en" : "pl";
  localStorage.setItem("wesele_lang", currentLang);
  applyTranslations();
});

const companionsSelect = document.getElementById("liczba-towarzyszacych");
const companionsContainer = document.getElementById("companions-container");
const DIET_OPTIONS = ["Standardowa", "Wegetariańska", "Wegańska", "Bezglutenowa", "Inna"];
const DIET_KEYS = ["dietaStandardowa", "dietaWege", "dietaWegan", "dietaGluten", "dietaInna"];

function renderCompanionFields() {
  const count = parseInt(companionsSelect.value, 10) || 0;
  const dict = TRANSLATIONS[currentLang];
  companionsContainer.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "field companion-block";

    const legend = document.createElement("legend");
    legend.textContent = dict.companionLegend + " " + i;
    fieldset.appendChild(legend);

    const nameLabel = document.createElement("label");
    nameLabel.className = "field";
    const nameSpan = document.createElement("span");
    nameSpan.textContent = dict.companionImie;
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "companion" + i + "_imie";
    nameInput.required = true;
    nameInput.placeholder = dict.companionImiePlaceholder;
    nameLabel.appendChild(nameSpan);
    nameLabel.appendChild(nameInput);

    const dietLabel = document.createElement("label");
    dietLabel.className = "field";
    const dietSpan = document.createElement("span");
    dietSpan.textContent = dict.companionDieta;
    const dietSelect = document.createElement("select");
    dietSelect.name = "companion" + i + "_dieta";
    dietSelect.required = true;
    const emptyOpt = document.createElement("option");
    emptyOpt.value = "";
    emptyOpt.textContent = dict.dietaWybierz;
    dietSelect.appendChild(emptyOpt);
    DIET_OPTIONS.forEach(function (value, idx) {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = dict[DIET_KEYS[idx]];
      dietSelect.appendChild(opt);
    });
    dietLabel.appendChild(dietSpan);
    dietLabel.appendChild(dietSelect);

    fieldset.appendChild(nameLabel);
    fieldset.appendChild(dietLabel);
    companionsContainer.appendChild(fieldset);
  }
}

companionsSelect.addEventListener("change", renderCompanionFields);

applyTranslations();

/* ---------------------------------------------------------------- */

const gate = document.getElementById("gate");
const site = document.getElementById("site");
const gateForm = document.getElementById("gate-form");
const gateError = document.getElementById("gate-error");

function unlockSite(remember) {
  gate.classList.add("hidden");
  site.classList.remove("hidden");
  if (remember) {
    localStorage.setItem("wesele_unlocked", "yes");
  }
}

// 1) Jeśli to urządzenie już raz podało poprawne hasło, wpuszczamy bez pytania.
//    (localStorage pamięta to na stałe, nie tylko do zamknięcia karty)
if (localStorage.getItem("wesele_unlocked") === "yes") {
  unlockSite(false);
} else {
  // 2) Jeśli link zawiera ?haslo=... (np. z zeskanowanego kodu QR) i pasuje,
  //    wpuszczamy automatycznie — gość nic nie musi wpisywać.
  const urlParams = new URLSearchParams(window.location.search);
  const haslowUrl = urlParams.get("haslo");
  if (haslowUrl && haslowUrl.toLowerCase() === SITE_PASSWORD.toLowerCase()) {
    unlockSite(true);
    // Usuwamy hasło z paska adresu, żeby nie zostawało widoczne/w historii.
    urlParams.delete("haslo");
    const cleanUrl = window.location.pathname + (urlParams.toString() ? "?" + urlParams.toString() : "");
    window.history.replaceState({}, document.title, cleanUrl);
  }
}

gateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.getElementById("gate-password").value.trim();
  if (value.toLowerCase() === SITE_PASSWORD.toLowerCase()) {
    gateError.classList.remove("show");
    unlockSite(true);
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
    rsvpStatus.textContent = TRANSLATIONS[currentLang].statusNotConnected;
    rsvpStatus.className = "rsvp-status err";
    return;
  }

  const formData = new FormData(rsvpForm);

  const companionCount = parseInt(companionsSelect.value, 10) || 0;
  const companionParts = [];
  for (let i = 1; i <= companionCount; i++) {
    const cName = formData.get("companion" + i + "_imie") || "";
    const cDiet = formData.get("companion" + i + "_dieta") || "";
    companionParts.push(cName + " (" + cDiet + ")");
  }

  const payload = {
    imie: formData.get("imie"),
    kosciol: formData.get("kosciol"),
    wesele: formData.get("wesele"),
    nocleg: formData.get("nocleg"),
    towarzyszacy: companionParts.join("; "),
    dieta: formData.get("dieta"),
    uwagi: formData.get("uwagi") || ""
  };

  const submitBtn = rsvpForm.querySelector(".submit-btn");
  submitBtn.disabled = true;
  rsvpStatus.textContent = TRANSLATIONS[currentLang].statusSending;
  rsvpStatus.className = "rsvp-status";

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  })
    .then(function () {
      rsvpStatus.textContent = TRANSLATIONS[currentLang].statusOk;
      rsvpStatus.className = "rsvp-status ok";
      rsvpForm.reset();
      submitBtn.disabled = false;
    })
    .catch(function () {
      rsvpStatus.textContent = TRANSLATIONS[currentLang].statusErr;
      rsvpStatus.className = "rsvp-status err";
      submitBtn.disabled = false;
    });
});
