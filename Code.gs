function doPost(e) {
  const d = e.parameter;
  const sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
  sheet.appendRow([
    new Date(),
    d.nama,
    d.kontak,
    d.jenis,
    d.pilihan,
    d.start,
    d.end,
    d.jumlah,
    d.catatan
  ]);
  return ContentService.createTextOutput(JSON.stringify({result:'OK'}))
    .setMimeType(ContentService.MimeType.JSON);
}
