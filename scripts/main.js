document.querySelector("html").style.backgroundColor = "orange";

//  Esto le da tres variables que almacenan referencias al campo de texto "Ingresar nombre personalizado" (nombre personalizado), el botón "Generar historia aleatoria" (aleatorizar) y el elemento <p> en la parte inferior del cuerpo HTML en el que se mostrará la historia. copiado en (historia), respectivamente.
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// Además, tiene una función llamada randomValueFromArray () que toma una matriz y devuelve uno de los elementos almacenados dentro de la matriz al azar.

function randomValueFromArray(array) {
    var random = Math.floor(Math.random()*  array.length);
    return array[random];
}

// Este contiene cadenas de texto que actuarán como entrada en nuestro programa. Nos gustaría que contuvieras estas variables internas dentro de main.js:

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];

var insertY = ["the soup kitchen","Disneyland","the White House"];

var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

// Cree una nueva variable llamada newStory y establezca su valor en igual a storyText. Esto es necesario para que podamos crear una nueva historia aleatoria cada vez que se presiona el botón y se ejecuta la función. Si hiciéramos cambios directamente en storyText, solo podríamos generar una nueva historia una vez.

// Cree tres nuevas variables llamadas xItem, yItem y zItem, y haga que sean iguales al resultado de llamar a randomValueFromArray () en sus tres arreglos (el resultado en cada caso será un elemento aleatorio de cada arreglo al que se llame). Por ejemplo, puede llamar a la función y hacer que devuelva una cadena aleatoria fuera de insertX escribiendo randomValueFromArray (insertX).

//   Agrega un detector de eventos de clic a la variable aleatoria para que cuando se haga clic en el botón que representa, se ejecute la función result ().

randomize.addEventListener('click', result);



function result() {
  var newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", yItem);


  if (customName.value !== "") {
    var name = customName.value;
    newStory = newStory.replace("Bob", name);
    }


    if (document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.0714286) + " stone";
        var temperature =  Math.round((94 - 32) * 5 / 9) + " centigrade";
        newStory = newStory.replace("94 farenheit", temperature);
        newStory = newStory.replace("300 pounds", weight);
        }

        story.textContent = newStory;
        story.style.visibility = "visible";
    }
