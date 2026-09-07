"use strict";

let gridLibros = document.getElementById("grid-libros");

function cargarTarjeta(libro) {
  let tarjetaLibro = document.createElement("div");
  tarjetaLibro.classList.add("tarjeta-libro");

  let favorito = libro.favorito ? "⭐" : "☆";
  let disponible = libro.disponible ? "Disponible" : "Prestado";

  tarjetaLibro.innerHTML = `
    <h3>${libro.titulo}</h3>
    <div class="tarjeta-body">
      <p><strong>Autor:</strong> ${libro.autor}</p>
      <p><strong>Género:</strong> ${libro.genero}</p>
    </div>
    <div class="tarjeta-header">
      <span class="favorito-icono">${favorito}</span>
      <span class="estado-etiqueta">${disponible}</span>
    </div>
    <div class="tarjeta-footer">
      <small>Año: ${libro.año}</small>
    </div>
  `;
  return tarjetaLibro;
}

function renderizarListLibros(listaLibros) {
  let contenedorLibros = document.getElementById("grid-libros");

  contenedorLibros.innerHTML = ""; 

  for (let index = 0; index < listaLibros.length; index++) {
    contenedorLibros.appendChild(cargarTarjeta(listaLibros[index]));
  }
}

function agregarListeners(id) {
  agregarSubmit(id);
}


function agregarSubmit(id) {
  const formulario = document.getElementById(id);

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(formulario);

    const nuevo_libro = {
      id: ultimo_id,
      titulo: data.get("titulo"),
      autor: data.get("autor"),
      genero: data.get("generos"),
      año: data.get("ano"),
      disponible: true,
      favorito: false,
    };

    libros.push(nuevo_libro);
    renderizarListLibros(libros);

    formulario.reset();
  });
}

function agregarGeneros(idSelect, listaGeneros) {
  const selectGeneros = document.getElementById(idSelect);
  selectGeneros.appendChild(optionGenero("", "Seleccione un género", true, true));

  listaGeneros.forEach(e => {
    selectGeneros.appendChild(optionGenero(e, e, false, false));
  });
}

function optionGenero(value, text, disable, selected) {
  const opcionPorDefecto = document.createElement("option");
  opcionPorDefecto.value = value;
  opcionPorDefecto.textContent = text;
  opcionPorDefecto.disabled = disable;
  opcionPorDefecto.selected = selected;
  return opcionPorDefecto;
}
