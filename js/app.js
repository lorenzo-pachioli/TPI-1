import BibliotecaData from "./data.js";
import * as render from "./render.js";

export const bibliotecaData = new BibliotecaData();

const actualizarLista = (biblioteca = bibliotecaData) => {
  render.renderizarListLibros(biblioteca);
};

actualizarLista();
render.agregarASelector("generos", bibliotecaData.lista_generos, "Seleccione un género");

render.listenerBuscador((texto) => {
  bibliotecaData.buscarLibros(texto);
  actualizarLista();
});

render.agregarSubmit("cargar-libro", (data) => {
  bibliotecaData.agregarLibro(data);
  actualizarLista();
});
