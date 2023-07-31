function fillOutDates() {
const ss = SpreadsheetApp.getActiveSpreadsheet();
  const optionsSheet = ss.getSheetByName("Options");

  if (!optionsSheet) {
    Logger.log("Sheet 'Options' not found.");
    return;
  }

  const dataRange = optionsSheet.getRange(2, 1, optionsSheet.getLastRow() - 1, 3);
  const values = dataRange.getDisplayValues();
  
  // Filter out rows with an empty date (column 1) and "AVAILABLE" status (column 3)
  const datesList = values
    .filter(row => row[0].trim() !== "" && row[2] === "AVAILABLE")
    .map(row => row[0]);

  if (datesList.length === 0) {
    Logger.log("No valid dates found in the 'Options' sheet.");
    return;
  }

  const uniqueDates = [...new Set(datesList)];

  Logger.log(uniqueDates);

  const form = FormApp.openById("1lIEAafs2jwwQw_nOjwagBxljZTp50U6_3zZFgWZGpHM");

  const dateQuestion = form.getItemById("361678968");
  dateQuestion.asListItem().setChoiceValues(uniqueDates);

}

function findOutIdofQuestions() {
  const form = FormApp.openById("1lIEAafs2jwwQw_nOjwagBxljZTp50U6_3zZFgWZGpHM");
  const questions = form.getItems();

  questions.forEach(question => {
    const id = question.getId();
    const name = question.getTitle();
    Logger.log("name: " + name + " id: " + id);
  });
}


/*

name: Enrollment No. id: 236745987
name: Name id: 1908767333
name: Institute id: 1761420258
name: Mobile Number id: 1486257470
name: Email id: 347421595
name: Major 2 id: 210166097
name: Date Opted id: 361678968


*/