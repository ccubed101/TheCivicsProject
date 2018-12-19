REM This batch file should be copied into the build-test-deliver-image as part of the process of building the image.
REM This batch file should be executed immediately upon running the build-test-deliver-image (i.e. upon creation of the container based on the image).

REM Clone the Git repository.
ECHO git clone https://github.com/ccubed101/TheCivicsProject
git clone https://github.com/ccubed101/TheCivicsProject
ECHO cd TheCivicsProject
cd TheCivicsProject

REM Get project dependencies from internet and build the 'Debug' version of the project.
ECHO dotnet build -v n -c Debug > Docker\output.txt
dotnet build -v n -c Debug > Docker\output.txt

ECHO findstr /C:"Build succeeded." "Docker\output.txt"
findstr /C:"Build succeeded." "Docker\output.txt"

if %errorlevel% equ 0 (
	
	REM Install 'karma-chrome-launcher' and 'puppeteer' into the repository in this container.
	ECHO install karma-chrome-launcher puppeteer
	npm install karma-chrome-launcher puppeteer
	
	REM Run unit test using Karma and the "headless" Chromium browser.  
	REM Use the specified Karma configuration file.  It specifies the use of "headless" Chrome 
	REM and only does a single run instead of staying active until shutdown manually.
	ECHO cd TheCivicsProject\ClientApp
	cd TheCivicsProject\ClientApp
	ECHO dir
	dir
	ECHO npm test --karma-config karma.ChromeHeadless.conf.js > ..\..\Docker\output2.txt
	npm test -- --karma-config karma.ChromeHeadless.conf.js > ..\..\Docker\output2.txt
	
) else (

	echo failed
	
)
