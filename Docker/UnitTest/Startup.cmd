REM ECHO OFF

ECHO "**** Executing Starup.cmd ****"

REM Augment the PATH.
ECHO 'SET PATH=%PATH%;C:\nodejs;C:\Users\ContainerAdministrator\AppData\Roaming\npm'
SET PATH=%PATH%;C:\nodejs;C:\Users\ContainerAdministrator\AppData\Roaming\npm

REM 
ECHO "SUBST D: C:\Project"
subst D: C:\Project

REM Make the Project directory the current directory.
ECHO "D:"
D:
ECHO "cd ClientApp"
cd ClientApp

REM Run karma with headless PhantomJS browser.
ECHO "karma start %1 --single-run"
karma start %1 --single-run

ECHO "**** Done ****"