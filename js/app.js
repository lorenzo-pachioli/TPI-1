renderizarListLibros(libros);

agregarASelector("generos", lista_generos, "Seleccione un género");

agregarSubmit("cargar-libro", (data) => {
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
