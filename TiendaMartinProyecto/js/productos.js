fetch('data/productos.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('productos-container');
    data.forEach(producto => {
      const div = document.createElement('div');
      div.innerHTML = `<h2>${producto.nombre}</h2><p>${producto.descripcion}</p><button>Agregar al carrito</button>`;
      container.appendChild(div);
    });
  });