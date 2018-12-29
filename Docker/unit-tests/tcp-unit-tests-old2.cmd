ECHO OFF

ECHO SUBST D: C:\pipelines
subst D: C:\pipelines

ECHO D:
D:

ECHO cd TheCivicsProject\ClientApp
cd TheCivicsProject\ClientApp
	
REM Run unit test using Karma and the "headless" Chromium browser.  
REM Use the specified Karma configuration file.  It specifies the use of "headless" Chrome 
REM and only does a single run instead of staying active until shutdown manually.
ECHO npm test --karma-config karma.ChromeHeadless.conf.js > ..\..\Docker\output\unit-tests-output.txt
npm test -- --karma-config karma.ChromeHeadless.conf.js > ..\..\Docker\output\unit-tests-output.txt