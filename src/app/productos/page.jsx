const productos = [
  { id: 1, nombre: "Manzana", precio: 2000, descripcion: "Fruta fresca", img: "https://via.placeholder.com/150" },
  { id: 2, nombre: "Banano", precio: 1500, descripcion: "Rico en potasio", img: "https://via.placeholder.com/150" },
  { id: 3, nombre: "Naranja", precio: 1800, descripcion: "Vitamina C", img: "https://via.placeholder.com/150" }
];

export default function ProductosEstaticos() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Productos Estáticos</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {productos.map((prod) => (
          <div key={prod.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
            <img src={prod.img} alt={prod.nombre} width="150" />
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <strong>${prod.precio}</strong>
            <button style={{ display: "block", marginTop: "0.5rem" }}>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
