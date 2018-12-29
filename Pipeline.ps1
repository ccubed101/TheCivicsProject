param([String]$configuration="Debug")			# Has to be the first line.

Write-host ---------- $MyInvocation.MyCommand.Name "("$MyInvocation.MyCommand.Path")" ----------

Write-host
Write-host ('PS param([String]$' + 'configuration="Debug")')
Write-host ("   ($" + "configuration = $configuration)")

Write-host
Write-host ("PS $" + "CurrentWorkingDirectory = Convert-Path .")
$CurrentWorkingDirectory = Convert-Path .
Write-host ("   ($" + "CurrentWorkingDirectory = " + $CurrentWorkingDirectory + ")")

Write-host
# Need the path to the directory that contains this script file (which must be in the project root directory).
# The following works in PowerShell v3 only.
#$PathToProjectRoot = $PSScriptRoot
# The following works in PowerShell v2 and v3.
Write-host ("PS $" + "PathToProjectRoot = Split-Path -Parent -Path $" + "MyInvocation.MyCommand.Definition")
$PathToProjectRoot = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
Write-host ("   ($" + "PathToProjectRoot = $PathToProjectRoot)")

Write-host
Write-host "docker run --rm -v $currentworkingdirectory":c:\project-root" --name tcp-build tcp-build-image:1.0.0"
docker run --rm -v $currentworkingdirectory":c:\project-root" --name tcp-build tcp-build-image:1.0.0

Write-host ('PS $' + 'pathtoouputfile = "docker\output\build-output.txt"')
$PathToOuputFile = "docker\output\build-output.txt"

Write-host 'find /c "Build succeeded." $pathtoouputfile'
find /c "Build succeeded." $PathToOuputFile

if ($lastexitcode -ne 0) {
	Write-host "PS notepad $pathtoouputfile"
    notepad $PathTOuputFile
	Write-host "PS exit"
    exit
} 

Write-host "docker run --rm -v $currentworkingdirectory":c:\project" --name tcp-unit-tests tcp-unit-tests-image:1.0.0"
docker run --rm -v $currentworkingdirectory":c:\project" --name tcp-unit-tests tcp-unit-tests-image:1.0.0

Write-host ('PS $' + 'pathtoouputfile = "docker\output\unit-tests-output.txt"')
$PathToOuputFile = "docker\output\unit-tests-output.txt"

find /c "FAILED " $PathToOuputFile

if ($lastexitcode -eq 0) {
	Write-host "PS notepad $PathToOuputFile"
    notepad $PathToOuputFile
	Write-host "PS exit"
    exit
} 

Write-host ---------- $MyInvocation.MyCommand.Name "("$MyInvocation.MyCommand.Path")" ----------