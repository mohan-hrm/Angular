@echo off
echo ===============================================================
echo 🪶  Adding placeholder <h2> headings to new page HTML files
echo ===============================================================

setlocal enabledelayedexpansion

:: Root folder of Angular app
set ROOT_DIR=src\app\features

:: Loop through all HTML files under features/
for /r "%ROOT_DIR%" %%F in (*.html) do (
    set "FILE=%%F"

    :: Skip existing pages that already have content
    findstr /C:"<h2>" "%%F" >nul 2>&1
    if errorlevel 1 (
        echo Writing placeholder to %%F
        for %%A in ("%%~dpF.") do (
            set "DIRNAME=%%~nxA"
        )
        (
            echo ^<h2^>!DIRNAME! Page^</h2^>
        ) > "%%F"
    ) else (
        echo Skipping existing file: %%~nxF (already has content)
    )
)

echo ===============================================================
echo ✅ Placeholder content added to all new empty page HTML files!
echo ===============================================================
pause
