# escape=`		
# The above parser directive changes escape character from '\' to '`'.  Note this line must come before any other lines except other parser directives.


# unit-test-image
#
# Use to build image for container that runs unit tests using Karma, Jasmine and the PhantomJS headless browser.
#
# Build command: 
#	docker build -t <name to assign to image> -f <path to this dockerfile> <Path that specifies context sent to Docker daemon>
#
#	Examples:
#		docker build -t unit-test-image .
#
#
# Run command: 
#	docker 
#		run `
#		-it `
#		--rm `
#		-v '<Full patht to directory on host>:<Full path to directory in container>' 
#		--name <desired name of container, i.e. unit-test-container> 
#		<name of image used to create container>
#
#	Examples:
#		docker run -it --rm -v 'D:\Code Projects\VS2017 Angular4 ASPNETCore2.1.3 Starter\VS2017 Angular4 ASPNETCore2.1.3 Starter:c:\Project' --name unit-test-container unit-test-image
#
#
# Notes:
# When this container is run it expects:
# 1. To be provided with a volume that has the "src" directory as a sub-directory.
# 2. Both phantomjs-prebuilt and karma-phantomjs-launcher should by installed locally in the project.
#      npm install phantomjs-prebuilt
#      npm install karma-phantomjs-launcher
#    Note that PhantomJS would not work until the \ClientApp\src\polyfill.ts file was modified.  Had to uncomment 14 lines that were originally commented out.
# 3. Build this container with the following command line: "docker build -t Unit-Test-Container -f .\Docker\Unit-Test-Container\Dockerfile ."
# 4. Run this container with the following command line: "docker run -it -rm Unit-Test-Container ".

# Only using "microsoft/windowsservercore" image for Node.js installation.
FROM microsoft/windowsservercore

# Need PowerShell to install Nodejs
SHELL ["powershell", "-command"]

# Specify which version of Node.js
ENV NODE_VERSION 10.9.0

# Download from nodejs.org.
RUN Invoke-WebRequest $('https://nodejs.org/dist/v{0}/node-v{0}-win-x64.zip' -f $env:NODE_VERSION) -OutFile 'node.zip' -UseBasicParsing ; `
     Expand-Archive node.zip -DestinationPath C:\ ; `
     Rename-Item -Path $('C:\node-v{0}-win-x64' -f $env:NODE_VERSION) -NewName 'C:\nodejs'

# Switch back to original shell.
SHELL ["cmd", "/S", "/C"]

# Install the Karma CLI (Command Line Interface) globally.  (Karma CLI does not work if installed locally in a particular project.)
RUN c:\nodejs\npm install -g karma-cli

# The PowerShell script that will be executed when the container is run.
ADD [ "Startup.cmd",  "c:/" ]							# Note that with ADD you have to use forward slashes.

# Create directory that will contain volume.
RUN mkdir Project

# Execute this process when the container is run.
CMD Startup.cmd karma.conf.PhantomJS.js
