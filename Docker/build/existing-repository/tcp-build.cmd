ECHO OFF
ECHO
ECHO ---------- tcp-build.cmd ----------
ECHO

REM This batch file should be copied into the tcp-build image when the tcp-build image is built.
REM This batch file should be executed immdiately after the tcp-build image is run.

REM Navigate to the docker volumne that is mapped to the directory on disk that contains all the pipelines.
ECHO cd project-root
cd project-root
ECHO
REM Setup for Git operations by telling Git who you are.  (This may, or may not be machine or developer dependent.)
ECHO git config --global user.name ccubed101
git config --global user.name ccubed101
ECHO git config --global user.email ccubed101@gmail.com
git config --global user.email ccubed101@gmail.com

REM if exist TheCivicsProject (

	REM REM Must navigate to a Git repository for Git to function correctly.
	REM cd the-civics-project
	
	REM Update local repository from remote GitHub repository.
	ECHO
	ECHO git pull https://github.com/ccubed101/TheCivicsProject master
	git pull https://github.com/ccubed101/TheCivicsProject master
	
REM ) else (

	REM REM This route is currently unusable.  See below.

	REM REM Project is not present so it has to be cloned from GitHub.com.
	REM git clone https://github.com/ccubed101/TheCivicsProject the-civics-project
	
	REM REM Must navigate to a Git repository for Git to function correctly.
	REM cd the-civics-project
	
	REM REM Get NuGet packages.
	REM REM THIS DOES NOT WORK!  It appears that it may be a bug in Docker when using a bind mount to the host machine.
	REM REM See https://github.com/dotnet/dotnet-docker/issues/592
	REM REM So for the time being the 'dotnet restore' command will have to be executed manually on the host machine.
	REM dotnet restore -v n
REM )

REM Build the application
ECHO 
ECHO del Docker\output\build-output.txt
del Docker\output\build-output.txt
ECHO
ECHO dotnet build -v n -c Debug TheCivicsProject.sln
dotnet build -v n -c Debug TheCivicsProject.sln > Docker\output\build-output.txt