function fillOutDates() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const optionsSheet = ss.getSheetByName("Options");

  if (!optionsSheet) {
    Logger.log("Sheet 'Options' not found.");
    return;
  }

  const dataRange = optionsSheet.getRange(2, 1, optionsSheet.getLastRow() - 1, 3);
  const values = dataRange.getDisplayValues();

  const uniqueDates = new Set();
  values.forEach(row => {
    const date = row[0].trim();
    const status = row[2];
    if (date !== "" && status === "AVAILABLE") {
      uniqueDates.add(date);
    }
  });

  if (uniqueDates.size === 0) {
    Logger.log("No valid dates found in the 'Options' sheet.");
    return;
  }

  const formId = "1lIEAafs2jwwQw_nOjwagBxljZTp50U6_3zZFgWZGpHM";
  const form = FormApp.openById(formId);
  const dateQuestionId = "361678968";
  const dateQuestion = form.getItemById(dateQuestionId);

  // Convert Set to Array before setting the choices
  const uniqueDatesArray = Array.from(uniqueDates);
  dateQuestion.asListItem().setChoiceValues(uniqueDatesArray);
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