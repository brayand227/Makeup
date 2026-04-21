// Importar imágenes locales
// NOTA: Cambia estas rutas por los nombres reales de tus imágenes

export const categorias = [
  {
    id: 1,
    nombre: "Labiales",
    descripcion: "Colección exclusiva de labiales de larga duración",
    imagen: "/src/assets/images/labiales-categoria.jpg",
    fondo: "linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%)"
  },
  {
    id: 2,
    nombre: "Bases y Correctores",
    descripcion: "Acabado perfecto y natural",
    imagen: "/src/assets/images/bases-categoria.jpg",
    fondo: "linear-gradient(135deg, #f3a683 0%, #e77f67 100%)"
  },
  {
    id: 3,
    nombre: "Sombras de Ojos",
    descripcion: "Paletas de alta pigmentación",
    imagen: "/src/assets/images/sombras-categoria.jpg",
    fondo: "linear-gradient(135deg, #a8e6cf 0%, #3b8d6e 100%)"
  }
];

export const productos = [
  // LABIALES DIOR
  {
    id: 1,
    nombre: "Rouge Dior 999",
    marca: "Dior",
    categoria: "Labiales",
    precio: 42.99,
    imagen: "/src/assets/images/dior.jpg",
    imagenDetalle: "/src/assets/images/dior-detalle.jpg",
    descripcion: "Labial rojo icónico de larga duración con acabado satinado. Fórmula enriquecida con extracto de flores de loto.",
    detalles: ["Larga duración 12h", "Acabado satinado", "Hidratación intensa", "Pigmentación pura"],
    whatsapp: "Hola, quiero información sobre el Rouge Dior 999"
  },
  {
    id: 2,
    nombre: "Pandora Velvet Matte",
    marca: "Pandora Beauty",
    categoria: "Labiales",
    precio: 28.99,
    imagen: "/src/assets/images/pandora.jpg",
    imagenDetalle: "/src/assets/images/pandora-detalle.jpg",
    descripcion: "Labial mate efecto terciopelo con textura cremosa que no reseca los labios.",
    detalles: ["Efecto terciopelo", "No transfiere", "Duración 8h", "Textura cremosa"],
    whatsapp: "Hola, quiero información sobre el Pandora Velvet Matte"
  },
  
  // BASES
  {
    id: 3,
    nombre: "Dior Forever Skin Glow",
    marca: "Dior",
    categoria: "Bases y Correctores",
    precio: 54.99,
    imagen: "/src/assets/images/dior-base.jpg",
    imagenDetalle: "/src/assets/images/dior-detalle-base.jpg",
    descripcion: "Base luminosa con efecto glow natural. Acabado radiante y efecto segunda piel.",
    detalles: ["SPF 20", "Efecto glow", "Cobertura media", "24h duración"],
    whatsapp: "Hola, quiero información sobre la base Dior Forever Skin Glow"
  },
  {
    id: 4,
    nombre: "Pandora Luminous Foundation",
    marca: "Pandora Beauty",
    categoria: "Bases y Correctores",
    precio: 38.99,
    imagen: "/src/assets/images/pandora-base.jpg",
    imagenDetalle: "/src/assets/images/pandora-detalle-base.jpg",
    descripcion: "Base de cobertura media a alta con acabado luminoso y efecto difuminador.",
    detalles: ["Cobertura personalizable", "Acabado luminoso", "Hidratante", "Larga duración"],
    whatsapp: "Hola, quiero información sobre la base Pandora Luminous"
  },
  
  // SOMBRAS
  {
    id: 5,
    nombre: "Dior Backstage Eye Palette",
    marca: "Dior",
    categoria: "Sombras de Ojos",
    precio: 49.99,
    imagen: "/src/assets/images/dior-sombras.jpg",
    imagenDetalle: "/src/assets/images/dior-detalle-sombras.jpg",
    descripcion: "Paleta de 9 tonos profesionales para looks desde naturales hasta dramáticos.",
    detalles: ["9 tonos", "Alta pigmentación", "Acabados variados", "Fórmula suave"],
    whatsapp: "Hola, quiero información sobre la paleta Dior Backstage"
  },
  {
    id: 6,
    nombre: "Pandora Nude Dreams",
    marca: "Pandora Beauty",
    categoria: "Sombras de Ojos",
    precio: 32.99,
    imagen: "/src/assets/images/pandora-sombras.jpg",
    imagenDetalle: "/src/assets/images/pandora-detalle-sombras.jpg",
    descripcion: "Paleta de tonos nude y marrones perfecta para el día a día.",
    detalles: ["12 tonos", "Acabado mate y shimmer", "Fácil difuminado", "Larga duración"],
    whatsapp: "Hola, quiero información sobre la paleta Pandora Nude Dreams"
  }
  
  
];