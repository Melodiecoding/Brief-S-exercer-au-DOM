// Récupérer contenu texte H1

let title = document.querySelector(".title");
console.log('Premier H1 -> Contenu :', title.textContent);


// Récupérer le HTML de la première balise <li>
// Première Méthode
let firstChild = document.querySelector("ul");
console.log('first LI:', firstChild.firstElementChild.innerHTML);

// Deuxième Méthode
let firstChild2 = document.querySelector("li");
console.log('first LI2:', firstChild2.innerHTML);

// Troisième Méthode
let firstChild3 = document.querySelectorAll("li");
console.log('first LI3:', firstChild3[0].innerHTML);



// Récupérer le HTML de la dernière balise <li>

let lastChild = document.querySelector("ul");
console.log('last LI:', lastChild.lastElementChild.innerHTML);


// Récupérer le HTML de la troisième balise <li>

let thirdChild = document.querySelectorAll("li");
console.log('Troisème LI:', thirdChild[2].innerHTML);


// Récupérer le HTML du parent de la balise <ul>

console.log('HTML du parent de <ul>:', document.querySelector("#menu").innerHTML);

// Récupérer le HTML du parent de la quatrième balise <li>

let parentLI = document.querySelector("ul");
console.log('HTML du parent du quatrième <li>:', parentLI.innerHTML);

// Quand la souris survole <ul>, tout le texte passe en rouge, sinon en noir

let mouseUL = document.querySelector("ul"); 
    mouseUL.addEventListener('mouseover', function handleMouseOver() {
    mouseUL.style.color = 'red'});

let mouseUL2 = document.querySelector("ul"); 
    mouseUL2.addEventListener('mouseout', function handleMouseOut() {
    mouseUL2.style.color = 'black'});
