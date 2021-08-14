function doGet(e){
  var page=e.parameter["p"];
  if(page == "index" || page==null){
  return HtmlService.createTemplateFromFile("index").evaluate();
  }
  else if(page =="search"){
  return HtmlService.createTemplateFromFile("search").evaluate();
  }
  }

  function doPost(e) {
  var isbn13 = e.parameter['isbn13'];
  var title = e.parameter['title'];
  var publisher = e.parameter['publisher'];
  var author = e.parameter['author'];
  var pubdate = e.parameter['pubdate'];
  var data = [[isbn13, title, publisher, author, pubdate]];
  var app = SpreadsheetApp.openById('＊スプレッドシートID＊');
  var sheet = app.getSheetByName('*シート名*');
  var row = sheet.getDataRange().getLastRow();
  var r = sheet.getRange(row + 1, 1, 1, 5);
  r.setValues(data);
  var range = sheet.getDataRange();
  var temp = HtmlService.createTemplateFromFile('index');
  temp.values = range.getValues();
  return temp.evaluate();
}


function GetSpreadsheet(){
  var file = SpreadsheetApp.openById('＊スプレッドシートID＊');
  var sheet = file.getSheetByName('＊シート名＊');     
  var last_col = sheet.getLastColumn();  
  var last_row = sheet.getLastRow();       
  var data_range = sheet.getRange(1, 1, last_row, last_col);  
  var data_values = data_range.getValues();
  return data_values;
}

function myFunction(){
 *ライブラリで登録したID*.GetSpreadsheet()
}

 