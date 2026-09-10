"use strict";

export function cargarTarjeta(index, biblioteca) {

  let libro = biblioteca.libros[index];

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
    biblioteca.modificarLibro(libro);
    renderizarListLibros(biblioteca);
  });

  const botonDis = tarjetaLibro.querySelector(".disponible-icono");
  botonDis.addEventListener("click", () => {
    libro.disponible = !libro.disponible;
    biblioteca.modificarLibro(libro);
    renderizarListLibros(biblioteca);
  });

  return tarjetaLibro;
}

export function renderizarListLibros(biblioteca) {
  let contenedorLibros = document.getElementById("grid-libros");
  
  contenedorLibros.innerHTML = "";
  
  if(!biblioteca || !biblioteca.libros || biblioteca.libros.length === 0 ) return;

  for (let index = 0; index < biblioteca.libros.length; index++) {
    contenedorLibros.appendChild(cargarTarjeta(index, biblioteca));
  }
}

export function agregarSubmit(id, callback) {
  const formulario = document.getElementById(id);

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(formulario));

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
    filtroBusqueda(valorBusqueda);
  });

}
