param([String]$configuration="Debug")

&".\Docker\Build\run-container.ps1"

if ($LASTEXITCODE -ne 0) {
    Notepad "Docker\Build\output.txt"
    "after"
    exit
} 

"Continue"
