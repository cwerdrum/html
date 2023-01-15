const body = document.body;
// Selectam span-ul cu id 'mode-toggle'
const darkModeToggler = document.getElementById("mode-toggle")
// Selectam containerul de carduri
const cardsContainer = document.querySelectorAll(".cards-list")[0]
// Selectam formularul de search
const searchForm = document.getElementById("searchForm");

let searchInput;

// Verificam daca exista searchForm in pagina
if (searchForm) {
// Selectam elementul input din formular
searchInput = searchForm.querySelector("input");
// Atasam funcita searchProjects la evenimentele de submit si input
searchForm.addEventListener("submit", searchProjects);
}

// Verificam daca valoarea introdus in  input sa regaseste si in numele proiectului
function searchProjects(event) {
   event.preventDefault();
   const searchValue = searchInput.value;
   // console.log(searchValue);
   const found = projects.find(proiect => proiect.nume.toLowerCase().includes(searchValue.toLowerCase()));

   if(!found || !searchValue) {
    // Nu s-a gasit valoarea,returnam toate proiectele"
    cardsContainer.innerHTML = "" ;
    projects.forEach(function(proiect) {
        generateCard(proiect)
    })
    } else {
        // S-a gasit o valoare, returnam doar proiectul respectiv
        cardsContainer.innerHTML = "";
        generateCard(found);
    }
}

// Adaugam un eveniment de click la mode-toggle
darkModeToggler.addEventListener("click", function(){
    // Cand se da click pe toggle-mode, se adauga/scoate clasa "dark-mode" la body
    body.classList.toggle('dark-mode');
    console.log(body);
});

let projects = [];

// Verificam culoarea profilului din browser
if(window.matchMedia('(prefers-color-scheme: dark').matches && window.matchMedia) {
    body.classList.toggle('dark-mode')
}

// Generam elementele HTML necesre pentru carduri folosind informatiile din JSON

function generateCard(project){
    // Generam un list item <li>
    const li = document.createElement('li')
    // Generam un div
    const div = document.createElement('div')
    // Adaugam clasa 'card' la div
    div.classList.add('card')

    // Generam un element <img>
    const cardImg = document.createElement('img')
    // Adaugam path-ul imaginii in atributul src
    cardImg.src = project.imagine
    // Adaugam numele imaginii in atributul alt
    cardImg.alt = project.nume
    // Adaugam elementul img in div-ul cu clasa 'card'
    div.append(cardImg)

    // Generam un nou div pentru continutul cardului
    const cardContent = document.createElement('div')
    // Adaugam clasa card-content la div-ul generat
    cardContent.classList.add('card-content')
    // Generam un titlu <h3>
    const title = document.createElement('h3')
    // Adaugam numele proiectului in titlu
    title.textContent = project.nume
    // Adaugam titlul in div-ul cardContent
    cardContent.append(title)

    // Generam un paragraf
    const descriere = document.createElement('p')
    // Adaugam descrierea la paragraf
    descriere.textContent = project.descriere
    // Adaugam paragraful la div-ul cardcontent
    cardContent.append(descriere)

    // Generam un buton
    const cardBtn = document.createElement('button')
    // Adaugam textul butonului
    cardBtn.textContent = "Deschide Proiectul"
    // Adaugam link-ul proiectului in buton
    cardBtn.onclick = function(){
        location.href = project.link
    }
    // Adaugam butonul in div-ul cardContent
    cardContent.append(cardBtn)

    // Adaugam div-ul cardContent in card
    div.append(cardContent)

    // Adaugam card-ul in list item
    li.append(div)
        // Adaugam list item in container-ul de card-uri
        cardsContainer.append(li)
}