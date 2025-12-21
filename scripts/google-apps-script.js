/**
 * Google Apps Script - Puente para Censo de Movilidad
 * Instrucciones: Pegar en Extensiones > Apps Script de tu Google Sheet
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  data.forEach(function(row) {
    sheet.appendRow([
      new Date(), // Timestamp
      row.interseccion, 
      row.operador, 
      row.ciclo, 
      row.categoria, 
      row.movimiento, 
      row.cantidad
    ]);
  });
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
