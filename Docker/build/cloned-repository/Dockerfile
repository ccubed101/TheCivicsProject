# escape=`
# The above parser directive changes escape character from '\' to '`'.  Note this line must come before any other lines except other parser directives.

# Use to build image for container that builds the application.
#
# Build command (execute in the directory that contains the Dockerfile)
#	docker build --force-rm -t <desired image name> -f <path to this dockerfile> .
#
#	Example:
#		docker build --force-rm -t tcp-build .
#
# Run command: 
#	docker run -it --rm -v '<Full path to directory on host>:<Full path to directory in container>' --name <desired name of container> <Name of image>
#
#	Example:
#		docker run --rm -v 'D:\Code Projects\TheCivicsProject:c:\Project' --name tcp-build tcp-build
# 		docker run --rm -v 'D:\Code Projects\TheCivicsProject:c:\Project' --name tcp-build tcp-build 'tcp-build.bat'			('tcp-build.bat' is not strictly necessary as last line in this Dockerfile specified same batch file.)
#		docker run --rm -v 'D:\Code Projects\TheCivicsProject:c:\Project' -it --name tcp-build tcp-build						(-it is not strictly necessary.  Behavior will be different but will not make a difference.)

# Need microsoft/windowsservercore base imagte because it has PowerShell and System.Net.WebClient.
FROM microsoft/windowsservercore AS dev-env

# Install Chocolatey so that we can do an unattended installation of Git.
# See https://chocolatey.org/install for more information.
RUN PowerShell Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Do unattended installation of Git using Chocolatey.
RUN choco install -y git.install

# Install NodeJS
ENV NODE_VERSION 10.9.0
RUN PowerShell Invoke-WebRequest $('https://nodejs.org/dist/v{0}/node-v{0}-win-x64.zip' -f $env:NODE_VERSION) -OutFile 'node.zip' -UseBasicParsing ; `
     Expand-Archive node.zip -DestinationPath C:\ ; `
     Rename-Item -Path $('C:\node-v{0}-win-x64' -f $env:NODE_VERSION) -NewName 'C:\nodejs'
	 
# The following rename operation removes the difficulty of having to deal with whitespace in directory paths.
RUN ren "Program Files" "Program_Files"

# Switch to microsoft/dotnet:sdk image because we need dotnet.exe.
FROM microsoft/dotnet:sdk


# Bring along Nodejs to the new image.
RUN mkdir nodejs
COPY --from=dev-env nodejs nodejs

# Bring along Git to the new image.
RUN mkdir "C:\Git"
COPY --from=dev-env C:\Program_Files\Git C:\Git

# Modify the 'Path' environment variable so that when 'dotnet build' is executed it will be able to find Nodejs.
# It would be nice to do something like 'ENV Path $Path;C:\nodejs'.  But this does not work.  $Path appears to be empty.
# Instead you have to determine what 'Path' is 
ENV Path C:\Windows\system32;C:\Windows;C:\Users\ContainerAdministrator\AppData\Local\Microsoft\WindowsApps;C:\Program Files\dotnet;C:\Users\ContainerUser\AppData\Local\Microsoft\WindowsApps;C:\Users\ContainerUser\.dotnet\tools;C:\nodejs;C:\Git\bin

# The specified batch file must be copied into the image and set to execute when the image is run.
# Have to use a batch (.bat) file because the microsoft/dotnet:sdk does not have PowerShell.
COPY tcp-build.bat .
CMD C:\tcp-build.bat && cmd