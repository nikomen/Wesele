# Strona ślubna — Nikodem &amp; Anna

Prosta, jednostronicowa strona ślubna z formularzem RSVP i hasłem dostępu.
Poniżej masz wszystko krok po kroku — nie trzeba umieć programować.

## Co jest w tym folderze

- `index.html` — treść strony
- `style.css` — wygląd
- `script.js` — hasło + wysyłanie formularza (tu wklejasz swoje ustawienia)
- `google-apps-script.gs` — kod do wklejenia w Google, żeby zbierać odpowiedzi
- `images/` — zdjęcia (na razie sala i kościół — swoje wspólne zdjęcie dodacie tu później)

## Krok 1 — Arkusz Google na odpowiedzi gości

1. Wejdź na [sheets.google.com](https://sheets.google.com) i załóż nowy, pusty arkusz.
   Nazwij go np. „Wesele — RSVP".
2. W arkuszu kliknij **Rozszerzenia → Apps Script**.
3. Usuń całą zawartość edytora i wklej w to miejsce treść pliku `google-apps-script.gs`
   (jest w tym folderze).
4. Kliknij dyskietkę (Zapisz), a potem **Wdróż → Nowe wdrożenie**.
5. Kliknij ikonę koła zębatego obok „Wybierz typ" i wybierz **Aplikacja internetowa**.
6. Ustaw:
   - **Wykonaj jako:** Ja (Twoje konto)
   - **Kto ma dostęp:** Każda osoba
7. Kliknij **Wdróż**, zatwierdź uprawnienia (Google zapyta o zgodę — to normalne,
   bo skrypt zapisuje dane do Twojego arkusza).
8. Skopiuj **URL aplikacji internetowej** — będzie wyglądał mniej więcej tak:
   `https://script.google.com/macros/s/AKfycb.../exec`

## Krok 2 — Podłącz formularz do arkusza

1. Otwórz plik `script.js`.
2. Znajdź linijkę:
   ```
   const GOOGLE_SCRIPT_URL = "WKLEJ_TU_URL_Z_GOOGLE_APPS_SCRIPT";
   ```
3. Wklej w cudzysłów URL skopiowany w poprzednim kroku. Zapisz plik.

Od teraz każde zgłoszenie z formularza RSVP będzie lądować jako nowy wiersz
w Twoim arkuszu Google — na żywo, bez niczego więcej z Twojej strony.

**Jeśli arkusz był już wcześniej podłączony** (np. testowałeś/aś wcześniejszą
wersję formularza): nagłówki kolumn dopisują się automatycznie tylko przy
pierwszym zgłoszeniu do pustego arkusza. Jeśli masz już jakieś wiersze,
dopisz ręcznie w arkuszu nagłówek „Osoby towarzyszące" w kolejnej wolnej
kolumnie, żeby nowe dane trafiały we właściwe miejsce.

## Krok 3 — Ustaw własne hasło do strony

1. Otwórz plik `script.js`.
2. Znajdź linijkę:
   ```
   const SITE_PASSWORD = "NikodemAnna2027";
   ```
3. Zmień tekst w cudzysłowie na hasło, które chcecie dać gościom (np. na
   zaproszeniach). Zapisz plik.

**Ważne:** to hasło to tylko prosta „kurtyna" przed przypadkowymi osobami,
które trafią na link — nie jest to prawdziwe zabezpieczenie (każdy, kto
zajrzy w kod źródłowy strony, może je odczytać). Do zebrania RSVP od
zaproszonych gości w zupełności wystarczy.

Żeby nie było to uciążliwe dla gości:
- Raz podane poprawne hasło jest zapamiętywane na stałe w danej przeglądarce
  (nie tylko do zamknięcia karty) — gość wpisuje je tylko raz.
- Kod QR (patrz Krok 6 niżej) ma hasło „zaszyte" w linku, więc zeskanowanie
  go od razu wpuszcza gościa na stronę — w ogóle nie musi nic wpisywać.

## Krok 6 — Kod QR na zaproszenia (opcjonalnie)

1. Najpierw wykonaj Krok 5 (publikacja na GitHub Pages), żeby mieć gotowy adres strony.
2. Otwórz plik `generator-qr.html` zwykłym dwuklikiem w przeglądarce (to narzędzie
   działa lokalnie, nie trzeba go wgrywać na GitHub).
3. Wklej adres swojej opublikowanej strony i hasło z Kroku 3, kliknij **Generuj kod QR**.
4. Pobierz obrazek i wydrukuj go na zaproszeniach albo dodaj do wiadomości do gości.

Zeskanowanie tego kodu od razu otworzy i odblokuje stronę — gość nie musi nic wpisywać.
Jeśli ktoś i tak wejdzie na sam adres strony (bez kodu QR), zobaczy ekran z hasłem.

## Krok 4 — Dodaj swoje zdjęcie i sprawdź teksty

- Wgraj swoje wspólne zdjęcie do folderu `images/` (np. jako `para.jpg`)
  i w pliku `index.html` podmień `images/sala.jpg` w sekcji `<header class="hero">`
  na `images/para.jpg`.
- Przejrzyj tekst powitalny i tekst o prezencie w `index.html` — zmień, jeśli
  chcecie inaczej to ująć.
- Domyślnie formularz prosi o potwierdzenie do **1 kwietnia 2027** — zmień
  datę w `index.html` (sekcja RSVP), jeśli chcecie inną.

## Krok 5 — Wystawienie na GitHub Pages (za darmo)

1. Załóż konto na [github.com](https://github.com), jeśli jeszcze nie masz.
2. Kliknij **New repository**, nadaj nazwę (np. `wesele-nikodem-anna`),
   ustaw jako **Public**, kliknij **Create repository**.
3. Na stronie repozytorium kliknij **Add file → Upload files** i przeciągnij
   tam wszystkie pliki i folder `images` z tego katalogu.
4. Kliknij **Commit changes**.
5. Wejdź w **Settings → Pages** (w menu po lewej).
6. W sekcji „Build and deployment" przy „Source" wybierz **Deploy from a branch**,
   branch: `main`, folder: `/ (root)`. Kliknij **Save**.
7. Po minucie lub dwóch strona będzie dostępna pod adresem w stylu:
   `https://twoja-nazwa.github.io/wesele-nikodem-anna/`

Ten link (razem z hasłem z Kroku 3) wysyłacie gościom.

## Podgląd lokalny przed publikacją

Możesz po prostu otworzyć plik `index.html` dwuklikiem w przeglądarce, żeby
zobaczyć, jak wygląda strona, zanim ją opublikujecie.
