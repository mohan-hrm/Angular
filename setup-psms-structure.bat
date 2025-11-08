@echo off
setlocal enabledelayedexpansion

:: ==============================================================
:: CONFIGURATION
:: ==============================================================

:: Name of the Angular project folder
set PROJECT_NAME=preclinical-study-management

:: Top-level feature areas you want in your app
set FEATURE_LIST=study animal protocol report admin

:: Remember where we started (root directory)
set ROOT_DIR=%cd%

echo.
echo ==============================================================
echo   Creating Angular Project: %PROJECT_NAME%
echo   Environment:
echo      Node        : v24.11.0
echo      NPM         : 11.6.1
echo      Angular CLI : 20.3.9
echo ==============================================================

:: ==============================================================
:: 1. Create new Angular standalone project (no SSR)
:: ==============================================================

call ng new %PROJECT_NAME% --standalone --routing --style=scss --ssr=false --skip-git

if errorlevel 1 (
    echo ❌ Failed to create Angular project. Check Angular CLI installation.
    exit /b 1
)

:: Move into the new project folder
cd %PROJECT_NAME%

echo.
echo ==============================================================
echo   2. Creating Enterprise Folder Structure
echo ==============================================================

:: ----------------- CORE & SHARED LAYERS -----------------

:: Core: singletons and app-level services
mkdir src\app\core
mkdir src\app\core\services
mkdir src\app\core\interceptors
mkdir src\app\core\models
mkdir src\app\core\guards
mkdir src\app\core\constants

:: Shared: reusable UI pieces, directives, pipes, validators
mkdir src\app\shared
mkdir src\app\shared\components
mkdir src\app\shared\directives
mkdir src\app\shared\pipes
mkdir src\app\shared\validators

:: ----------------- STATE, THEME, CONFIG -----------------

mkdir src\app\store
mkdir src\app\theme
mkdir src\app\config
mkdir src\app\testing

:: ----------------- FEATURE FOLDERS -----------------

mkdir src\app\features
for %%f in (%FEATURE_LIST%) do (
    mkdir src\app\features\%%f
    mkdir src\app\features\%%f\components
    mkdir src\app\features\%%f\services
    mkdir src\app\features\%%f\models
)

:: ----------------- STATIC ASSETS (Vite-style) -----------------

:: With Angular CLI 20 (Vite builder), static files live in "public"
mkdir public
mkdir public\mock
mkdir public\images
mkdir public\styles

echo.
echo ==============================================================
echo   3. Creating Default Mock Data (public/mock/studies.json)
echo ==============================================================

(
echo [
echo   { "id": 101, "studyCode": "TOX-2025-001", "title": "14-Day Repeat Dose Toxicity Study in Rats", "phase": "Preclinical", "startDate": "2025-01-10", "status": "Ongoing" },
echo   { "id": 102, "studyCode": "GEN-2025-002", "title": "Genotoxicity Micronucleus Assay in Mice", "phase": "Preclinical", "startDate": "2025-02-20", "status": "Completed" },
echo   { "id": 103, "studyCode": "DART-2025-003", "title": "Developmental and Reproductive Toxicity Study", "phase": "Preclinical", "startDate": "2025-03-15", "status": "Planned" }
echo ]
) > public\mock\studies.json

echo.
echo ==============================================================
echo   4. Generating Initial Feature Component: Study List
echo ==============================================================

call ng g c features/study/components/study-list --standalone --skip-tests --style=scss

echo.
echo ==============================================================
echo   ✅ Setup Complete
echo --------------------------------------------------------------
echo   Next Steps:
echo      cd %PROJECT_NAME%
echo      ng serve --open
echo --------------------------------------------------------------
echo   Then update 'study-list.ts' to load data from 'mock/studies.json'.
echo ==============================================================
echo   Mock data URL at runtime: http://localhost:4200/mock/studies.json
echo ==============================================================

pause
