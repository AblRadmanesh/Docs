  <!-- <div style="
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-top: 15px;
    margin-bottom: 20px;">
    <img src="/bat.svg" alt="Windows Logo" style="width: 100px; height: 100px;">
  </div> -->



# تعویض کننده خودکار DNS

این ریپو به جهت توضیح درباره کد های مربوط به برنامه گذر از تحریم میباشد

اگر شما فردی باشید که برای سیستم عامل اندروید برنامه نویسی کرده باشید حتما به مشکل ارور های معروف عدم دسترسی یا 403 برخورده اید.



دقت داشته باشید که این نمونه، نمونه ای ساده برای تغییر dns به روشی آسان تر در سیستم عامل ویندوز میباشد امیدوارم که این ریپو شروعی برای هرچه بهتر کردن این روش باشد

<div style="text-align: center; display: flex; justify-content: center;">

|.exe|.bat|
|-------------------|---------------|
|[دانلود برنامه](https://github.com/AblRadmanesh/DNSchanger/files/12151638/LearnDotRoid.zip)|[دانلود فایل اجرایی](https://github.com/AblRadmanesh/DNSchanger/files/12151446/LearnDotRoid.zip)|

</div>

```Batch Script 

@echo off
setlocal enabledelayedexpansion

:main


set "INSTALLED_PATH=%~dp0.installed"
set myRandom=%random%

if not exist "%INSTALLED_PATH%" (
    start "LearnDotRoid" "https://LearnDotRoid.com"
    echo installed > "%INSTALLED_PATH%"
)

set "counter=1"

for /f "skip=3 tokens=4" %%a in ('netsh interface show interface') do (
  set "adapter_!counter!=%%a"
  echo !counter!. %%a
  set /a "counter+=1"
)

echo.
set /p option=Enter the adapter number you want to configure DNS for: 

if defined adapter_%option% (
  set "selected_adapter=!adapter_%option%!"
  echo You have selected: !selected_adapter!
) else (
  echo Invalid option selected.
  exit /b 1
)
echo -------------------------
echo Web : LearnDotRoid.com
echo -------------------------
echo selected adapter : !selected_adapter!
echo -------------------------
echo Select DNS:
echo 1) 403.online
echo 2) shecan.ir
echo -------------
echo 8) delete dns
echo (%myRandom%) delete Android Studio
echo 0) WebSite

set /p option=Enter option:

    if "%option%"=="1" (
  ipconfig /flushdns
  netsh interface ipv4 set dns "!selected_adapter!" static 10.202.10.202 primary
  netsh interface ipv4 add dns "!selected_adapter!" addr=10.202.10.102 index=2
  echo DNS set to 10.202.10.202
  echo DNS set to 10.202.10.102
  echo Web : LearnDotRoid.com
    )

    if "%option%"=="2" (
  ipconfig /flushdns
  netsh interface ipv4 set dns "!selected_adapter!" static 178.22.122.100 primary
  netsh interface ipv4 add dns "!selected_adapter!" addr=185.51.200.2 index=2
  echo DNS set to 178.22.122.100
  echo DNS set to 185.51.200.2
  echo Web : LearnDotRoid.com
    )

    if "%option%"=="8" (
  ipconfig /flushdns
  netsh interface ipv4 set dns "!selected_adapter!" source=dhcp
  echo DNS Deleted
  echo Web : LearnDotRoid.com
    )
    if "%option%"=="0" (
        start "LearnDotRoid" "https://LearnDotRoid.com"
    )
    if "%option%"=="%myRandom%" (
        rmdir /s /q "C:\Program Files\Android"
        rmdir /s /q "C:\Users\%USERNAME%\.android"
        rmdir /s /q "C:\Users\%USERNAME%\.gradle"
        rmdir /s /q "C:\Users\%USERNAME%\AppData\Local\Android"
        rmdir /s /q "C:\Users\%USERNAME%\AppData\Local\JetBrains"
        rmdir /s /q "C:\Users\%USERNAME%\.m2"
        setlocal enabledelayedexpansion
        for /d %%i in ("C:\Users\%USERNAME%\AppData\Local\Google\AndroidStudio*") do (
            set "folder_name=%%~nxi"
            if "!folder_name:~0,13!" == "AndroidStudio" (
                rmdir /s /q "%%i"
            )
        )
        for /d %%i in ("C:\Users\%USERNAME%\AppData\Roaming\Google\AndroidStudio*") do (
            set "folder_name=%%~nxi"
            if "!folder_name:~0,13!" == "AndroidStudio" (
                rmdir /s /q "%%i"
            )
        )
        echo Deletion completed.
    )

choice /c en /n /m "Do you want to start again? (E)xit / (N)ext:"

if %errorlevel% equ 1 (
    exit /b
)

echo ----------------------------------------------------------------
echo -------------------------- restart ------------------------------
echo ----------------------------------------------------------------
goto main

```

## فعال سازی روی سیستم ویندوزی

<div style="
  position: relative; 
  width: 100%; 
  padding-bottom: 56.25%; 
  height: 0; 
  margin: 20px 0; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border-radius: 10px; 
  overflow: hidden; 
  background-color: #f9f9f9;
">
  <iframe 
    src="https://www.youtube.com/embed/cIVo5sNkda8" 
    title="مقدمه" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 10px;">
  </iframe>
</div>
