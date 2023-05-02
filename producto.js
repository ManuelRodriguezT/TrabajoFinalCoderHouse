class producto {
    nombre;
    marca;
    talla;
    color;
    cantidad;
    precio;
    id;

constructor (id,nombre, precio, cantidad, marca, talla, color){
    this.id = id
    this.nombre = nombre
    this.marca = marca
    this.talle = this.talle
    this.color = color
    this.cantidad = cantidad
    this.precio = precio

}

subtotal = () => {
    return this.precio*this.cantidad;
}
}