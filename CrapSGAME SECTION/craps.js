//CRAPS HTML IDS
const crapsiputsections = "InputID"
const Removesectionpane = "CrapsIDsection"
const ShowPanesection =  "MainsectionID"
const  setCrapsMoney = "CrapsMoneypane"
const setCrapsRounds = "Craproundsets"
const CrapswelcomeuserID = "Crapswelcome"
const CrapuserBetMoney = "CrapsuserBet"


//Graps Game settings

const setttingmoney = 1000
const setttingrounds = 0
const bet = {
    Even: "EVEN",
    Odd: "ODD"
}

const MinBet = 100


//IN-GAME VARIABLES
let CurrentMoneys = setttingmoney
let currentRounds = setttingrounds
let currentBets = bet.Even
let currenttBet = MinBet

//GRAPS GAME VARIABLES
let Crapsuserinput = ""

//CRAPS GAME SECTION
function Continue (){
Crapsuserinput = document.getElementById(crapsiputsections).value
  
let stgrex = /^[0-9]|[^a-zA-Z0-9._]/g


if ( Crapsuserinput.length < 5 || stgrex.test(Crapsuserinput) ){
    alert("Username must be at least 5 characters long, alphanumeric and underscores, no spaces. And must not start with a number")
   } else{

   RemoveCrapspanesection()
   ShowCrapssection()
   Crapwelcomeuser ()
}}




function RemoveCrapspanesection(){
    document.getElementById(Removesectionpane).style.display = "none"
}


function ShowCrapssection(){
    document.getElementById(ShowPanesection).style.display = "block"
}


function Crapwelcomeuser (){
    document.getElementById(CrapswelcomeuserID).innerHTML = Crapsuserinput
      CurrentMoneys = setttingmoney
      currentRounds = setttingrounds
      moneysettings(CurrentMoneys)
      roundsettings(currentRounds)
       beteven()
       setmoney(MinBet)

}



function moneysettings(money){
    document.getElementById(setCrapsMoney).innerHTML = money
}


function roundsettings(rounds){
    document.getElementById(setCrapsRounds).innerHTML = rounds
}


function beteven(){
    crapschoosebet(bet.Even)
}

function betodd(){
    crapschoosebet(bet.Odd)
}

function crapschoosebet(betts){
    currentBets = betts
    document.getElementById(currentBets).style.backgroundColor = "red"
    const deselct = betts == bet.Even ? bet.Odd : bet.Even
    document.getElementById(deselct).style.backgroundColor = "transparent"

}


function increasebett(){
    setmoney(Math.min(currenttBet + MinBet, CurrentMoneys))
}


function decreasebett(){
    setmoney(Math.max(currenttBet - MinBet, MinBet))
}


function setmoney(bett){
    currenttBet = bett
    document.getElementById(CrapuserBetMoney ).innerHTML = "$" + bett
}