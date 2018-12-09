//
var game = document.getElementById("game-container")

var title= document.getElementById("title")
var description= document.getElementById("description")

var button = document.getElementById("game-buttons")
var button1 = document.getElementById("button1")
var button2= document.getElementById("button2")
var button3= document.getElementById("button3")
var storyimg= document.createElement("img" ,"storyimg")
var divimg= document.createElement("div", "divimg")
var inventory= document.getElementById("inventoryItem")
var crowbaritem
//

menu()

inventory.style.display= "none";

function menu() {

document.body.style.backgroundImage = "url(Afbeeldingen/StartPagina.jpg)"
title.innerHTML= "Haunted school";
description.innerHTML= "Je speelt als een jongen knul genaam token.<br> Om dit spel te spelen moet je verschilende keuzes maken.<br> Om de keuzes te maken moet je op de knoppen drukken.";
divimg.appendChild(storyimg);
button1.innerHTML= "Start het spel";
button2.style.display = "none";
button3.style.display = "none";
game.appendChild(storyimg);

button1.addEventListener("click",chapter1);
}
//
function chapter1() {
document.body.style.backgroundImage = "url(Afbeeldingen/Lvl1.jpg)"
title.innerHTML= "Chapter 1 <br> de school";
description.innerHTML= "Je loopt in een spookbos en je ziet een verlaten school. <br> Wat doe je?";
console.log("chapter1");
button2.style.display = "";
button1.innerHTML= "ga de school binnen";
button2.innerHTML= "draai om en loop weg"

button1.removeEventListener("click",chapter1);
button1.addEventListener("click",chapter2);
button2.addEventListener("click",loopWeg);}


function chapter2(){
document.body.style.backgroundImage = "url(Afbeeldingen/Lvl2.jpg)"
title.innerHTML= "Chapter 2 <br> de gang";
description.innerHTML= "Je komt in een gang terecht met 3 deuren. <br>Wat doe je?";
console.log("chapter2");
button2.style.display = "";
button3.style.display = "";

button1.innerHTML= "je gaat door de 1e deur";
button2.innerHTML= "je gaat door de 2e deur"
button3.innerHTML= "je loopt de gang door naar de achterste deur"

button2.removeEventListener("click",loopWeg);
button1.removeEventListener("click",chapter2);
button1.addEventListener("click",klaslokaal1a);
button2.addEventListener("click",klaslokaal1b);
button3.addEventListener("click",lockeddoor);}

function klaslokaal1a(){
document.body.style.backgroundImage = "url(Afbeeldingen/Lokaal1.jpg)"
title.innerHTML= "klaslokaal 1a";
description.innerHTML= "Je loopt in een lokaal 1a en je ziet een crowbar liggen.<br>wil je terug de gang op?";
console.log("klaslokaal1a");
button1.style.display = "";
button2.style.display = "";
button3.style.display = "none";
button1.innerHTML= "ga terug naar de gang";
button2.innerHTML= "pak de crowbar";


button1.removeEventListener("click",klaslokaal1a);
button2.removeEventListener("click",klaslokaal1b);

button1.addEventListener("click",chapter2);
button2.addEventListener("click",crowbar);}

function klaslokaal1b() {
document.body.style.backgroundImage = "url(Afbeeldingen/Lokaal2.jpg)"
title.innerHTML= "klaslokaal 1b";
console.log("klaslokaal1b");
description.innerHTML= "Je loopt in een lokaal 1b en je ziet niks liggen.<br>wil je terug de gang op?";
button2.style.display = "none";
button3.style.display = "none";
button1.innerHTML= "ga terug naar de gang";

button1.removeEventListener("click",klaslokaal1b);
button1.addEventListener("click",chapter2);}

function chapter3(){
  document.body.style.backgroundImage = "url(Afbeeldingen/Lvl3.jpg)"
  title.innerHTML= "Chapter 3 <br> de kantine";
  description.innerHTML= "je komt in de kantine terecht. <br> Wat doe je?";
  console.log("chapter3");
  button2.removeEventListener("click",crowbar);
  button2.style.display = "";
  button3.style.display = "";
  button1.innerHTML= "je zoekt rond";
  button2.innerHTML= "je loopt door"
  button3.style.display = "none";

  button1.addEventListener("click",chapter3zoeken);
  button2.addEventListener("click",chapter4);
  button1.removeEventListener("click",klaslokaal1a);
  button2.removeEventListener("click",klaslokaal1b);}

  function chapter4(){
    document.body.style.backgroundImage = "url(Afbeeldingen/Lvl4.jpg)"
    title.innerHTML= "Chapter 4 <br> gymzaal";
    description.innerHTML= "Je neemt de deur en komt in de gymzaal terecht. <br> Wat doe je?";
    console.log("chapter4");
    button1.removeEventListener("click", chapter3zoeken)
    button3.removeEventListener("click", chapter3)

    button1.style.display = "";
    button2.style.display = "";
    button3.style.display = "";

    button1.innerHTML= "je gaat naar het opberghok";
    button2.innerHTML= "je gaat verder";
    button3.innerHTML= "je gaat naar de kleedkamers";

    button1.addEventListener("click",opberghok);
    button2.addEventListener("click",chapter5);
    button3.addEventListener("click",kleedkamers);}

    function opberghok() {
      document.body.style.backgroundImage = "url(Afbeeldingen/gymstorage.jpg)"
      title.innerHTML= "de gang";
      description.innerHTML= "Je komt in het opberhok terecht. <br> Wil je terug naar de gymzaal?";
      console.log("opberhok");

      button1.innerHTML= "ga terug naar de gymzaal";
      button2.style.display = "none";
      button3.style.display = "none";

      button1.removeEventListener("click", opberghok)

      button1.addEventListener("click", chapter4);
      }

      function kleedkamers(){
        document.body.style.backgroundImage = "url(Afbeeldingen/kleedkamers.jpg)"
        title.innerHTML= "kleedkamers";
        description.innerHTML= "Je komt in de kleedkamers terecht. <br>Het stinkt naar zweetsokken en je moet bijna overgeven van de lucht<br> Wil je terug naar de gymzaal?"
        console.log("kleedkamers");
        button1.removeEventListener("click", chapter4)
        button2.style.display = "none";
        button3.style.display = "none";

        button1.innerHTML= "ga terug naar de gymzaal";
        button2.style.display = "none";
        button3.style.display = "none";

        button1.addEventListener("click", chapter4);
      }

      function chapter5() {

        document.body.style.backgroundImage = "url(Afbeeldingen/Lvl5.jpg)"
        title.innerHTML= "Chapter 5 <br> toileten";
        description.innerHTML= "Je komt in het toilet terecht <br> Wat doe je?";
        console.log("chapter5");
        button1.removeEventListener("click", opberghok);
        button2.removeEventListener("click", chapter5);
        button3.removeEventListener("click", kleedkamers);

        button1.style.display = "";
        button2.style.display = "";
        button3.style.display = "";

        button1.innerHTML= "zoek in de wc voor iets handigs";
        button2.innerHTML= "je gaat verder";
        button3.innerHTML= "zoek in de vuilnisbak voor iets handigs ";

        button1.addEventListener("click",toiletzoeken);
        button2.addEventListener("click",chapter6);
        button3.addEventListener("click",vuilnisbakzoeken);}

        function toiletzoeken(){
          document.body.style.backgroundImage = "url(Afbeeldingen/toiletzoeken.jpg)"
          title.innerHTML= "toilethok";
          description.innerHTML= "Je kijkt in het toilet of er iets handigs in ligt.<br>Je vind niets handigs <br> wil je terug naar de toileten";
          console.log("toilet");
          button1.style.display = "";
          button2.style.display = "";
          button3.style.display = "";

          button1.innerHTML= "ga terug naar de toileten";
          button2.style.display = "none";
          button3.style.display = "none";

          button1.removeEventListener("click",toiletzoeken);
          button1.addEventListener("click", chapter5);
        }

        function vuilnisbakzoeken(){
          document.body.style.backgroundImage = "url(Afbeeldingen/vuilnisbak.jpg)"
          title.innerHTML= "vuilnisbak";
          description.innerHTML= "Je kijkt in de vuilnisbak voor iets wat je kan gebruiken. Maar je vind niets <br> Wat doe je?";
          console.log("vuilnisbak");
          button1.style.display = "";
          button2.style.display = "";
          button3.style.display = "";

          button1.innerHTML= "ga terug naar de toileten";
          button2.style.display = "none";
          button3.style.display = "none";

          button1.removeEventListener("click",vuilnisbakzoeken);
          button1.addEventListener("click", chapter5);
        }

        function chapter6(){
          document.body.style.backgroundImage = "url(Afbeeldingen/Lvl6.jpg)"
          title.innerHTML= "Chapter 6 <br> het trappenhuis";
          description.innerHTML= "Je komt in het trappenhuis terecht. Je kan naar benden of naar boven. <br> Wat doe je?";
          console.log("chapter6");
          button1.removeEventListener("click",toiletzoeken);
          button2.removeEventListener("click",chapter6);
          button3.removeEventListener("click",vuilnisbakzoeken);

          button2.style.display = "";
          button3.style.display = "";

          button1.innerHTML= "naar boven lopen";
          button2.innerHTML= "naar beneden lopen";
          button3.style.display = "none";

          button1.addEventListener("click",boven);
          button2.addEventListener("click",beneden);}











          function boven(){

            button1.removeEventListener("click",boven);
            button2.removeEventListener("click",beneden);

            boveneinde()
          }

          function beneden(){

            button1.removeEventListener("click",boven);
            button2.removeEventListener("click",beneden);

            benedeneinde()
          }

          function crowbar() {
            crowbaritem = true;
            alert("Je hebt de crowbar opgepakt");
            button2.style.display= "none"
          }

          function lockeddoor() {
            var item= crowbaritem;
            if (item === true) {
              alert("Je hebt de deur open gemaakt met de crowbar");
              chapter3()
            }else if (item != true) {
              alert("De deur is op slot. Zoek de crowbar om hem open te maken.");
              chapter2()
            }

          }


          function chapter3zoeken(){
            alert("Je vind niks")
            removechapter3()
            button2.removeEventListener("click",chapter3zoeken); }

            function removechapter3(){
              button1.style.display = "none";
              chapter3() }

function displayButton(nummer,display) {
  if (nummer==="button1") {
    button1.style.display = display;
  } else if (nummer==="button2") {
    button2.style.display = display;
  } else if (nummer==="button3") {
    button3.style.display = display;
  }
}

function loopWeg() {
  alert("Je loopt terug het bos uit.\nJe overleefd.")
  refresh()
  button2.removeEventListener("click",loopWeg);
}

function boveneinde(){
  alert("terwijl je de trap op loopt valt er een steen op je\nJe bent dood.")
  refresh()
}

function benedeneinde(){
  alert("terwijl je de trap af gaat struikel je en breekt je nek\nJe bent dood.")
  refresh()
}

function refresh() {
    location.reload();
    menu()
}
