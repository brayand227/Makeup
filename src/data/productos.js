// Importar imágenes locales
// NOTA: Todas las imágenes deben estar en public/images/

export const categorias = [
  {
    id: 1,
    nombre: "Maquillaje Pemium",
    descripcion: "Colección exclusiva de maquillaje de la mejor calidad ",
    imagen: "/Makeup/images/categoriaPrincipal.jpg",
    fondo: "linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%)"
  },
  

];

export const productos = [
  // ========== LABIALES ==========
  {
    id: 1,
    nombre: "Peptide Lip Balm",
    marca: "Atenea",
    categoria: "Maquillaje Pemium",
    precio: 33.0000,
    imagen: "/Makeup/images/Peptide_lip_balm.jpeg",
    imagenDetalle: "/Makeup/images/Peptide_lip_balm.jpeg",
    descripcion: "Bálsamo labial con péptidos que hidrata y repara los labios, dejándolos suaves y voluminosos.",
    detalles: ["Hidratación profunda", "Efecto voluminizador", "Fórmula con péptidos", "Acabado natural"],
    whatsapp: "Hola, quiero información sobre el Peptide Lip Balm de Atenea"
  },
  {
    id: 2,
    nombre: "Mini Peptide Lip Balm",
    marca: "Atenea",
    categoria: "Maquillaje Pemium",
    precio: 20.0000,
    imagen: "/Makeup/images/Mini_peptide_lip_balm_atenea.jpeg",
    imagenDetalle: "/Makeup/images/Mini_peptide_lip_balm_atenea.jpeg",
    descripcion: "Versión mini del bálsamo labial con péptidos, perfecto para llevar a todas partes.",
    detalles: ["Tamaño de bolsillo", "Hidratación intensa", "Misma fórmula que el original", "Ideal para viajes"],
    whatsapp: "Hola, quiero información sobre el Mini Peptide Lip Balm de Atenea"
  },

  // ========== CORRECTORES ==========
  {
    id: 3,
    nombre: "Corrector Atenea",
    marca: "Atenea",
    categoria: "Maquillaje Pemium",
    precio: 45.0000,
    imagen: "/Makeup/images/Corrector_atenea.jpeg",
    imagenDetalle: "/Makeup/images/Corrector_atenea.jpeg",
    descripcion: "Corrector de alta cobertura que disimula ojeras e imperfecciones con acabado natural.",
    detalles: ["Alta cobertura", "Acabado natural", "Larga duración", "Fórmula hidratante"],
    whatsapp: "Hola, quiero información sobre el Corrector de Atenea"
  },
  {
    id: 4,
    nombre: "Corrector ANI-k",
    marca: "ANI-k",
    categoria: "Maquillaje Pemium",
    precio: 21.0000,
    imagen: "/Makeup/images/Corrector_ANI-k.jpeg",
    imagenDetalle: "/Makeup/images/Corrector_ANI-k.jpeg",
    descripcion: "Corrector ligero con acabado luminoso, ideal para iluminar el contorno de ojos.",
    detalles: ["Acabado luminoso", "Textura ligera", "Ilumina la mirada", "Fácil difuminado"],
    whatsapp: "Hola, quiero información sobre el Corrector ANI-k"
  },

  // ========== CONTORNO ==========
  {
    id: 5,
    nombre: "Contorno en Barra Atenea",
    marca: "Atenea",
    categoria: "Maquillaje Pemium",
    precio: 36.0000,
    imagen: "/Makeup/images/contorno_en_barrera_Atenea.jpeg",
    imagenDetalle: "/Makeup/images/contorno_en_barrera_Atenea.jpeg",
    descripcion: "Contorno en barra para esculpir y definir el rostro con acabado natural y difuminado perfecto.",
    detalles: ["Textura cremosa", "Fácil difuminado", "Acabado natural", "Larga duración"],
    whatsapp: "Hola, quiero información sobre el Contorno en Barra de Atenea"
  },

  // ========== RUBORES ==========
  {
    id: 6,
    nombre: "Rubor Atenea en Barra",
    marca: "Atenea",
    categoria: "Maquillaje Pemium",
    precio: 36.0000,
    imagen: "/Makeup/images/Rubor_atenea_enbarra.jpeg",
    imagenDetalle: "/Makeup/images/Rubor_atenea_enbarra.jpeg",
    descripcion: "Rubor en barra con acabado cremoso que se difumina fácilmente para un look saludable.",
    detalles: ["Textura cremosa", "Acabado natural", "Fácil aplicación", "Larga duración"],
    whatsapp: "Hola, quiero información sobre el Rubor Atenea en Barra"
  },


  // ========== DÚO SHELL TINT ==========
  {
    id: 7,
    nombre: "Duo Shell Tint Mini",
    marca: "Bloo Beauty",
    categoria: "Maquillaje Pemium",
    precio: 26.0000,
    imagen: "/Makeup/images/Duo_shell_tint_mini mimosa_Bloomshell.jpeg",
    imagenDetalle: "/Makeup/images/Duo_shell_tint_mini mimosa_Bloomshell.jpeg",
    descripcion: "Dúo de tintas labiales mini con tono mimosa, acabado natural y duradero.",
    detalles: ["Dos tonos en uno", "Acabado natural", "Larga duración", "Tamaño mini"],
    whatsapp: "Hola, quiero información sobre el Duo Shell Tint Mini de Bloo Beauty"
  },

  // ========== POLVOS ==========
  {
    id: 8,
    nombre: "Polvo Suelto Mini",
    marca: "Atenea",
    categoria: "Maquillaje Pemium",
    precio: 35.0000,
    imagen: "/Makeup/images/Polvo_suelto_mini.jpeg",
    imagenDetalle: "/Makeup/images/Polvo_suelto_mini.jpeg",
    descripcion: "Polvo suelto mini que sella el maquillaje con acabado mate y natural.",
    detalles: ["Acabado mate", "Sella el maquillaje", "Controla brillos", "Tamaño mini"],
    whatsapp: "Hola, quiero información sobre el Polvo Suelto Mini de Atenea"
  },

  // ========== TINTA DE MAQUILLAJE ==========
  {
    id: 9,
    nombre: "Tinta de Maquillaje Serum",
    marca: "Serum",
    categoria: "Maquillaje Pemium",
    precio: 56.0000,
    imagen: "/Makeup/images/Tinta_de_maquillaje_serum56.jpeg",
    imagenDetalle: "/Makeup/images/Tinta_de_maquillaje_serum56.jpeg",
    descripcion: "Tinta de maquillaje con fórmula serum que unifica el tono y deja la piel radiante.",
    detalles: ["Efecto segunda piel", "Fórmula con serum", "Acabado radiante", "Cobertura natural"],
    whatsapp: "Hola, quiero información sobre la Tinta de Maquillaje Serum56"
  },
  {
    id: 10,
    nombre: "Sombra Individual Atenea",
    marca: "Atenea",
    categoria: "Sombras de Ojos",
    precio: 16.0000,
    imagen: "/Makeup/images/Sombra_individual_de_atenea.jpeg",
    imagenDetalle: "/Makeup/images/Sombra_individual_de_atenea.jpeg",
    descripcion: "Sombra de ojos individual con alta pigmentación y acabado suave y duradero. tonos: lilo,oki,lanai",
    detalles: ["Alta pigmentación", "Acabado suave", "Larga duración", "Fácil difuminado"],
    whatsapp: "Hola, quiero información sobre la Sombra Individual de Atenea"
  }
];