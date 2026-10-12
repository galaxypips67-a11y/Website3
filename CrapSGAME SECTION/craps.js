//CRAPS HTML IDS
const crapsiputsections = "InputID"
const Removesectionpane = "CrapsIDsection"
const ShowPanesection =  "MainsectionID"
const  setCrapsMoney = "CrapsMoneypane"
const setCrapsRounds = "Craproundsets"
const CrapswelcomeuserID = "Crapswelcome"


//Graps Game settings

const setttingmoney = 1000
const setttingrounds = 0

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
      moneysettings(setttingmoney)
      roundsettings(setttingrounds)

}



function moneysettings(money){
    document.getElementById(setCrapsMoney).innerHTML = money
}


function roundsettings(rounds){
    document.getElementById(setCrapsRounds).innerHTML = rounds
}