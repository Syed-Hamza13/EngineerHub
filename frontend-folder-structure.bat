@echo off

cd frontend

:: Assets
mkdir src\assets\images 2>nul
mkdir src\assets\icons 2>nul

:: Components
mkdir src\components\common 2>nul
mkdir src\components\layout 2>nul
mkdir src\components\forms 2>nul

:: Pages
mkdir src\pages\Home 2>nul
mkdir src\pages\Login 2>nul
mkdir src\pages\Signup 2>nul
mkdir src\pages\Dashboard 2>nul

:: Other folders
mkdir src\routes 2>nul
mkdir src\services 2>nul
mkdir src\hooks 2>nul
mkdir src\context 2>nul
mkdir src\utils 2>nul
mkdir src\styles 2>nul

:: Files
type nul > src\routes\AppRoutes.jsx

type nul > src\pages\Home\Home.jsx
type nul > src\pages\Login\Login.jsx
type nul > src\pages\Signup\Signup.jsx
type nul > src\pages\Dashboard\Dashboard.jsx

echo Folder structure created successfully!
pause