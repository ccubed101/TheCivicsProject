REM This batch file should be copied into the tcp-build image when the tcp-build image is built.
REM This batch file should be executed immdiately after the tcp-build image is run.
dotnet build -v n -c Debug C:\project\TheCivicsProject.sln > C:\project\Docker\Build\output.txt