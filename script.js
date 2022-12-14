// Funciones

function maxToNormalize(array, keys) {
    const maxLengths = [];
    for (let i=0; i<keys.length; i++) {
        let tempMax = 0;
        for(let j=0; j<array.length; j++) {
            let actualLength = (array[j][keys[i]]+'').length;
            if (actualLength > tempMax) {
                tempMax = actualLength;
            }
        }
        maxLengths[i] = tempMax;
    }
    const objectMaxLengths = {}
    for (let i=0; i<maxLengths.length; i++) {
        objectMaxLengths[keys[i]] = maxLengths[i];
    }
    return objectMaxLengths;
}

function showArrayByProperty(arrayOfObjects, property, tag) {
    let finalLog = tag+'\n';
    const properties = Object.keys(arrayOfObjects[0]);
    const maxLengths = maxToNormalize(arrayOfObjects, properties);
    for (let object of arrayOfObjects) {
        let value = object[property]+'';
        finalLog += `${value} ${' '.repeat(maxLengths[property] - value.length)} ||`
        for (let prop of properties) {
            if (prop !== property) {
                let val = object[prop]+'';
                finalLog += ` ${val} ${' '.repeat(maxLengths[prop] - val.length)} ||`
            }
        }
        finalLog = finalLog.slice(0, finalLog.length - 3) + '\n';
    }
    console.log(finalLog);
}

function showAndSortBy(arrayOfObjects, property, tag) {
    const objectProperty = property;
    arrayOfObjects.sort((a, b) => {
        if (a[objectProperty] > b[objectProperty]) {
            return 1;
        }
        if (a[objectProperty] < b[objectProperty]) {
            return -1;
        }
        return 0;
    })
    showArrayByProperty(arrayOfObjects, objectProperty, tag);
}

function addMovie(title_, releaseYear_, ratingImdb_) {
    let message = "Ha ocurrido un problema. Intentelo nuevamente.";
    if (title_ && releaseYear_ && ratingImdb_) {
        allMovies.push({
            title: title_,
            releaseYear: parseInt(releaseYear_),
            ratingImdb: parseFloat(ratingImdb_)
        })
        message = "¡Pelicula añadida con éxito!"
    }
    console.log(message); alert(message);
}

/* 
// Esta función no fue utilizada, sentí que iba a hacer muy dificil de leer la pre-entrega, pero la dejo acá para luego seguir mejorandola.
function secureIntBetween(num, min, max) { 
    let number = num;
    while (isNaN(parseInt(number))) {
        number = prompt("Por favor, ingrese solo números enteros");
        number = parseInt(number);
        while (min >= number || number >= max) {
            number = prompt(`Recuerde que el valor mínimo es ${min} y el valor máximo es ${max}`);
        }
    }
} 
*/



// Constantes y variables

const allMovies = [
    {title: "El Secreto De Sus Ojos", releaseYear: 2009, ratingImdb: 8.2},
    {title: "The Lord Of The Rings: The Fellowship Of The Ring", releaseYear: 2001, ratingImdb: 8.8},
    {title: "The Lord Of The Rings: The Return Of The King", releaseYear: 2003, ratingImdb: 9},
    {title: "The Lord Of The Rings: The Two Towers", releaseYear: 2002, ratingImdb: 8.8},
    {title: "The Hobbit: An Unexpected Journey", releaseYear: 2012, ratingImdb: 7.8},
    {title: "The Hobbit: The Desolation Of Smaug", releaseYear: 2013, ratingImdb: 7.8},
    {title: "The Hobbit: The Battle Of The Five Armies", releaseYear: 2014, ratingImdb: 7.4},
    {title: "Star Wars IV: A New Hope", releaseYear: 1977, ratingImdb: 8.6},
    {title: "Star Wars V: The Empire Strikes Back", releaseYear: 1980, ratingImdb: 8.7},
    {title: "Star Wars VI: Retrun Of The Jedi", releaseYear: 1983, ratingImdb: 8.3},
    {title: "Star Wars I: The Panthom Menace", releaseYear: 1999, ratingImdb: 6.5},
    {title: "Star Wars II: Attack Of The Clones", releaseYear: 2002, ratingImdb: 6.6},
    {title: "Star Wars III: Revenge Of The Sith", releaseYear: 2005, ratingImdb: 7.6},
    {title: "Batman Begins", releaseYear: 2005, ratingImdb: 8.2},
    {title: "The Dark Knight", releaseYear: 2008, ratingImdb: 9},
    {title: "The Dark Knight Rises", releaseYear: 2012, ratingImdb: 8.4},
]

const mainAppMessage = "⏺ ARSTREAM ⏸\n¿Qué deseas hacer a continuación?\n\n(1)     Mostrar ordenadas por nombre\n(2)     Mostrar ordenadas por año de lanzamiento\n(3)     Mostrar ordenadas por rating de IMDb\n(4)     Subir una pelicula a la lista\n\n(q)     Salir del programa"



// Programa principal

let running = true;
while (running) {
    let selectedOption = prompt(mainAppMessage).toLowerCase();
    switch (selectedOption) {
        case 'q': // Salir del programa
            running = false;
            break;
        case '1': // Mostrar ordenadas por nombre
            showAndSortBy(allMovies, 'title', '▼ TITULO');
            break;
        case '2': // Mostrar ordenadas por año de lanzamiento
            showAndSortBy(allMovies, 'releaseYear', '▼ FECHA');
            break; 
        case '3': // Mostrar ordenadas por rating de IMDb
            showAndSortBy(allMovies, 'ratingImdb', '▼ PUNTAJE');
            break;
        case '4': // Subir pelicula a la lista // Esta acción es significativa
            addMovie(prompt("Título"), prompt("Año de lanzamiento"), prompt("Puntaje IMDb\n(Use punto en vez de coma para los decimales)"));
            break;
        default:
            alert("Por favor, ingrese una opción válida.");
            break;
    }
}

console.log("¡El programa ha finalizado!");
alert("¡El programa ha finalizado!");
