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
#		docker build --force-rm -t tcp-unit-tests-image:1.0.0 .
#
#
# Run command: 
#	docker run --rm -v '<Full path to directory on host>:<Full path to directory in container>' --name <desired name of container> <Name of image>
#
#	Examples:
#		docker run --rm -v 'D:\Code Projects\TheCivicsProject:c:\project' --name tcp-unit-tests tcp-unit-tests-image:1.0.0
#
#
# Notes:
# When this container is run it expects:
# 1. To be provided with a volume that has the "src" directory as a sub-directory.

# Only using "microsoft/windowsservercore" image for Node.js installation.
FROM microsoft/windowsservercore 

#SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]
SHELL ["powershell", "-Command"]

# Specify which version of Node.js
ENV NODE_VERSION 10.9.0

# Download from nodejs.org.
RUN Invoke-WebRequest $('https://nodejs.org/dist/v{0}/node-v{0}-win-x64.zip' -f $env:NODE_VERSION) -OutFile 'node.zip' -UseBasicParsing ; `
     Expand-Archive node.zip -DestinationPath C:\ ; `
     Rename-Item -Path $('C:\node-v{0}-win-x64' -f $env:NODE_VERSION) -NewName 'C:\nodejs'

# Switch back to original shell.
SHELL ["cmd", "/S", "/C"]

# Modify the 'Path' environment variable so that Node and NPM can be executed without knowing the path to their location.
# It would be nice to do something like 'ENV Path $Path;C:\nodejs'.  But this does not work.  $Path appears to be empty.
# Instead you have to determine what 'Path' is 
ENV Path C:\Windows\system32;C:\Windows;C:\Users\ContainerAdministrator\AppData\Local\Microsoft\WindowsApps;C:\Program Files\dotnet;C:\Users\ContainerUser\AppData\Local\Microsoft\WindowsApps;C:\Users\ContainerUser\.dotnet\tools;C:\nodejs

# Install the Karma CLI (Command Line Interface) globally.  (Karma CLI does not work if installed locally in a particular project.)
RUN npm install -g karma-cli

#RUN mkdir pipelines\TheCivicsProject\ClientApp
#RUN cd pipelines\TheCivicsProject\ClientApp
#RUN npm i karma-chrome-launcher puppeteer

# The batch file that contains the commands that will be executed when the container is run.  It basically copies the
# entire project into the container and then executes Karma to run the unit tests.  A volume cannot be used because 
# it confuses Karma.
ADD [ "tcp-unit-tests.cmd",  "c:/" ]							# Note that with ADD you have to use forward slashes.

# Execute this process when the container is run.  The parameter is the name of the Karma configuration file to use.
CMD tcp-unit-tests.cmd karma.ChromeHeadless.conf.js

