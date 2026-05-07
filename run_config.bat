@echo off
REM CV Generator Configuration Tools Launcher
REM This batch file helps you launch the Python configuration tools

:menu
cls
echo.
echo ======================================================
echo   CV GENERATOR - PYTHON CONFIGURATION TOOLS
echo ======================================================
echo.
echo Choose an option:
echo.
echo   1) Interactive Configuration Tool (Menu-driven)
echo   2) Quick Command-Line Tool
echo   3) View Current Colors
echo   4) View Current Fonts
echo   5) View Current Layout
echo   6) Change a Color
echo   7) Change a Font
echo   8) Change Layout Property
echo   9) Export Configuration as Theme
echo   10) Import Configuration from Theme
echo   11) Reset to Defaults
echo   12) Open Documentation
echo   0) Exit
echo.
echo ======================================================
echo.

setlocal enabledelayedexpansion
set /p choice="Enter your choice (0-12): "

if "%choice%"=="0" goto end
if "%choice%"=="1" goto interactive
if "%choice%"=="2" goto cli
if "%choice%"=="3" goto colors
if "%choice%"=="4" goto fonts
if "%choice%"=="5" goto layout
if "%choice%"=="6" goto change_color
if "%choice%"=="7" goto change_font
if "%choice%"=="8" goto change_layout
if "%choice%"=="9" goto export
if "%choice%"=="10" goto import
if "%choice%"=="11" goto reset
if "%choice%"=="12" goto docs
goto menu

:interactive
echo.
python cv_config.py
pause
goto menu

:cli
echo.
echo Quick Config Tool Examples:
echo   python quick_config.py --show all
echo   python quick_config.py --color accent_yellow #FF6B6B
echo   python quick_config.py --font size_heading1 3em
echo.
goto menu

:colors
python quick_config.py --show colors
pause
goto menu

:fonts
python quick_config.py --show fonts
pause
goto menu

:layout
python quick_config.py --show layout
pause
goto menu

:change_color
echo.
python quick_config.py --show colors
set /p color_name="Enter color name: "
set /p color_value="Enter new hex value (e.g., #FF5733): "
python quick_config.py --color "%color_name%" "%color_value%"
pause
goto menu

:change_font
echo.
python quick_config.py --show fonts
set /p font_prop="Enter font property: "
set /p font_value="Enter new value: "
python quick_config.py --font "%font_prop%" "%font_value%"
pause
goto menu

:change_layout
echo.
python quick_config.py --show layout
set /p layout_key="Enter layout property: "
set /p layout_value="Enter new value: "
python quick_config.py --layout "%layout_key%" "%layout_value%"
pause
goto menu

:export
set /p filename="Enter filename to export (e.g., my_theme.json): "
python quick_config.py --export "%filename%"
pause
goto menu

:import
set /p filename="Enter filename to import: "
python quick_config.py --import "%filename%"
pause
goto menu

:reset
echo.
set /p confirm="Are you sure? This will reset all to defaults (y/n): "
if "%confirm%"=="y" (
    python quick_config.py --reset
) else (
    echo Cancelled.
)
pause
goto menu

:docs
echo Opening documentation...
start "" "PYTHON_CONFIG_README.md"
goto menu

:end
echo.
echo Thank you for using CV Generator Config Tools!
echo.
