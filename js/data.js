"use strict";

export default class BibliotecaData {
  
  constructor() {
    this._libros = [
      {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        año: 1967,
        disponible: true,
        favorito: true,
      },
      {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ciencia ficción",
        año: 1949,
        disponible: false,
        favorito: true,
      },
      {
        id: 3,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Fantasía",
        año: 1943,
        disponible: true,
        favorito: false,
      },
      {
        id: 4,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela",
        año: 1605,
        disponible: true,
        favorito: true,
      },
      {
        id: 5,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J. K. Rowling",
        genero: "Fantasía",
        año: 1997,
        disponible: false,
        favorito: false,
      },
      {
        id: 6,
        titulo: "El Hobbit",
        autor: "J. R. R. Tolkien",
        genero: "Fantasía",
        año: 1937,
        disponible: true,
        favorito: true,
      },
      {
        id: 7,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        año: 1813,
        disponible: true,
        favorito: false,
      },
      {
        id: 8,
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        genero: "Novela",
        año: 1981,
        disponible: false,
        favorito: false,
      },
      {
        id: 9,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        genero: "Ciencia ficción",
        año: 1953,
        disponible: true,
        favorito: true,
      },
      {
        id: 10,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Misterio",
        año: 2001,
        disponible: true,
        favorito: false,
      },
    ];
    this._filtrados = this._libros;
  }

  get libros() {
    return this._filtrados;
  }

  get lista_generos() {
    return [...new Set(this._libros.map((libro) => libro.genero))];
  }

  get ultimo_id() {
    return this.libros[this.libros.length - 1].id;
  }

  agregarLibro(data) {
    console.log(data);

    const sinDef = "Sin definir";
    
    const nuevoLibro = {
      id: this.ultimo_id + 1,
      titulo: data.titulo || sinDef,
      autor: data.autor || sinDef,
      genero: data.generos || sinDef,
      año: data.ano || sinDef,
      disponible: true,
      favorito: false,
    };
    this._libros.push(nuevoLibro);
  }

  modificarLibro(libroModificado) {
    this._libros = this._libros.map((l) =>
      l.id === libroModificado.id ? libroModificado : l,
    );
  }

  buscarLibros(busqueda) {
    if (!busqueda || busqueda.trim() === "") {
      return ;
    }
    const busquedaTrimmed = busqueda.trim().toLowerCase();
    return this._filtrados = this._libros.filter(
      (libro) =>
        libro.titulo.toLowerCase().includes(busquedaTrimmed) ||
        libro.autor.toLowerCase().includes(busquedaTrimmed) ||
        libro.genero.toLowerCase().includes(busquedaTrimmed),
    );
  }
}
