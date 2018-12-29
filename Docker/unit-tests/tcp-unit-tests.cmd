ECHO OFF

ECHO mkdir pipeline\TheCivicsProject\ClientApp
mkdir pipeline\TheCivicsProject\ClientApp

ECHO cd pipeline\TheCivicsProject\ClientApp
cd pipeline\TheCivicsProject\ClientApp

ECHO xcopy /S /Q c:\project\TheCivicsProject\ClientApp .
xcopy /S /Q c:\project\TheCivicsProject\ClientApp .
	
REM Run unit test using Karma and the "headless" Chromium browser.  
REM Use the specified Karma configuration file.  It specifies the use of "headless" Chrome 
REM and only does a single run instead of staying active until shutdown manually.
ECHO "npm test --karma-config karma.ChromeHeadless.conf.js > ..\..\..\project\Docker\output\unit-tests-output.txt"
npm test -- --karma-config karma.ChromeHeadless.conf.js > ..\..\..\project\Docker\output\unit-tests-output.txt