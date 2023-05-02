let carrito = [];


const productos = [
    new Producto(1, "ConfettiCookie", 100, 1, "Confetti"),
    new Producto(2, "ButternautCookie", 100, 1, "Butternaut"),
    new Producto(3, "ChocoPrinklesCookie", 100, 1, "ChocoPrinkles"),
  ];
  
  const boton1 = document.getElementById("boton1");
  const boton2 = document.getElementById("boton2");
  const boton3 = document.getElementById("boton3");
  
  
  boton1.addEventListener("click", () => {
    const producto = productos.find((item) => {
      return item.id === +boton1.dataset.id;
    });
    carrito.push(producto);
  });
  
  boton2.addEventListener("click", () => {
    const producto = productos.find((item) => {
      return item.id === +boton2.dataset.id;
    });
    carrito.push(producto);
  });
  
  boton3.addEventListener("click", () => {
    const producto = productos.find((item) => {
      return item.id === +boton3.dataset.id;
    });
    carrito.push(producto);
  });
  
  function mostrarCarrito() {
    const tabla = document.getElementById("producto");
    tabla.innerHTML = ``;
    let counter = 1;
  
    carrito.forEach((producto) => {
      tabla.innerHTML += `
    
          <tr>
    
            <th>${counter}<th>
    
            <td>${producto.nombre}<td>
    
            <td>${producto.marca}<td>
    
            <td>${producto.talle}<td>
    
            <td>${producto.color}<td>
    
            <td>${producto.cantidad}<td>
    
            <td>${producto.precio}<td>
    
          <tr>
    
        `;
  
      counter++;
    });
  
    tr = document.createElement("tr");
  
    tr.innerHTML = `<th><th>
    
                        <td><td>
    
                        <td><td>
    
                        <td><td>
    
                        <td><td>
    
                        <td><td>
    
                        <td><td>
    
                        <td>${carrito.reduce(
                          (total, item) => total + item.precio,
                          0
                        )}<td>
    
                        `;
  
    tabla.appendChild(tr);
  }
  