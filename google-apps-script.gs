/**
 * KOD DO WKLEJENIA W GOOGLE APPS SCRIPT (script.google.com)
 * Instrukcja krok po kroku jest w pliku README.md.
 *
 * Ten skrypt odbiera zgłoszenia RSVP ze strony i zapisuje je
 * jako nowy wiersz w arkuszu Google, do którego jest podłączony.
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
      "Uwagi"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.imie,
    data.kosciol,
    data.wesele,
    data.dieta,
    data.uwagi
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
