const gaver = [
  {
    gift: "sjokolade",
    familyMember: "mamma",
    date: "23.12.2023"
  }, 
  {
    gift: "verktøy",
    familyMember: "pappa",
    date: "22.12.2023"
  },
  {
    gift: "kjole",
    familyMember: "søster",
    date: "27.12.2023"
  },
  {
    gift: "leker", 
    familyMember: "bror",
    date: "21.12.2023"
  },
  {
    gift: "peppekaker",
    familyMember: "alle",
    date: "25.12.2023"
  }

];

//henter fra html 
const listE1 = document.getElementById("liste");
const listInputE1 = document.getElementById("list");
const addToListButtonE1 = document.getElementById("addToList");
const clearListButtonE1 = document.getElementById("clearList");
const sortListButtonE1 = document.getElementById("compareGifts"); 
const sortDateButtonE1 = document.getElementById("compareDate");

const lagretData = localStorage.getItem("minNokkel");

const dateE1 = document.getElementById("shopDate");
const familyEl = document.getElementById("familieMedlem");


//local storage 
if (lagretData) {
  //listE1.innerHTML = lagretData;
  showList()
}

//sammenligner gavene 
function compareGifts(gaveA, gaveB) {
  if (gaveA.gift > gaveB.gift) {
    return 1;
  } else if (gaveA.gift < gaveB.gift) {
    return -1;
  } else {
    return 0;
  }
}

//sorterer gavene 
function sortGiftsByGift(){
  gaver.sort(compareGifts);
  showList();
} 

//sammenligner dato 
function compareDate(dateA, dateB) {
  if (dateA.date > dateB.date) {
    return 1;
  } else if (dateA.date < dateB.date) {
    return -1;
  } else {
    return 0;
  }
}

//sorterer gavene 
function sortGiftsByDate(){
  gaver.sort(compareDate);
  showList();
} 


//Når du trykker på knappen vil den sortere gavene, og når du trykker på den andre legger du til 
sortListButtonE1.addEventListener("click", sortGiftsByGift);
sortDateButtonE1.addEventListener("click", sortGiftsByDate)
addToListButtonE1.addEventListener("click", addToList);


//det som blir lagt til i listen 
function addToList() {
  //kalender 
  let dateObject = new Date(dateE1.valueAsNumber);
  let year = dateObject.getFullYear();
  let month = dateObject.getMonth() + 1;
  let day = dateObject.getDate();
  console.log(year);
  //hvordan det blir skrevet ut 
  let gave = { gift: listInputE1.value, familyMember: familyEl.value, date: day + "." + month + "." + year }
  gaver.push(gave)

  showList();
  listInputE1.value = "";
}

// lager en liste ved "li", som legger til gaven, familiemedlem og datoen. 
showList();
function showList(){
  listE1.innerHTML = "";
  gaver.forEach(gave => {
    listE1.innerHTML += "<li>" + gave.gift + " - til: " + gave.familyMember+ " - " + gave.date +"</li>";
  });
  

  oppdaterLocalStorage();
  console.log(gaver);
}


//tar bort innhold i listen 
function clearList() {
  listE1.innerHTML = "";
  localStorage.removeItem("minNokkel");
}


//local storage 
function oppdaterLocalStorage() {
  localStorage.setItem("minNokkel", listE1.innerHTML);
}

//knappen for å ta bort alt i listen 
clearListButtonE1.addEventListener("click", clearList);

/*
lag en funksjon som går igjennom lista gaver og lager <li> elementer med informasjonen til hvert objekt i gaver.
kall funksjonen showGifts elns - husk å fjerne alt inni html containeren først.

når du skal legge til sortering:
sorter gaver som vist i kapittel 3F (det er under arrays tror jeg, eller objekter)
kjør showGifts igjen.


*/
