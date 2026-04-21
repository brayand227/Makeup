import { useParams, useNavigate } from 'react-router-dom';
import { categorias, productos } from '../data/productos';
import ProductCard from './ProductCard';
import './CategoryPage.css';

function CategoryPage() {
  const { categoriaNombre } = useParams();
  const navigate = useNavigate();

  // Validación segura
  const categoriaDecodificada = categoriaNombre 
    ? decodeURIComponent(categoriaNombre) 
    : '';

  // Buscar categoría
  const categoriaActual = categorias.find(
    (c) => c.nombre === categoriaDecodificada
  );

  // Filtrar productos
  const productosFiltrados = productos.filter(
    (p) => p.categoria === categoriaDecodificada
  );

  // Si no existe la categoría
  if (!categoriaActual) {
    return (
      <div className="error-page">
        <h2>Categoría no encontrada</h2>
        <button 
          onClick={() => navigate('/', { replace: true })} 
          className="btn-back-home"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="category-page">

      {/* HERO */}
      <div
        className="category-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${categoriaActual.imagen})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="category-hero-content">
          
          <button 
            className="btn-back-home" 
            onClick={() => navigate('/')}
          >
            ← Volver al inicio
          </button>

          <div className="category-icon-large">
            {categoriaActual.icono}
          </div>

          <h1 className="category-hero-title">
            {categoriaActual.nombre}
          </h1>

          <p className="category-hero-description">
            {categoriaActual.descripcion}
          </p>

          <div className="category-stats">
            <span>✨ {productosFiltrados.length} productos disponibles</span>
          </div>

        </div>
      </div>

      {/* PRODUCTOS */}
      <div className="category-products">
        <div className="container">

          <div className="section-header">
            <h2 className="section-title">Nuestra Colección</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Descubre todos nuestros productos de {categoriaActual.nombre}
            </p>
          </div>

          {productosFiltrados.length === 0 ? (
            <div className="no-products">
              <p>Próximamente más productos en esta categoría</p>
            </div>
          ) : (
            <div className="products-grid-premium">
              {productosFiltrados.map((producto) => (
                <ProductCard 
                  key={producto.id} 
                  producto={producto} 
                />
              ))}
            </div>
          )}

        </div>
      </div>

      {/* BANNER WHATSAPP */}
      <div className="advisory-banner">
        <div className="container">
          <div className="banner-content">

            <div className="banner-text">
              <h3>¿Necesitas asesoría personalizada?</h3>
              <p>
                Nuestros expertos en maquillaje están listos para ayudarte
              </p>
            </div>

            <button
              className="btn-banner-whatsapp"
              onClick={() => {
                const numeroAsesor = "+573106436784";
                const mensaje = "Hola, necesito asesoría para elegir productos de maquillaje";
                const url = `https://wa.me/${numeroAsesor}?text=${encodeURIComponent(mensaje)}`;
                window.open(url, '_blank');
              }}
            >
              💬 Consultar por WhatsApp
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}

export default CategoryPage; 