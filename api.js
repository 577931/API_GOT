const formularionombre = document.getElementById("busquedanombre");
const inputNombreSencillo = document.getElementById("nombresencillo");
const formulariopersonajefrase = document.getElementById("busquedapersonajefrase");
const inputNombrePersonajeFrase= document.getElementById("nombrepersonajefrase");
const formulariopersonajefrasecita = document.getElementById("busquedapersonajefrasecita");
const inputNombrePersonajeFrasecita= document.getElementById("nombrepersonajefrasecita");
const inputCantidadFrases = document.getElementById("numerofrases");
const casitas = document.getElementById("casitas");
const formulariocasa = document.getElementById("busquedacasa");
const inputSlugCasa = document.getElementById("slugcasa");
const personFrases = document.getElementById("personFrases");
const inputFraseAleatoria= document.getElementById("frasealeatoria");
const formulariofrasesaleatorias = document.getElementById("frasesaleatorias");
const inputCantidadFrasesAleatorias = document.getElementById("numerofrasesaleatorias");
const divpersonaje = document.getElementById("filas");
const urlCharacters = "https://api.gameofthronesquotes.xyz/v1/character/";
const urlHouses = "https://api.gameofthronesquotes.xyz/v1/houses";
const urlQuoteCharacter = "https://api.gameofthronesquotes.xyz/v1/author/"
const urlQuoteCharacter1 = "https://api.gameofthronesquotes.xyz/v1/author/"
const urlCharactersAndQuotes = "https://api.gameofthronesquotes.xyz/v1/characters";
const urlHouse = " https://api.gameofthronesquotes.xyz/v1/house/";
const urlRandomQuote = "https://api.gameofthronesquotes.xyz/v1/random";
const urlRandomQuotes = "https://api.gameofthronesquotes.xyz/v1/random/";

/*LIMPIAR RESULTADOS*/
document.getElementById('enlacelimpiar').addEventListener('click', function() {
    document.getElementById('filas').innerHTML = '';
 });
function limpiar() {   
    document.getElementById("filas").innerHTML = "";   
}   
function ocultar() {   
    var capa = document.getElementById("filas");   
    capa.style.display = "none";   
    capa.style.visibility = "hidden";   
}

/*FUNCIONES DEL JUEGO*/
async function getCharactersByName(name) {
    const urlFetch = urlCharacters + name;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

formularionombre.addEventListener("submit", e => {
    e.preventDefault();
    const name = inputNombreSencillo.value.toLowerCase().trim();
    getCharactersByName(name)
        .then(characters => {
            characters.forEach(element => {
                var mostrar = `<div class="col">
                                    <div class="card" style="width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title text-center"><b><u>${element.name}</u></b></h4>
                                            <h5 class="card-text"><b>Nombre:</b> ${element.slug}<h5>
                                            <h6 class="card-text"><b>Linaje:</b> ${element.house.slug}<h6>
                                            <h6 class="card-text"><b>Nombre de la casa:</b><br> ${element.house.name}<h6>
                                            <h5 class="card-text"><b>Frases:</b><br> ${element.quotes}<h5>
                                        </div>
                                    </div>
                                </div>`;
                divpersonaje.innerHTML += mostrar;
                
            });

        });

});

async function getCharactersByHouse() {
    const urlFetch = urlHouses;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}
casitas.addEventListener("click", e => {
    var id = 0;
    getCharactersByHouse()
        .then(houses => {
            houses.forEach(element => {
                var mostrar = `<div class="col">
                                        <div class="card" style="width: 20rem;" id="${id}">
                                            <div class="card-body style="padding-left: 2% !important; widht: auto;">
                                                <h4 class="card-title text-center"><b><u>${element.name}</u></b></h4>
                                                <h4 class="card-title text-center"><b>${element.slug}</b></h4>
                                            </div>
                                        </div>
                                    </div>`;
                divpersonaje.innerHTML += mostrar;
                element.members.forEach(element => {
                    var objt = document.getElementById(id);
                    var mostrar = `<div>
                        <h5>
                            Nombre: ${element.name}<br>
                            Abreviatura: ${element.slug}
                        </h5>
                    </div>`;
                    objt.innerHTML += mostrar;
                });
                id++;
            })
        });
});

async function getQuoteByCharacter(name, numero) {
    const urlFetch = urlQuoteCharacter + name + "/" + numero;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

formulariopersonajefrase.addEventListener("submit", e => {
    e.preventDefault();
    const name = inputNombrePersonajeFrase.value.toLowerCase().trim();
    const numero = inputCantidadFrases.value;
    getQuoteByCharacter(name, numero)
        .then(quote => {
            quote.forEach(element => {
                var mostrar = `<div class="col">
                                        <div class="card" style="width: 20rem;">
                                            <div class="card-body style="padding-left: 2% !important; widht: auto;">
                                                <h4 class="card-title text-left"><i>${element.sentence}</i></h4>
                                                <h5 class="card-title text-left"><b>Nombre: ${element.character.name}</b></h5>
                                                <h5 class="card-title text-left"><b>Abreviatura: ${element.character.slug}</b></h5>
                                                <h6 class="card-title text-left">${element.character.house.name}</h6>
                                                <h6 class="card-title text-left">Casa: ${element.character.house.slug}</h6>
                                            </div>
                                        </div>
                                    </div>`;
                divpersonaje.innerHTML += mostrar;
            })
        });

});

async function getQuoteByCharacter1(name) {
    const urlFetch = urlQuoteCharacter1 + name + "/1";
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

formulariopersonajefrasecita.addEventListener("submit", e => {
    e.preventDefault();
    const name = inputNombrePersonajeFrasecita.value.toLowerCase().trim();
    getQuoteByCharacter1(name)
        .then(element => {
            console.log(element)
                var mostrar = `<div class="col">
                                        <div class="card" style="width: 20rem;">
                                            <div class="card-body style="padding-left: 2% !important; widht: auto;">
                                                <h4 class="card-title text-left"><i>${element.sentence}</i></h4>
                                                <h5 class="card-title text-left"><b>Nombre: ${element.character.name}</b></h5>
                                                <h5 class="card-title text-left"><b>Abreviatura: ${element.character.slug}</b></h5>
                                                <h6 class="card-title text-left">${element.character.house.name}</h6>
                                                <h6 class="card-title text-left">Casa: ${element.character.house.slug}</h6>
                                            </div>
                                        </div>
                                    </div>`;
                divpersonaje.innerHTML += mostrar;
            })
});

async function getCharactersAndQuotes() {
    const urlFetch = urlCharactersAndQuotes;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

personFrases.addEventListener("click", e => {
    
    getCharactersAndQuotes()
    .then(characters => {
        characters.forEach(element => {
            var mostrar = `<div class="col">
                                <div class="card" style="width: 20rem;>
                                    <div class="card-body">
                                        <h4 class="card-title text-center"><b><u>${element.name}</u></b></h4>
                                        <h5 class="card-text"><b>Frases:</b><br> ${element.quotes}<h5>
                                    </div>
                                </div>
                            </div>`;
            divpersonaje.innerHTML += mostrar;
            
        });

    });
});

async function getHouseBySlug(slug) {
    const urlFetch = urlHouse + slug;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}
formulariocasa.addEventListener("submit", e => {
    e.preventDefault();
    const slug = inputSlugCasa.value.toLowerCase().trim();
    getHouseBySlug(slug)
        .then(house => {
            console.log(house);
            house.forEach(element => {
                var mostrar = `<div class="col">
                                    <div class="card" style="width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title text-center"><b><u>${element.slug}</u></b></h4>
                                            <h5 class="card-text"><b>Nombre de la casa:</b> ${element.name}<h5>
                                            <div id="Zequi" > </div>
                                        </div>
                                    </div>
                                </div>`;
                divpersonaje.innerHTML += mostrar;
                element.members.forEach(element => {
                    var objt = document.getElementById("Zequi");
                    var mostrar = `<div>
                    <h6 class="card-text"><b>Nombre :</b> ${element.name}<h6>
                    <h6 class="card-text"><b>Abreviatura:</b> ${element.slug}<h6>
                    </div>`;
                    objt.innerHTML += mostrar;
                });
            });

        });

});

async function getRandomQuote() {
    const urlFetch = urlRandomQuote;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}
inputFraseAleatoria.addEventListener("click", e => {
    getRandomQuote()
        .then(quote => {
                var mostrar = `<div class="col">
                                        <div class="card" style="width: 20rem;">
                                            <div class="card-body style="padding-left: 2% !important; widht: auto;">
                                                <h4 class="card-title text-left"><i>${quote.sentence}</i></h4>
                                                <h5 class="card-title text-left"><b>Nombre:</b> ${quote.character.name}</h5>
                                                <h5 class="card-title text-left"><b>Abreviatura:</b> ${quote.character.slug}</h5>
                                                <h6 class="card-title text-left">${quote.character.house.name}</h6>
                                                <h6 class="card-title text-left"><b>Casa:</b> ${quote.character.house.slug}</h6>
                                            </div>
                                        </div>
                                    </div>`;
                divpersonaje.innerHTML += mostrar;
            })
});

async function getRandomQuotes(numero) {
    const urlFetch = urlRandomQuotes + numero;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

formulariofrasesaleatorias.addEventListener("submit", e => {
    e.preventDefault();
    const numero = inputCantidadFrasesAleatorias.value;
    getRandomQuotes(numero)
        .then(random => {
            random.forEach(element => {
                var mostrar = `<div class="col">
                                        <div class="card" style="width: 20rem;">
                                            <div class="card-body style="padding-left: 2% !important; widht: auto;">
                                            <h4 class="card-title text-left"><i>${element.sentence}</i></h4>
                                            <h5 class="card-title text-left"><b>Nombre:</b> ${element.character.name}</h5>
                                            <h5 class="card-title text-left"><b>Abreviatura:</b> ${element.character.slug}</h5>
                                            <h6 class="card-title text-left">${element.character.house.name}</h6>
                                            <h6 class="card-title text-left"><b>Casa:</b> ${element.character.house.slug}</h6>
                                            </div>
                                        </div>
                                    </div>`;
                divpersonaje.innerHTML += mostrar;
            });
        });
});
