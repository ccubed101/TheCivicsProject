REM This batch file should be copied into the build-test-deliver-image as part of the process of building the image.
REM This batch file should be executed immediately upon running the build-test-deliver-image (i.e. upon creation of the container based on the image).

REM Clone the Git repository.
git clone https://github.com/ccubed101/TheCivicsProject
cd TheCivicsProject

REM Get project dependencies from internet and build the 'Debug' version of the project.
dotnet build -v n -c Debug > Docker\output.txt

findstr /C:"Build succeeded." "Docker\output.txt"

if %errorlevel% equ 0 (
	
	REM Install 'karma-chrome-launcher' and 'puppeteer' into the repository in this container.
	npm install karma-chrome-launcher puppeteer
	
	REM Run unit test using Karma and the "headless" Chromium browser.  
	REM Use the specified Karma configuration file.  It specifies the use of "headless" Chrome 
	REM and only does a single run instead of staying active until shutdown manually.
	dir
	cd TheCivicsProject
	dir
	cd ClientApp
	dir
	npm test --karma-config karma.ChromeHeadless.conf.js > Docker\output.txt
	
) else (

	echo failed
	
)