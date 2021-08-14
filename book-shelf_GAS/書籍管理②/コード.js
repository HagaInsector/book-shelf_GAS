function doGet(e) {
  var t = HtmlService.createTemplateFromFile("list.html");
  return t.evaluate();
}

function GetSpreadsheet(){
  var file = SpreadsheetApp.openById('＊スプレッドシートID＊');
  var sheet = file.getSheetByName('*シート名*');    
  
  var last_col = sheet.getLastColumn();  
  var last_row = sheet.getLastRow();     

  var data_range = sheet.getRange(1, 1, last_row, last_col); 

  var data_values = data_range.getValues();
  
  return data_values;
}