# Reservation_System

>The files pertain to a reservation system where students have access to the google form and the admin has access to the google sheets file.

The maximum number of students that can register in a particular day is controlled by the config file.
The dates on which registration is possible can be found in the "Options" sheet. It is directly updated in the Google Form.
The data is registered in the "Form Responses 1" sheet.


Create a sheet and add "Sheets_Code_Optimized.js" code to the Google Scrips Section in the Google sheets tab.
Create 2 Triggers for the fillOutDates function. "On Edit" and "On change"

Open the linked form section and go to Scrips for Form section and add "Form_Code".


The form elements ID can be found out by using the "findOutIdofQuestions" function.
