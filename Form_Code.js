function unique_Roll(){
  var ss =SpreadsheetApp.openById("12BhgRsibB_M6xZCAl8YhSrJgOuTRqDF-G-j3col19-s")
  var sheet = ss.getSheetByName("Form Responses 1")
  var form = FormApp.openById("1lIEAafs2jwwQw_nOjwagBxljZTp50U6_3zZFgWZGpHM")


  //Roll
  var data = [...new Set(sheet.getDataRange().getDisplayValues().map(row=> row[1]))].join('|')
  var item = form.getItems().filter(item => item.getTitle() == 'Enrollment No.')[0].asTextItem()
  var pattern = `(${data})`
  var textval = FormApp.createTextValidation().setHelpText("Response Already Exists in Database!").requireTextDoesNotMatchPattern(pattern).build()
  item.setValidation(textval)

}