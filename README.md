# Reservation_System

>This repository contains files related to a reservation system designed for students and administrators. The system operates through a Google Form accessible to students and a Google Sheets file accessible to the admin.

The configuration of the system allows control over the maximum number of students who can register on a given day. This information is managed through the config file. The specific dates available for registration can be found in the "Options" sheet, which is directly updated in the Google Form. All registration data is recorded in the "Form Responses 1" sheet.

To set up the system, follow these steps:

Create a new sheet in the Google Sheets tab and add the code from "Sheets_Code_Optimized.js" to the Google Scripts section.
Set up two triggers for the "fillOutDates" function: "On Edit" and "On Change".
Open the linked form section and go to the Scripts for Form section, then add the "Form_Code".
To identify the form element IDs, use the "findOutIdofQuestions" function.

By following these instructions, you'll have a functional reservation system that facilitates seamless communication between students and administrators. Enjoy the ease and efficiency of managing reservations using this system!
