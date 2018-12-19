# escape=`
# The above parser directive changes escape character from '\' to '`'.  Note this line must come before any other lines except other parser directives.

# Use to build image for container that builds the application.  
#
# The repository that contains the project is reference by a volume.
#
# Build command (execute in the directory that contains the Dockerfile)
#	docker build --force-rm -t <desired image name> -f <path to this dockerfile> .
#
#	Example:
#		docker build --force-rm -t tcp-build-image:1.0.0 .
#
# Run command: 
#	docker run -it --rm -v '<Full path to directory on host>:<Full path to directory in container>' --name <desired name of container> <Name of image>
#
#	Example:
#		docker run --rm -v 'D:\pipelines:c:\pipelines' --name tcp-build tcp-build-image:1.0.0
#		docker run --rm -v 'D:\Code Projects\TheCivicsProject:c:\Project' --name tcp-build tcp-build-image:1.0.0
# 		docker run --rm -v 'D:\Code Projects\TheCivicsProject:c:\Project' --name tcp-build tcp-build-image:1.0.0 'tcp-build.bat'			('tcp-build.bat' is not strictly necessary as last line in this Dockerfile specified same batch file.)
#		docker run --rm -v 'D:\Code Projects\TheCivicsProject:c:\Project' -it --name tcp-build tcp-build-image:1.0.0 cmd					(-it is not strictly necessary.  Behavior will be different but will not make a difference.)

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

# Switch to microsoft/dotnet:sdk image because we need dotnet.exe.
FROM microsoft/dotnet:sdk

# Bring along Nodejs to the new image.
RUN mkdir nodejs
COPY --from=dev-env nodejs nodejs

# Bring along Git to the new image.
RUN mkdir "C:/Program Files/Git"
COPY --from=dev-env ["C:\\\\Program Files\\\\Git", "C:\\\\Program Files\\\\Git"]

# Add NuGet configruation file.  (Not sure if this is necessary.  It is only added for 'dotnet restore'...which 
# is not working with, or without, the presence of the configuration file.  See tcp-build.cmd.)
RUN mkdir %AppData%\NuGet
COPY nuget.config c:\users\containeruser\appdata\roaming\nuget\nuget.config
# It would seem the the line below would be more practical than the line above.  But for some reason the line below does not work.
#COPY nuget.config %AppData%\NuGet\nuget.config

# Modify the 'Path' environment variable so that when 'dotnet build' is executed it will be able to find Nodejs.
# It would be nice to do something like 'ENV Path $Path;C:\nodejs'.  But this does not work.  $Path appears to be empty.
# Instead you have to determine what 'Path' is 
ENV Path C:\Windows\system32;C:\Windows;C:\Users\ContainerAdministrator\AppData\Local\Microsoft\WindowsApps;C:\Program Files\dotnet;C:\Users\ContainerUser\AppData\Local\Microsoft\WindowsApps;C:\Users\ContainerUser\.dotnet\tools;C:\nodejs;C:\Program Files\Git\bin

# The specified batch file must be copied into the image and set to execute when the image is run.
# Have to use a batch (.bat) file because the microsoft/dotnet:sdk does not have PowerShell.
COPY tcp-build.cmd .
CMD C:\tcp-build.cmd && cmd