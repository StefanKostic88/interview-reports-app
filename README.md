iNTERVIEW-REPORTS-APP

BIT - Final Project

Simple App using CRUD principles

Main Goal is to track interview reports of the candidates such as: Company, Interview date, and status of the interview.

Also, you can add new candidates, create new reports for allreadey existing candidates, edit and update existing reports, and finaly delete reports.

App utilise reactr reouter as a MPA

Component state is managed via useState, useReducer and useEffect hooks, which are stored in custom hooks for each component.

Home Page > Render initaial Candidates, you can select specific candidate by his unique id, which opens info for this particular candidate in a new window. Also, if you want additional info about candidate, there is a Modal window, which can be viewed by simply clciking a eye icon. There is also possibility to sort reports of the candidate: by company, date and status.
You can search candidate by name, after 300ms timer fires off and you can filter candidates by name. If no info is available, erro message is shown.

Panel > renders all reports, You can filter reports by, company name or candidate name. You can delete individual report by clicking the X icon, and you cen view Candidate reports by clicking eye icon, which opens modal window.

Here you can click Create new User which creates new user and first report for that user, you can also edit reports of the user, and even add a new report for allready existing user.

After subbmit, message is shown to inform you that the submit was succesfull, and that message desapeares after 3 seconds.

If you choose a rout that doesnt exist, Error window is shown, which redirects you to home page.
