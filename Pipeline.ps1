param([String]$configuration="Debug")

$CurrentWorkingDirectory = Convert-Path .

# Need the path to the directory that contains this script file (which must be in the project root directory).
# The following works in PowerShell v3 only.
#$PathToProjectRoot = $PSScriptRoot
# The following works in PowerShell v2 and v3.
$PathToProjectRoot = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition

docker run --rm -v $currentworkingdirectory":c:\project-root" --name tcp-build tcp-build-image:1.0.0

$pathtoouputfile = "docker\output\build-output.txt"

find /c "build succeeded." $pathtoouputfile

if ($lastexitcode -ne 0) {
    notepad $pathtoouputfile
    exit
} 

docker run --rm -v $currentworkingdirectory":c:\project" --name tcp-unit-tests tcp-unit-tests-image:1.0.0

$pathtoouputfile = "docker\output\unit-tests-output.txt"

find /c "SUCCESS" $pathtoouputfile

if ($lastexitcode -ne 0) {
    notepad $pathtoouputfile
    exit
} 