import { buscarLibros, libros, lista_generos } from "./data.js";
import * as render from "./render.js";



render.renderizarListLibros(libros);

render.agregarASelector("generos", lista_generos, "Seleccione un género");

render.listenerBuscador((e) => buscarLibros(e));

render.agregarSubmit("cargar-libro", (data) => {
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
});
