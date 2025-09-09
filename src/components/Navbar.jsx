"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "white" }}>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/lista">Lista de Tareas</Link></li>
        <li><Link href="/productos">Productos Estáticos</Link></li>
        <li><Link href="/productos/api">Productos API</Link></li>
      </ul>
    </nav>
  );
}
