/**
 * KOD DO WKLEJENIA W GOOGLE APPS SCRIPT (script.google.com)
 * Instrukcja krok po kroku jest w pliku README.md.
 *
 * WAŻNE: jeśli masz starszą wersję tego skryptu, ZASTĄP ją tą nową
 * w całości i kliknij "Wdróż" → "Zarządzaj wdrożeniami" → edytuj
 * istniejące wdrożenie → "Nowa wersja" → Wdróż.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  // Jeśli to pierwszy wpis, dodaj nagłówki kolumn
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Data zgłoszenia",
      "Imię i nazwisko",
      "Ceremonia w kościele",
      "Przyjęcie weselne",
      "Dieta",
      "Nocleg",
      "Dodatkowi goście",
      "Uwagi"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.imie || "",
    data.kosciol || "",
    data.wesele || "",
    data.dieta || "",
    data.nocleg || "",
    data["goście"] || data.goscie || "",
    data.uwagi || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
