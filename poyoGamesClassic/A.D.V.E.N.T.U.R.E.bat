@echo off
title A.D.V.E.N.T.U.R.E.
if not exist "cecho.exe" goto nocecho
:loading The EXE file enables the command, but the EXE must be in the same directory as the batch file.
mode con cols=165 lines=14
echo.
echo.
echo  LLLL                  OOOOOOOOOOOOOOOOO    AAAAAAAAAAAAAAAAA   DDDDDDDDDDDDDDDD      IIIIIIIIIIIIIIIIIIII  NNNNNNNN          NNNN      GGGGGGGGGGGGG
echo  LLLL                 OOOOOOOOOOOOOOOOOOO  AAAAAAAAAAAAAAAAAAA  DDDDDDDDDDDDDDDDDDD   IIIIIIIIIIIIIIIIIIII  NNNNNNNNN         NNNN   GGGGGGGGGGGGGGGG
echo  LLLL                 OOOO           OOOO  AAAA           AAAA  DDDD            DDDD          IIII          NNNN NNNNN        NNNN  GGGGGG
echo  LLLL                 OOOO           OOOO  AAAA           AAAA  DDDD            DDDD          IIII          NNNN  NNNNN       NNNN  GGGG
echo  LLLL                 OOOO           OOOO  AAAA           AAAA  DDDD            DDDD          IIII          NNNN   NNNNN      NNNN  GGGG
echo  LLLL                 OOOO           OOOO  AAAAAAAAAAAAAAAAAAA  DDDD            DDDD          IIII          NNNN    NNNNN     NNNN  GGGG
echo  LLLL                 OOOO           OOOO  AAAAAAAAAAAAAAAAAAA  DDDD            DDDD          IIII          NNNN     NNNNN    NNNN  GGGG         GGGG
echo  LLLL                 OOOO           OOOO  AAAA           AAAA  DDDD            DDDD          IIII          NNNN      NNNNN   NNNN  GGGG         GGGG
echo  LLLL                 OOOO           OOOO  AAAA           AAAA  DDDD            DDDD          IIII          NNNN       NNNNN  NNNN  GGGG         GGGG
echo  LLLL                 OOOO           OOOO  AAAA           AAAA  DDDD            DDDD          IIII          NNNN        NNNNN NNNN  GGGG         GGGG
echo  LLLLLLLLLLLLLLLLLLL  OOOOOOOOOOOOOOOOOOO  AAAA           AAAA  DDDDDDDDDDDDDDDDDDD   IIIIIIIIIIIIIIIIIIII  NNNN         NNNNNNNNN   GGGGGGGGGGGGGGGG  XXX  XXX  XXX
echo  LLLLLLLLLLLLLLLLLLL   OOOOOOOOOOOOOOOOO   AAAA           AAAA  DDDDDDDDDDDDDDDD      IIIIIIIIIIIIIIIIIIII  NNNN          NNNNNNNN      GGGGGGGGGGGGG  XXX  XXX  XXX
pause > nul
mode con cols=132 lines=50
:createdirectories
if exist C:\A.D.V.E.N.T.U.R.E\Savefiles\ goto startgame
md C:\A.D.V.E.N.T.U.R.E.\Savefiles\ > nul

:startgame
cls
cecho {lime}-=-=-=-=-=-=-=-=-{yellow}A.D.V.E.N.T.U.R.E.{lime}-=-=-=-=-=-=-=-=-{white}{\n}
cecho {\n}
cecho DNA collected and traced to: {aqua}%username%{white}{\n}
cecho Select the number for your corresponding option, please!
cecho {\n}
cecho {red}1.{white} Create game {\n}
cecho {red}2.{white} Load Game {\n}
cecho {red}3.{white} Delete Game {\n}
cecho {red}4.{white} Options {\n}
cecho {red}5.{white} Quit {\n}
cecho {\n}
set /p choice="Choose an option: "
if "%choice%"=="1" goto newgame
if "%choice%"=="2" goto loadgame
if "%choice%"=="3" goto deletegame
if "%choice%"=="4" goto options 
if "%choice%"=="5" exit

cecho {\n}
cecho Oh, hey... "{aqua}%choice%{white}" doesn't seem to be a valid choice!{\n}
cecho Please try again.
pause > nul
goto startgame

:deletegame
cls
cecho Ah, so you want to delete a game?{\n}
cecho Well, we can be arranged.{\n}
cecho Here are all of the games:{aqua}{\n}
cecho {\n}
dir "C:/A.D.V.E.N.T.U.R.E./Savefiles/" /B /O-D
cecho {\n}
cecho {white}If you {red}don't{white} want to delete any saved games, type "{red}X{white}!"
cecho {\n}
set /p deletegame="What game do you want to delete?: "
if /i "%deletegame%"=="X" goto startgame
if /i "%deletegame%"=="" goto deletegame2
if exist C:\A.D.V.E.N.T.U.R.E\Savefiles\%deletegame% goto deletegameprompt
cls
cecho Uh, the saved game "{aqua}%deletegame%{white}" doesn't exist.{\n}
cecho Huh.
pause > nul
goto deletegame

:deletegame2
cls
cecho HAH, YOU FORGOT TO ENTER ANYTHING!
pause > nul
goto deletegame:

:deletegameprompt
cls
cecho Are you {red}really sure{white} that you want to delete the saved game "{aqua}%deletegame%{white}?"{\n}
cecho {\n}
cecho Type...{\n}
cecho {lime}Yes, I am really really sure!{\n}
cecho {white}or...{\n}
cecho {lime}No, I really don't want to!{white}{\n}
cecho {\n}
set /p deleteprompt="What will it be?: "
if "%deleteprompt%"=="Yes, I am really really sure!" goto yesdelete
if "%deleteprompt%"=="No, I really don't want to!" goto startgame
cls
cecho Hey, hey, hey! That's not a valid choice! Try typing in one of the sentences. :D{\n}
cecho Like, exactly how it's shown. Okay?
pause > nul
goto deletegameprompt

:yesdelete
cls
cecho Well then...{\n}
cecho If that's what you really want.
pause > nul
rmdir /s /q C:\A.D.V.E.N.T.U.R.E.\Savefiles\%deletegame% > nul
cecho {\n}
cecho It is done.
pause > nul
goto startgame

:newgame
cls
cecho Alrighty then! {\n}
goto newgamename2
:newgamename
cls
:newgamename2
cecho What is your name? {\n}
cecho If you want to return to the main menu, type "{red}X{white}."
cecho {\n}
set /p name="What's yo' name?: "
cls
if exist C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name% goto alreadyexists
if /i "%name%"=="X" goto startgame
cls
cecho Are you sure your name is "{aqua}%name%{white}?"{\n}
cecho {\n}
set /p choice="Yes, or no?: "
if /i "%choice%"=="yes" goto yesname
if /i "%choice%"=="no" goto newgamename
cecho Wait, didn't I just say to type "yes" or "no?"{\n}
cecho I'd think it's pretty simple.
pause > nul
goto newgamename

:yesname
cls
cecho Hello, {aqua}%name%{white}!{\n}
md C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%
md C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables
md C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Inventory
md C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Stats
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\name.adv echo %name%
goto yesname3
:yesname2
cls
:yesname3
cecho So, now what's your gender?{\n}
cecho {\n}
cecho {red}1.{white} Male{\n}
cecho {red}2.{white} Female{\n}
cecho {red}3.{white} Potato{\n}
cecho {red}4.{white} I can't tell D:{\n}
cecho {\n}
set /p gender="Enter the number that corresponds to your choice!: "
if "%gender%"=="1" goto genderset
if "%gender%"=="2" goto genderset
if "%gender%"=="3" goto genderpotato
if "%gender%"=="4" goto gendercanttell

cls
cecho HEY, hey, hey! Hold up, "{aqua}%gender%{white}" isn't a valid choice!{\n}
cecho Try again. Use the numbers given!
pause > nul
goto yesname2

:genderpotato
cls
cecho Wait, wait, wait. What?{\n}
cecho You're...
pause > nul
cecho {\n}
cecho ...A {aqua}potato{white}?
pause > nul
cls
cecho Well then. I don't really know what pronouns are associated with...{\n}
cecho ...{aqua}Potatoes{white}...{\n}
cecho So I think you'll have to choose something else.
pause > nul
goto yesname2

:gendercanttell
cls
cecho ...{\n}
cecho ...{\n}
cecho ...
pause > nul
cecho {\n}
cecho ...In that case, just choose the gender you think you are.{\n}
cecho :I
pause > nul
goto yesname2

:alreadyexists
cls
cecho Hey, hey, hey! Hold up!{\n}
cecho There already is a game named "{aqua}%name%{white}!"{\n}
cecho You need to choose another name, or delete the existing one.
pause > nul 
goto newgamename

:genderset
cls
if "%gender%"=="1" set he=he
if "%gender%"=="1" set his=his
if "%gender%"=="1" set him=him
if "%gender%"=="1" set mister=Mister
if "%gender%"=="1" set mr=Mr.
if "%gender%"=="1" set man=man
if "%gender%"=="1" set boy=boy
if "%gender%"=="1" set gentleman=gentleman
if "%gender%"=="1" >C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\gender.adv echo male
if "%gender%"=="2" set he=she
if "%gender%"=="2" set his=hers
if "%gender%"=="2" set him=her
if "%gender%"=="2" set mister=Miss
if "%gender%"=="2" set mr=Ms.
if "%gender%"=="2" set man=woman
if "%gender%"=="2" set boy=girl
if "%gender%"=="2" set gentleman=lady
if "%gender%"=="2" >C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\gender.adv echo female
cecho In that case, welcome, %mr% {aqua}%name%{white}!
pause > nul
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\gameProg.adv echo 0
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\health.adv echo 20
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\energy.adv echo 20
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\money.adv echo 0

>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Inventory\Pootburds.adv echo 0

>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Stats\hasBeenInOwnHouse.adv echo 0
cecho {\n}
cecho It looks like we are ready to begin!{\n}
cecho You can now load up your game, {aqua}%name%{white}, from the "Load Game" option!
pause > nul
goto startgame

:options
cls
cecho Uuuh...{\n}
cecho {\n}
cecho ... There aren't really any options. {\n}
cecho Sorry. {\n}
cecho There may be some in the future, though!
pause > nul
goto startgame

:loadgame
cls
cecho You'd like to load a game, eh?{\n}
cecho Fair enough.{\n}
cecho Here are all of the games:{aqua}{\n}
cecho {\n}
dir "C:/A.D.V.E.N.T.U.R.E./Savefiles/" /B /O-D
cecho {\n}
cecho {white}If you don't want to load a game, type "{red}X{white}."{\n}
cecho {\n}
set /p loadgame="What game would you like to load?: "
if /i "%loadgame%"=="X" goto startgame
if exist C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame% goto loadgame2
cls
cecho Uh, well, this is awkward.
pause > nul
cecho {\n}
cecho There isn't a game named "{aqua}%loadgame%{white}."
pause > nul
goto loadgame

:loadgame2
cls
@set /p name=< C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame%\Variables\name.adv
@set /p gender=< C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame%\Variables\gender.adv
@set /p health=< C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame%\Variables\health.adv
@set /p gameprog=< C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame%\Variables\gameProg.adv
@set /p energy=< C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame%\Variables\energy.adv
@set /p money=< C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame%\Variables\money.adv

@set /p howMany-Pootburds=< C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame%\Inventory\Pootburds.adv

@set /p hasBeenInOwnHouse=< C:\A.D.V.E.N.T.U.R.E.\Savefiles\%loadgame%\Stats\hasBeenInOwnHouse.adv

if "%gender%"=="male" set he=he
if "%gender%"=="male" set his=his
if "%gender%"=="male" set him=him
if "%gender%"=="male" set mister=Mister
if "%gender%"=="male" set mr=Mr.
if "%gender%"=="male" set man=man
if "%gender%"=="male" set boy=boy
if "%gender%"=="male" set gentleman=gentleman
if "%gender%"=="male" set son=son
if "%gender%"=="female" set he=she
if "%gender%"=="female" set his=hers
if "%gender%"=="female" set him=her
if "%gender%"=="female" set mister=Miss
if "%gender%"=="female" set mr=Ms.
if "%gender%"=="female" set man=woman
if "%gender%"=="female" set boy=girl
if "%gender%"=="female" set gentleman=lady
if "%gender%"=="male" set daughter=daughter

if "%gameprog%"=="0" goto startadventure

:startadventure
cls
cecho {lime}Ohohohohoho!{white}{\n}
cecho So it's time to begin your adventure, eh?{\n}
cecho {\n}
cecho Now, you will go on a great adventure! {\n}
cecho You, {aqua}%name%{white}, could be the hero of {aqua}Hnurgtopia{white}!
pause > nul
goto playerHouse

:playerHouse
set currentlbl=playerHouse
set hassaved=0
if "hasBeenInOwnHouse"=="1" goto statdisplay
set hasBeenInOwnHouse=0
goto statdisplay
:playerHouse-
cls
cecho Health: {\n}
%healthdisplay%
cecho {\n}
cecho Energy: {\n}
%energydisplay%
cecho {\n}
if "%hasBeenInOwnHouse%"=="0" cecho You are standing at the doorway to your house, with a backpack on your back.{\n}
if "%hasBeenInOwnHouse%"=="0" cecho ...Something tells you this backpack is magical.{\n}
if "%hasBeenInOwnHouse%"=="1" cecho You are standing in the doorway of your house. {\n}
set hasBeenInOwnHouse=1
cecho {\n}
cecho {red}1.{white} Go inside your house {\n}
cecho {red}2.{white} Exit house {\n}
cecho {\n}
cecho {red}I.{white} Inventory {\n}
cecho {red}M.{white} Me {\n}
cecho {red}S.{white} Save {\n}
cecho {red}Q.{white} Quit {\n}
cecho {\n}
set /p gamechoice="Choose an option: "
cls
if /i "%gamechoice%"=="I" goto inventory
if /i "%gamechoice%"=="M" goto playerstats
if /i "%gamechoice%"=="S" goto savegame
if /i "%gamechoice%"=="Q" goto saveprompt

if /i "%gamechoice%"=="1" goto insidePlayerHouse
if /i "%gamechoice%"=="2" goto nyi
cls
cecho Hey! That's not a valid choice. Try again!
pause > nul
goto %currentlbl%

:insidePlayerHouse
set currentlbl=insidePlayerHouse
set hassaved=0
goto statdisplay
:insidePlayerHouse-
cls
cecho Health: {\n}
%healthdisplay%
cecho {\n}
cecho Energy: {\n}
%energydisplay%
cecho {\n}
cecho You are standing in your living room.
cecho {\n}
cecho {red}1.{white} Sit on the couch{\n}
cecho {red}2.{white} Go upstairs{\n}
cecho {red}3.{white} Go back to the doorway{\n}
cecho {\n}
cecho {red}I.{white} Inventory {\n}
cecho {red}M.{white} Me {\n}
cecho {red}S.{white} Save {\n}
cecho {red}Q.{white} Quit {\n}
cecho {\n}
set /p gamechoice="Choose an option: "
cls
if /i "%gamechoice%"=="I" goto inventory
if /i "%gamechoice%"=="M" goto playerstats
if /i "%gamechoice%"=="S" goto savegame
if /i "%gamechoice%"=="Q" goto saveprompt

if /i "%gamechoice%"=="1" goto nyi
if /i "%gamechoice%"=="2" goto nyi
if /i "%gamechoice%"=="3" goto playerHouse
cls
cecho Hey! That's not a valid choice. Try again!
pause > nul
goto %currentlbl%

:inventory
cls
cecho {lime}-=-=-=-=-=INVENTORY=-=-=-=-=-{white}{\n}
cecho {\n}
if not "%howMany-Pootburds%"=="0" cecho {yellow}Pootburds {white}x {fuchisa}%howMany-Pootburds%{white}
pause > nul
goto %currentlbl%
:playerstats
cls	
cecho Health:{\n}
%healthdisplay%
cecho {\n}
cecho Energy:{\n}
%energydisplay%
cecho {\n}
cecho My name:{\n}
cecho {aqua}%name%{white}{\n}
cecho {\n}
cecho Monîys:{\n}
cecho %money%î
pause > nul
goto %currentlbl%
:savegame
cecho {aqua}Saving...{\n}
echo Saving game progress...
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\gameProg.adv echo %currentlbl%
echo Saving name...
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\name.adv echo %name%
echo Saving gender...
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\gender.adv echo %gender%
echo Saving health...
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\health.adv echo %health%
echo Saving energy...
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\energy.adv echo %energy%
echo Saving Monîy...
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Variables\money.adv echo %money%
echo Saving inventory...
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Inventory\Pootburds.adv echo %howMany-Pootburds%
echo Saving stats...
>C:\A.D.V.E.N.T.U.R.E.\Savefiles\%name%\Stats\hasBeenInOwnHouse.adv echo %hasBeenInOwnHouse%
cls
cecho {lime}Done!{white}
pause > nul
goto %currentlbl%-
:statDisplay
set /p health=< C:\A.D.V.E.N.T.U.R.E\Savefiles\%name%\Variables\health.adv
if "%health%"=="0" goto dead
if "%health%"=="1" set healthdisplay=cecho [{red}={gray}==================={white}] {red}1{white}/20{\n}
if "%health%"=="2" set healthdisplay=cecho [{red}=={gray}=================={white}] {red}2{white}/20{\n}
if "%health%"=="3" set healthdisplay=cecho [{red}==={gray}================={white}] {red}3{white}/20{\n}
if "%health%"=="4" set healthdisplay=cecho [{red}===={gray}================{white}] {red}4{white}/20{\n}
if "%health%"=="5" set healthdisplay=cecho [{red}====={gray}==============={white}] {red}5{white}/20{\n}
if "%health%"=="6" set healthdisplay=cecho [{fuchisa}======{gray}=============={white}] {fuchisa}6{white}/20{\n}
if "%health%"=="7" set healthdisplay=cecho [{fuchisa}======={gray}============={white}] {fuchisa}7{white}/20{\n}
if "%health%"=="8" set healthdisplay=cecho [{fuchisa}========{gray}============{white}] {fuchisa}8{white}/20{\n} REM Jesse
if "%health%"=="9" set healthdisplay=cecho [{fuchisa}========={gray}==========={white}] {fuchisa}9{white}/20{\n}
if "%health%"=="10" set healthdisplay=cecho [{fuchisa}=========={gray}=========={white}] {fuchisa}10{white}/20{\n}
if "%health%"=="11" set healthdisplay=cecho [{aqua}==========={gray}========={white}] {aqua}11{white}/20{\n}
if "%health%"=="12" set healthdisplay=cecho [{aqua}============{gray}========{white}] {aqua}12{white}/20{\n}
if "%health%"=="13" set healthdisplay=cecho [{aqua}============={gray}======={white}] {aqua}13{white}/20{\n}
if "%health%"=="14" set healthdisplay=cecho [{aqua}=============={gray}======{white}] {aqua}14{white}/20{\n}
if "%health%"=="15" set healthdisplay=cecho [{aqua}==============={gray}====={white}] {aqua}15{white}/20{\n}
if "%health%"=="16" set healthdisplay=cecho [{lime}================{gray}===={white}] {lime}16{white}/20{\n}
if "%health%"=="17" set healthdisplay=cecho [{lime}================={gray}==={white}] {lime}17{white}/20{\n}
if "%health%"=="18" set healthdisplay=cecho [{lime}=================={gray}=={white}] {lime}18{white}/20{\n}
if "%health%"=="19" set healthdisplay=cecho [{lime}==================={gray}={white}] {lime}19{white}/20{\n}
if "%health%"=="20" set healthdisplay=cecho [{lime}===================={white}] {lime}20{white}/20{\n}
set /p energy=< C:\A.D.V.E.N.T.U.R.E\Savefiles\%name%\Variables\energy.adv
if "%energy%"=="1" set energydisplay=cecho [{red}={gray}==================={white}] {red}1{white}/20{\n}
if "%energy%"=="2" set energydisplay=cecho [{red}=={gray}=================={white}] {red}2{white}/20{\n}
if "%energy%"=="3" set energydisplay=cecho [{red}==={gray}================={white}] {red}3{white}/20{\n}
if "%energy%"=="4" set energydisplay=cecho [{red}===={gray}================{white}] {red}4{white}/20{\n}
if "%energy%"=="5" set energydisplay=cecho [{red}====={gray}==============={white}] {red}5{white}/20{\n}
if "%energy%"=="6" set energydisplay=cecho [{fuchisa}======{gray}=============={white}] {fuchisa}6{white}/20{\n}
if "%energy%"=="7" set energydisplay=cecho [{fuchisa}======={gray}============={white}] {fuchisa}7{white}/20{\n}
if "%energy%"=="8" set energydisplay=cecho [{fuchisa}========{gray}============{white}] {fuchisa}8{white}/20{\n}
if "%energy%"=="9" set energydisplay=cecho [{fuchisa}========={gray}==========={white}] {fuchisa}9{white}/20{\n}
if "%energy%"=="10" set energydisplay=cecho [{fuchisa}=========={gray}=========={white}] {fuchisa}10{white}/20{\n}
if "%energy%"=="11" set energydisplay=cecho [{aqua}==========={gray}========={white}] {aqua}11{white}/20{\n}
if "%energy%"=="12" set energydisplay=cecho [{aqua}============{gray}========{white}] {aqua}12{white}/20{\n}
if "%energy%"=="13" set energydisplay=cecho [{aqua}============={gray}======={white}] {aqua}13{white}/20{\n}
if "%energy%"=="14" set energydisplay=cecho [{aqua}=============={gray}======{white}] {aqua}14{white}/20{\n}
if "%energy%"=="15" set energydisplay=cecho [{aqua}==============={gray}====={white}] {aqua}15{white}/20{\n}
if "%energy%"=="16" set energydisplay=cecho [{lime}================{gray}===={white}] {lime}16{white}/20{\n}
if "%energy%"=="17" set energydisplay=cecho [{lime}================={gray}==={white}] {lime}17{white}/20{\n}
if "%energy%"=="18" set energydisplay=cecho [{lime}=================={gray}=={white}] {lime}18{white}/20{\n}
if "%energy%"=="19" set energydisplay=cecho [{lime}==================={gray}={white}] {lime}19{white}/20{\n}
if "%energy%"=="20" set energydisplay=cecho [{lime}===================={white}] {lime}20{white}/20{\n}
goto %currentlbl%-

:saveprompt
if "%hassaved%"=="1" goto startgame
cls
cecho Are you sure you want to leave now? {\n}
cecho I'm sensing you haven't {lime}saved{white} recently! {\n}
cecho {\n}
cecho {red}1.{white} Take me back! {\n}
cecho {red}2.{white} Quit. {\n}
cecho {\n}
set /p choice="Choose the number for your option: "
if "%choice%"=="1" goto %currentlbl%
if "%choice%"=="2" goto startgame
cls
cecho Hue. Hue hue hue! Hue hue hue hue hue hue.{\n}
cecho Hue hue hue hue, hue hue hue hue hue.
pause > nul
goto saveprompt

:dead
cls
cecho {red}-=-=-=GAME OVER=-=-=-{white}{\n}
cecho {\n}
cecho You died! :(
pause > nul
goto startgame

:nyi
cls
cecho {red}-=-=-=Not yet implemented!=-=-=-{white}{\n}
cecho {\n}
cecho This game is still in development. It's not finished, so there are lots of bugs and unfinished things!{\n}
pause > nul
goto startgame

:nocecho
echo As it seems, you don't have the file "cecho.exe" in the same folder as this batch game.
echo It is needed to play this game. You should probably go get it.
echo.
echo Press any key to make your computer self destruct.
pause > nul
cls
echo Just kidding.
echo.
echo Press any key to exit.
pause > nul
exit