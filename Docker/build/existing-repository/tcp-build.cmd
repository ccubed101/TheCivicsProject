REM This batch file should be copied into the tcp-build image when the tcp-build image is built.
REM This batch file should be executed immdiately after the tcp-build image is run.

REM Navigate to the docker volumne that is the mapped to the directory on disk that contains all the pipelines.
cd pipelines

REM Setup for Git operations by telling Git who you are.  (This may, or may not be machine or developer dependent.)
git config --global user.name ccubed101
git config --global user.email ccubed101@gmail.com

if exist the-civics-project (

	REM Must navigate to a Git repository for Git to function correctly.
	cd the-civics-project
	
	REM Update local repository from remote GitHub repository.
	git pull https://github.com/ccubed101/TheCivicsProject master
	
) else (

	REM This route is currently unusable.  See below.

	REM Project is not present so it has to be cloned from GitHub.com.
	git clone https://github.com/ccubed101/TheCivicsProject the-civics-project
	
	REM Must navigate to a Git repository for Git to function correctly.
	cd the-civics-project
	
	REM Get NuGet packages.
	REM THIS DOES NOT WORK!  It appears that it may be a bug in Docker when using a bind mount to the host machine.
	REM See https://github.com/dotnet/dotnet-docker/issues/592
	REM So for the time being the 'dotnet restore' command will have to be executed manually on the host machine.
	dotnet restore -v n
)

REM Build the application
del Docker\output\build-output.txt
dotnet build -v n -c Debug TheCivicsProject.sln > Docker\output\build-output.txt