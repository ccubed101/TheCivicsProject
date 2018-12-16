REM This is the batch file that is called when the tcp-build docker image needs to be run.
CMD /S /C docker run --rm -v "d:\Code Projects\TheCivicsProject:c:\project" --name tcp-build tcp-build