var libros = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    año: 1967,
    disponible: true,
    favorito: true
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ciencia ficción",
    año: 1949,
    disponible: false,
    favorito: true
  },
  {
    id: 3,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Fantasía",
    año: 1943,
    disponible: true,
    favorito: false
  },
  {
    id: 4,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Novela",
    año: 1605,
    disponible: true,
    favorito: true
  },
  {
    id: 5,
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J. K. Rowling",
    genero: "Fantasía",
    año: 1997,
    disponible: false,
    favorito: false
  },
  {
    id: 6,
    titulo: "El Hobbit",
    autor: "J. R. R. Tolkien",
    genero: "Fantasía",
    año: 1937,
    disponible: true,
    favorito: true
  },
  {
    id: 7,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "Romance",
    año: 1813,
    disponible: true,
    favorito: false
  },
  {
    id: 8,
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    genero: "Novela",
    año: 1981,
    disponible: false,
    favorito: false
  },
  {
    id: 9,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    genero: "Ciencia ficción",
    año: 1953,
    disponible: true,
    favorito: true
  },
  {
    id: 10,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    genero: "Misterio",
    año: 2001,
    disponible: true,
    favorito: false
  }
];

let ultimo_id = libros[libros.length - 1].id;

const lista_generos = [...new Set(libros.map(libro => libro.genero))];

function modificarLibro(libro){
  libros = libros.map(l => {
    if (l.id === libro.id) {
      return libro;
    }
    return l;
  })
}