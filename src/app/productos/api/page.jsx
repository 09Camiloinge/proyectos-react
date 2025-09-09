"use client";
import { useEffect, useState } from "react";

export default function ProductosAPI() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos ❌</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Productos desde API</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
        {productos.map((prod) => (
          <div key={prod.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
            <img src={prod.image} alt={prod.title} width="150" />
            <h3>{prod.title}</h3>
            <p>{prod.description.slice(0, 80)}...</p>
            <strong>${prod.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
