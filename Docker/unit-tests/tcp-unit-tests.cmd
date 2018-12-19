ECHO OFF

ECHO cd TheCivicsProject\ClientApp
cd TheCivicsProject\ClientApp
	
REM Install 'karma-chrome-launcher' and 'puppeteer' into the repository in this container.
ECHO install karma-chrome-launcher puppeteer
npm install karma-chrome-launcher puppeteer
	
REM Run unit test using Karma and the "headless" Chromium browser.  
REM Use the specified Karma configuration file.  It specifies the use of "headless" Chrome 
REM and only does a single run instead of staying active until shutdown manually.
ECHO npm test --karma-config karma.ChromeHeadless.conf.js > ..\..\Docker\output\unit-tests-output.txt
npm test -- --karma-config karma.ChromeHeadless.conf.js > ..\..\Docker\output\unit-tests-output.txt