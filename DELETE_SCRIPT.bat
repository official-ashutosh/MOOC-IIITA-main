@echo off
REM Batch script to delete unused files for MOOC-IIITA-main-1 project cleanup

del /f /q "client\src\pages\students\temp.jsx"
del /f /q "client\src\Components\Toast.jsx"
del /f /q "client\src\Components\customStyles\datatheme.jsx"
del /f /q "client\src\Components\customStyles\app.scss"
del /f /q "client\src\assets\react.svg"
del /f /q "client\src\services\paymentService.js"
del /f /q "client\src\pages\instructors\ThankYouPage.jsx"
del /f /q "client\src\pages\users\Thank.jsx"
del /f /q "client\package-lock.json"
del /f /q "package-lock.json"

echo Unused files deleted successfully.
pause
