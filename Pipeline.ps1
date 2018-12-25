param([String]$configuration="Debug")

$CurrentWorkingDirectory = Convert-Path .

docker run --rm -v $CurrentWorkingDirectory":c:\project" --name tcp-build tcp-build-image:1.0.0

$PathToOuputFile = "Docker\output\build-output.txt"

Find /C "Build succeeded." $PathToOuputFile

if ($LASTEXITCODE -ne 0) {
    Notepad $PathToOuputFile
    exit
} 

docker run --rm -v $CurrentWorkingDirectory":c:\project" --name tcp-unit-tests tcp-unit-tests-image:1.0.0

$PathToOuputFile = "Docker\output\unit-tests-output.txt"

Find /C "Failed" $PathToOuputFile

if ($LASTEXITCODE -eq 0) {
    Notepad $PathToOuputFile
    exit
} 