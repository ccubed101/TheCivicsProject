REM This batch file should be copied into the tcp-build image when the tcp-build image is built.
REM This batch file should be executed immdiately after the tcp-build image is run.

REM Setup for Git operations by telling Git who you are.  (This may, or may not be machine or developer dependent.)
git config --global user.name ccubed101
git config --global user.email ccubed101@gmail.com

REM Must navigate to a Git repository for Git to function correctly.
cd project

REM Update local repository from remote GitHub repository.
git pull https://github.com/ccubed101/TheCivicsProject master

REM Build the application
dotnet build -v n -c Debug C:\project\TheCivicsProject.sln > C:\project\Docker\output\output.txt