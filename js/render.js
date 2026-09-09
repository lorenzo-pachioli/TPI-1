"use strict";
import { libros, modificarLibro } from "./data.js";

export function cargarTarjeta(libro) {
  let tarjetaLibro = document.createElement("div");
  tarjetaLibro.classList.add("tarjeta-libro");

  let favorito = libro.favorito ? "favorite" : "favorite_border";
  let disponible = libro.disponible ? "Disponible" : "Prestado";

  tarjetaLibro.innerHTML = `
    <h3>${libro.titulo}</h3>
    <div class="tarjeta-body">
      <p><strong>Autor:</strong> ${libro.autor}</p>
      <p><strong>Género:</strong> ${libro.genero}</p>
    </div>
    <div class="tarjeta-header">      
      <span class="material-icons favorito-icono" data-id="${libro.id}">
        ${favorito}
      </span>
      <button class=" disponible-icono">${disponible}</button>
    </div>
    <div class="tarjeta-footer">
      <small>Año: ${libro.año}</small>
    </div>
  `;

  const botonFav = tarjetaLibro.querySelector(".favorito-icono");
  botonFav.addEventListener("click", () => {
    libro.favorito = !libro.favorito;
    modificarLibro(libro);
    renderizarListLibros(libros);
  });

  const botonDis = tarjetaLibro.querySelector(".disponible-icono");
  botonDis.addEventListener("click", () => {
    libro.disponible = !libro.disponible;
    modificarLibro(libro);
    renderizarListLibros(libros);
  });

  return tarjetaLibro;
}

export function renderizarListLibros(listaLibros) {
  let contenedorLibros = document.getElementById("grid-libros");

  contenedorLibros.innerHTML = "";
  
  if(listaLibros.length === 0 ) return;

  for (let index = 0; index < listaLibros.length; index++) {
    contenedorLibros.appendChild(cargarTarjeta(listaLibros[index]));
  }
}

export function agregarSubmit(id, callback) {
  const formulario = document.getElementById(id);

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(formulario);

    callback(data);

    formulario.reset();
  });
}

export function agregarASelector(idSelect, listaGeneros, placeholder) {
  const selectGeneros = document.getElementById(idSelect);
  selectGeneros.appendChild(optionsSelector("", placeholder, true, true));

  listaGeneros.forEach((e) => {
    selectGeneros.appendChild(optionsSelector(e, e, false, false));
  });
}

function optionsSelector(value, text, disable, selected) {
  const opcionPorDefecto = document.createElement("option");
  opcionPorDefecto.value = value;
  opcionPorDefecto.textContent = text;
  opcionPorDefecto.disabled = disable;
  opcionPorDefecto.selected = selected;
  return opcionPorDefecto;
}

export function listenerBuscador(filtroBusqueda) {
  const buscador = document.getElementById("buscador");

  buscador.addEventListener("input", (e) => {
    const valorBusqueda = e.target.value.toLowerCase();

    const librosFiltrados = filtroBusqueda(valorBusqueda);

    renderizarListLibros(librosFiltrados);
  });

}
