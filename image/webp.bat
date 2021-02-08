@echo off

if "%1"=="" (for %%i in (*.jpg) do cwebp %%i -o %%~ni.webp) else (cwebp %1.jpg -o %1.webp)