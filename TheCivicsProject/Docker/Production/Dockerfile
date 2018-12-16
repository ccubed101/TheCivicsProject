# escape=`		
# The above parser directive changes escape character from '\' to '`'.  Note this line must come before any other lines except other parser directives.


# Production
#
# Use to build image for container that can execute an application based on ASP.NET Core.
# (ASP.NET Core execute on top of .NET Core.)
#
# Build command: 
#	docker build -t <desired image name> -f <path to this dockerfile> <Path that specifies context sent to Docker daemon>
#
#	Examples:
#       If running in D:\Code Projects\TheCivicsProject\TheCivicsProject\Docker\Production\ directory.
#			docker build -t tcp-production -f Dockerfile ..\..\Dist\ClientApp\dist\browser
#		If running in D:\Code Projects\TheCivicsProject\TheCivicsProject\bin\Release\netcoreapp2.1\publish\ directory.
#			docker build -t tcp-production -f ..\..\..\Docker\Production-Container\Dockerfile .	
# Run command: 
#	docker run -it --rm <name assigned to container> <name of desired image>
#
#	Example command lines:
#		docker run -d --rm --name tcp-production  tcp-production 
#		docker run -i --rm --name tcp-production  tcp-production 
#		docker run -it --rm --name tcp-production  tcp-production
#

# Base image.  
FROM microsoft/iis:nanoserver
#FROM microsoft/nanoserver

# Copy distribution files to default IIS directory.
COPY *.* inetpub/wwwroot/


EXPOSE 80

# Execute this process when the container is run.
#ENTRYPOINT C:\\ServiceMonitor.exe w3svc