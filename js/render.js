"use strict";

let gridLibros = document.getElementById("grid-libros");

function cargarTarjeta(libro) {
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
  selectGeneros.appendChild(
    optionGenero("", "Seleccione un género", true, true),
  );

  listaGeneros.forEach((e) => {
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
