/* ====================================================================
   1) HASŁO DO STRONY
   ==================================================================== */
const SITE_PASSWORD = "NikodemAnna2027";

/* ====================================================================
   2) ADRES WEB APP Z GOOGLE APPS SCRIPT
   ==================================================================== */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_cboFIgVaeFmsCwD7ngCxmGyB67dPxdPT1zSqZbnBM2qIX_Q7Uugvm7a1ABBOOuk/exec";

/* ====================================================================
   3) TŁUMACZENIA (PL / EN)
   ==================================================================== */
const T = {
  pl: {
    gateTitle: "Wesele Nikodema i Anny",
    gateText: "Ta strona jest tylko dla naszych gości. Podajcie hasło, które dostaliście na zaproszeniu.",
    gatePasswordPlaceholder: "Hasło",
    gateButton: "Wejdź",
    gateError: "To hasło nie pasuje — spróbujcie jeszcze raz.",
    heroEyebrow: "Zapraszamy na nasz ślub",
    heroDate: "8 maja 2027 · Chybie & Jaworze",
    welcomeText: "Kochani, 8 maja 2027 roku powiemy sobie 'tak' i chcemy mie\u0107 Was wtedy blisko siebie. Na tej stronie znajdziecie wszystko, co potrzebne na ten dzie\u0144 \u2014 gdzie i o kt\u00f3rej si\u0119 spotykamy oraz kr\u00f3tki formularz, w kt\u00f3rym dacie nam zna\u0107, czy mo\u017cemy na Was liczy\u0107. Nie mo\u017cemy si\u0119 doczeka\u0107, \u017ceby \u015bwi\u0119towa\u0107 razem z Wami.",
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
    mainGuestLabel: "Twoje dane",
    labelImie: "Imię i nazwisko",
    placeholderImie: "np. Dariusz Moroz",
    legendKosciol: "Czy będziesz na ceremonii w kościele (13:00)?",
    legendWesele: "Czy będziesz na przyjęciu weselnym (14:30)?",
    radioTak: "Tak, będę",
    radioNie: "Niestety nie",
    labelDieta: "Dieta",
    dietaWybierz: "Wybierz…",
    dietaStandardowa: "Standardowa",
    dietaWege: "Wegetariańska",
    dietaWegan: "Wegańska",
    dietaGluten: "Bezglutenowa",
    dietaInna: "Inna (napiszcie w uwagach)",
    legendNocleg: "Nocleg",
    noclegTak: "Tak, poproszę",
    noclegNie: "Nie potrzebuję",
    noclegNieWiem: "Jeszcze nie wiem",
    addGuestBtn: "+ Dodaj osobę towarzyszącą / dziecko",
    guestLabel: "Osoba",
    guestRemove: "Usuń",
    guestImie: "Imię i nazwisko",
    guestImiePlaceholder: "np. Anna Kowalska",
    guestKategoria: "Kategoria",
    katDorosly: "Dorosły",
    katDziecko: "Dziecko (4–15 lat)",
    katMaluch: "Maluch (0–3 lata)",
    guestWiek: "Wiek dziecka",
    guestWiekPlaceholder: "np. 6",
    guestDieta: "Dieta",
    guestNocleg: "Nocleg",
    labelUwagi: "Uwagi",
    labelUwagiEm: "(alergie, specjalne potrzeby — cokolwiek chcecie nam przekazać)",
    uwagiPlaceholder: "Opcjonalnie",
    submitBtn: "Wyślij potwierdzenie",
    footerText: "Wasza obecność to dla nas największy prezent. Jeśli jednak chcielibyście nas czymś obdarować, zamiast kwiatów najbardziej ucieszy nas los na loterię — kto wie, może to właśnie Wy przyniesiecie nam szczęście na nowej drodze. 🍀",
    footerSignature: "Do zobaczenia 8 maja 2027 — Nikodem & Anna",
    statusNotConnected: "Formularz nie jest jeszcze podłączony do arkusza — zobacz README.md.",
    statusSending: "Wysyłanie…",
    statusOk: "Dziękujemy! Wasza odpowiedź została zapisana. 🎉",
    statusErr: "Coś poszło nie tak — spróbujcie jeszcze raz lub napiszcie do nas bezpośrednio.",
    maxGuests: "Można dodać maksymalnie 10 osób."
  },
  en: {
    gateTitle: "Nikodem & Anna's Wedding",
    gateText: "This page is just for our guests. Please enter the password from your invitation.",
    gatePasswordPlaceholder: "Password",
    gateButton: "Enter",
    gateError: "That password doesn't match — please try again.",
    heroEyebrow: "You're invited to our wedding",
    heroDate: "May 8, 2027 · Chybie & Jaworze, Poland",
    welcomeText: "Dear friends and family, on May 8, 2027 we're saying 'I do' — and we'd love to have you there with us. On this page you'll find everything you need for the day: where and when we're meeting, plus a short form to let us know if we can count on you. We can't wait to celebrate together.",
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
    mainGuestLabel: "Your details",
    labelImie: "Full name",
    placeholderImie: "e.g. Jane Smith",
    legendKosciol: "Will you attend the church ceremony (1:00 PM)?",
    legendWesele: "Will you attend the reception (2:30 PM)?",
    radioTak: "Yes, I'll be there",
    radioNie: "Sorry, can't make it",
    labelDieta: "Dietary needs",
    dietaWybierz: "Choose…",
    dietaStandardowa: "Standard",
    dietaWege: "Vegetarian",
    dietaWegan: "Vegan",
    dietaGluten: "Gluten-free",
    dietaInna: "Other (tell us in the notes)",
    legendNocleg: "Accommodation",
    noclegTak: "Yes, please",
    noclegNie: "No, I'm sorted",
    noclegNieWiem: "Not sure yet",
    addGuestBtn: "+ Add a guest / child",
    guestLabel: "Guest",
    guestRemove: "Remove",
    guestImie: "Full name",
    guestImiePlaceholder: "e.g. John Smith",
    guestKategoria: "Category",
    katDorosly: "Adult",
    katDziecko: "Child (4–15 yrs)",
    katMaluch: "Toddler (0–3 yrs)",
    guestWiek: "Child's age",
    guestWiekPlaceholder: "e.g. 6",
    guestDieta: "Dietary needs",
    guestNocleg: "Accommodation",
    labelUwagi: "Notes",
    labelUwagiEm: "(allergies, special needs — anything else we should know)",
    uwagiPlaceholder: "Optional",
    submitBtn: "Send RSVP",
    footerText: "Your presence is the only gift we need. If you'd still like to give us something, instead of flowers we'd love a lottery ticket — who knows, maybe you'll bring us luck on this new road. 🍀",
    footerSignature: "See you on May 8, 2027 — Nikodem & Anna",
    statusNotConnected: "The form isn't connected to the spreadsheet yet — see README.md.",
    statusSending: "Sending…",
    statusOk: "Thank you! Your response has been saved. 🎉",
    statusErr: "Something went wrong — please try again or contact us directly.",
    maxGuests: "You can add up to 10 people."
  }
};

let lang = localStorage.getItem("wesele_lang") || "pl";

function applyTranslations() {
  var d = T[lang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var k = el.getAttribute("data-i18n");
    if (d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var k = el.getAttribute("data-i18n-placeholder");
    if (d[k] !== undefined) el.setAttribute("placeholder", d[k]);
  });
  document.documentElement.lang = lang;
  document.getElementById("lang-toggle").textContent = lang === "pl" ? "EN" : "PL";
  renderAllGuests();
}

document.getElementById("lang-toggle").addEventListener("click", function () {
  lang = lang === "pl" ? "en" : "pl";
  localStorage.setItem("wesele_lang", lang);
  applyTranslations();
});

/* ================================================================
   DYNAMICZNE POLA — DODATKOWI GOŚCIE (do 10)
   ================================================================ */
var guestCount = 0;
var MAX_GUESTS = 10;
var guestsData = []; // przechowuje {id, kategoria} żeby odtwarzać pola

var guestsContainer = document.getElementById("guests-container");
var addBtn = document.getElementById("add-guest-btn");

addBtn.addEventListener("click", function () {
  if (guestCount >= MAX_GUESTS) {
    alert(T[lang].maxGuests);
    return;
  }
  guestCount++;
  guestsData.push({ id: guestCount, kategoria: "dorosly" });
  renderAllGuests();
});

function renderAllGuests() {
  // Zachowaj wartości pól przed przerysowaniem
  var savedValues = {};
  guestsData.forEach(function (g) {
    var prefix = "g" + g.id + "_";
    var nameEl = document.querySelector('[name="' + prefix + 'imie"]');
    var katEl = document.querySelector('[name="' + prefix + 'kategoria"]');
    var wiekEl = document.querySelector('[name="' + prefix + 'wiek"]');
    var dietEl = document.querySelector('[name="' + prefix + 'dieta"]');
    var noclegRadios = document.querySelectorAll('[name="' + prefix + 'nocleg"]');
    savedValues[g.id] = {
      imie: nameEl ? nameEl.value : "",
      kategoria: katEl ? katEl.value : g.kategoria,
      wiek: wiekEl ? wiekEl.value : "",
      dieta: dietEl ? dietEl.value : "",
      nocleg: ""
    };
    noclegRadios.forEach(function (r) { if (r.checked) savedValues[g.id].nocleg = r.value; });
    g.kategoria = savedValues[g.id].kategoria;
  });

  guestsContainer.innerHTML = "";
  var d = T[lang];

  guestsData.forEach(function (g, idx) {
    var sv = savedValues[g.id] || {};
    var prefix = "g" + g.id + "_";
    var isMaluch = g.kategoria === "maluch";
    var isDziecko = g.kategoria === "dziecko" || isMaluch;

    var block = document.createElement("div");
    block.className = "guest-block extra-guest";

    // Header z numerem i przyciskiem usuwania
    var header = document.createElement("div");
    header.className = "guest-block-header";
    var label = document.createElement("span");
    label.className = "guest-block-label";
    label.textContent = d.guestLabel + " " + (idx + 1);
    var removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "guest-remove-btn";
    removeBtn.textContent = d.guestRemove;
    removeBtn.setAttribute("data-guest-id", g.id);
    removeBtn.addEventListener("click", function () {
      var rid = parseInt(this.getAttribute("data-guest-id"), 10);
      guestsData = guestsData.filter(function (x) { return x.id !== rid; });
      guestCount = guestsData.length;
      renderAllGuests();
    });
    header.appendChild(label);
    header.appendChild(removeBtn);
    block.appendChild(header);

    // Imię
    var nameField = makeField("text", prefix + "imie", d.guestImie, d.guestImiePlaceholder, sv.imie, true);
    block.appendChild(nameField);

    // Kategoria
    var katField = document.createElement("label");
    katField.className = "field";
    var katSpan = document.createElement("span");
    katSpan.textContent = d.guestKategoria;
    var katSelect = document.createElement("select");
    katSelect.name = prefix + "kategoria";
    katSelect.required = true;
    [["dorosly", d.katDorosly], ["dziecko", d.katDziecko], ["maluch", d.katMaluch]].forEach(function (opt) {
      var o = document.createElement("option");
      o.value = opt[0];
      o.textContent = opt[1];
      if (opt[0] === g.kategoria) o.selected = true;
      katSelect.appendChild(o);
    });
    katSelect.setAttribute("data-guest-id", g.id);
    katSelect.addEventListener("change", function () {
      var gid = parseInt(this.getAttribute("data-guest-id"), 10);
      guestsData.forEach(function (x) { if (x.id === gid) x.kategoria = katSelect.value; });
      renderAllGuests();
    });
    katField.appendChild(katSpan);
    katField.appendChild(katSelect);
    block.appendChild(katField);

    // Wiek (tylko dla dzieci i maluchów)
    if (isDziecko) {
      var maxAge = isMaluch ? 3 : 15;
      var minAge = isMaluch ? 0 : 4;
      var wiekField = document.createElement("label");
      wiekField.className = "field";
      var wiekSpan = document.createElement("span");
      wiekSpan.textContent = d.guestWiek;
      var wiekInput = document.createElement("input");
      wiekInput.type = "number";
      wiekInput.name = prefix + "wiek";
      wiekInput.min = String(minAge);
      wiekInput.max = String(maxAge);
      wiekInput.required = true;
      wiekInput.placeholder = d.guestWiekPlaceholder;
      wiekInput.value = sv.wiek || "";
      wiekField.appendChild(wiekSpan);
      wiekField.appendChild(wiekInput);
      block.appendChild(wiekField);
    }

    // Dieta (ukryta dla maluchów 0–3)
    if (!isMaluch) {
      var dietField = document.createElement("label");
      dietField.className = "field";
      var dietSpan = document.createElement("span");
      dietSpan.textContent = d.guestDieta;
      var dietSelect = document.createElement("select");
      dietSelect.name = prefix + "dieta";
      dietSelect.required = true;
      [["", d.dietaWybierz], ["Standardowa", d.dietaStandardowa], ["Wegetariańska", d.dietaWege],
       ["Wegańska", d.dietaWegan], ["Bezglutenowa", d.dietaGluten], ["Inna", d.dietaInna]].forEach(function (opt) {
        var o = document.createElement("option");
        o.value = opt[0];
        o.textContent = opt[1];
        if (opt[0] === (sv.dieta || "")) o.selected = true;
        dietSelect.appendChild(o);
      });
      dietField.appendChild(dietSpan);
      dietField.appendChild(dietSelect);
      block.appendChild(dietField);
    }

    // Nocleg (ukryty dla maluchów — śpią z rodzicami)
    if (!isMaluch) {
      var noclegFs = document.createElement("fieldset");
      noclegFs.className = "field";
      var noclegLegend = document.createElement("legend");
      noclegLegend.textContent = d.guestNocleg;
      noclegFs.appendChild(noclegLegend);
      var noclegRow = document.createElement("div");
      noclegRow.className = "radio-row";
      [["Tak", d.noclegTak], ["Nie", d.noclegNie], ["Nie wiem", d.noclegNieWiem]].forEach(function (opt) {
        var lbl = document.createElement("label");
        lbl.className = "radio";
        var inp = document.createElement("input");
        inp.type = "radio";
        inp.name = prefix + "nocleg";
        inp.value = opt[0];
        inp.required = true;
        if (opt[0] === sv.nocleg) inp.checked = true;
        var span = document.createElement("span");
        span.textContent = " " + opt[1];
        lbl.appendChild(inp);
        lbl.appendChild(span);
        noclegRow.appendChild(lbl);
      });
      noclegFs.appendChild(noclegRow);
      block.appendChild(noclegFs);
    }

    guestsContainer.appendChild(block);
  });
}

function makeField(type, name, labelText, placeholder, value, required) {
  var lbl = document.createElement("label");
  lbl.className = "field";
  var span = document.createElement("span");
  span.textContent = labelText;
  var input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.placeholder = placeholder || "";
  input.value = value || "";
  if (required) input.required = true;
  lbl.appendChild(span);
  lbl.appendChild(input);
  return lbl;
}

/* Inicjalizacja tłumaczeń */
applyTranslations();

/* ================================================================
   BRAMKA HASŁA
   ================================================================ */
var gate = document.getElementById("gate");
var site = document.getElementById("site");
var gateForm = document.getElementById("gate-form");
var gateError = document.getElementById("gate-error");

function unlockSite(remember) {
  gate.classList.add("hidden");
  site.classList.remove("hidden");
  if (remember) localStorage.setItem("wesele_unlocked", "yes");
}

if (localStorage.getItem("wesele_unlocked") === "yes") {
  unlockSite(false);
}

// Auto-odblokowanie z parametru ?haslo= (QR)
(function () {
  var params = new URLSearchParams(window.location.search);
  var h = params.get("haslo");
  if (h && h.toLowerCase() === SITE_PASSWORD.toLowerCase()) {
    unlockSite(true);
    params.delete("haslo");
    var clean = window.location.pathname + (params.toString() ? "?" + params.toString() : "");
    window.history.replaceState({}, document.title, clean);
  }
})();

gateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var value = document.getElementById("gate-password").value.trim();
  if (value.toLowerCase() === SITE_PASSWORD.toLowerCase()) {
    gateError.classList.remove("show");
    unlockSite(true);
  } else {
    gateError.classList.add("show");
  }
});

/* ================================================================
   WYSYŁKA FORMULARZA RSVP
   ================================================================ */
var rsvpForm = document.getElementById("rsvp-form");
var rsvpStatus = document.getElementById("rsvp-status");

rsvpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (GOOGLE_SCRIPT_URL.indexOf("http") !== 0) {
    rsvpStatus.textContent = T[lang].statusNotConnected;
    rsvpStatus.className = "rsvp-status err";
    return;
  }

  var fd = new FormData(rsvpForm);

  // Zbieramy dane dodatkowych gości w czytelny format
  var guestsText = [];
  guestsData.forEach(function (g, idx) {
    var prefix = "g" + g.id + "_";
    var name = fd.get(prefix + "imie") || "";
    var kat = fd.get(prefix + "kategoria") || "dorosly";
    var wiek = fd.get(prefix + "wiek") || "";
    var dieta = fd.get(prefix + "dieta") || "—";
    var nocleg = fd.get(prefix + "nocleg") || "—";

    var katLabel = kat === "dorosly" ? "dorosły" : (kat === "dziecko" ? "dziecko" : "maluch");
    var parts = name + " – " + katLabel;
    if (wiek) parts += " (" + wiek + " lat)";
    if (kat !== "maluch") parts += ", dieta: " + dieta + ", nocleg: " + nocleg;
    guestsText.push((idx + 1) + ") " + parts);
  });

  var payload = {
    imie: document.getElementById("main-imie").value,
    kosciol: fd.get("kosciol"),
    wesele: fd.get("wesele"),
    dieta: document.getElementById("main-dieta").value,
    nocleg: fd.get("main-nocleg"),
    goście: guestsText.join("; "),
    uwagi: document.getElementById("main-uwagi").value
  };

  var submitBtn = rsvpForm.querySelector(".submit-btn");
  submitBtn.disabled = true;
  rsvpStatus.textContent = T[lang].statusSending;
  rsvpStatus.className = "rsvp-status";

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  })
    .then(function () {
      rsvpStatus.textContent = T[lang].statusOk;
      rsvpStatus.className = "rsvp-status ok";
      rsvpForm.reset();
      guestsData = [];
      guestCount = 0;
      renderAllGuests();
      submitBtn.disabled = false;
    })
    .catch(function () {
      rsvpStatus.textContent = T[lang].statusErr;
      rsvpStatus.className = "rsvp-status err";
      submitBtn.disabled = false;
    });
});
