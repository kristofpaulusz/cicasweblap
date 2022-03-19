window.addEventListener("load", init);
var aktualiskepIndex = 0;

var kepek = [
  {
    cim: "01-es kép",
    eleresiut: "./kepek/01.jpg",
    leírás: "Ez a első cicás kép",
  },
  {
    cim: "02-es kép",
    eleresiut: "./kepek/02.jpg",
    leírás: "Ez a második cicás kép",
  },
  {
    cim: "03-es kép",
    eleresiut: "./kepek/03.jpg",
    leírás: "Ez a harmadik cicás kép",
  },
  {
    cim: "04-es kép",
    eleresiut: "./kepek/04.jpg",
    leírás: "Ez a negyedik cicás kép",
  },
  {
    cim: "05-es kép",
    eleresiut: "./kepek/05.jpg",
    leírás: "Ez a ötödik cicás kép",
  },
  {
    cim: "06-es kép",
    eleresiut: "./kepek/06.jpg",
    leírás: "Ez a hatodik cicás kép",
  },
];
function ID(elem) {
  return document.getElementById(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem)
}
function kiirKepek() {
  var txt = " ";
  for (let i = 0; i < kepek.length; i++) {
    txt =
      txt +
      "<div>" +
      "<h3>" +
      kepek[i].cim +
      "</h3>" +
      "<img id='"+i+"' src='" +
      kepek[i].eleresiut +
      "' class='kepek' alt='cicás képek'/>" +
      "<p>" +
      kepek[i].leírás +
      "</p> </div>";
  }
  ID("galeria").innerHTML = txt;
}
function KepMegjelenit() {
  var txt = '<img src="'+kepek[aktualiskepIndex].eleresiut+'" alt="" >'
  console.log(txt)
  ID("nagykép").innerHTML = txt
}
function kattintas(event) {
  console.log(event.target.id)
  aktualiskepIndex = event.target.id
  /*console.log(kepek[aktualiskepIndex])*/
  var txt = '<img src="'+kepek[aktualiskepIndex].eleresiut+'" alt="" >'
  console.log(txt)
  ID("nagykép").innerHTML = txt
}
function bal() {
  /*Az aktuális képindexet csökkenti egyel*/
  aktualiskepIndex--;
  if (aktualiskepIndex<0) {
    aktualiskepIndex=kepek.length-1
  }
  console.log(aktualiskepIndex)
  KepMegjelenit()
}
function jobb() {
  /*Az aktuális képindexet növeli egyel*/
  aktualiskepIndex++;
  if (aktualiskepIndex==kepek.length) {
    aktualiskepIndex=0
  }
  console.log(aktualiskepIndex)
  KepMegjelenit()
}

function init() {
  kiirKepek();
  ID("galeria").style.backgroundColor="pink";
  
  for (let index = 0; index < kepek.length; index++) {
   /* CLASS("kepek")[index].style.border ="5px solid black"  
    document.querySelectorAll("#galeria div img")[index].style.border ="5px solid black"*/
    $('#galeria div')[index].className = 'divekFormazasa'
    $("#galeria div img")[index].addEventListener("click", kattintas)
  }

  $("#jobb")[0].addEventListener("click", jobb)
  $("#bal")[0].addEventListener("click", bal)
}