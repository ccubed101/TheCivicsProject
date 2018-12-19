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
#		docker run --rm -v 'D:\pipelines\the-civics-project\TheCivicsProject\ClientApp:c:\project' --name tcp-unit-tests tcp-unit-tests-image:1.0.0
#
#
# Notes:
# When this container is run it expects:
# 1. To be provided with a volume that has the "src" directory as a sub-directory.

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
ADD [ "tcp-unit-tests.cmd",  "c:/" ]							# Note that with ADD you have to use forward slashes.

# Create directory that will contain volume.
RUN mkdir project

# Execute this process when the container is run.  The parameter is the name of the Karma configuration file to use.
CMD tcp-unit-tests.cmd karma.ChromeHeadless.conf.js
