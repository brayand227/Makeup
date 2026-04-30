import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ producto }) {
  const navigate = useNavigate();

  // Función para formatear precios en pesos colombianos
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const numeroAsesor = "573106436784";
    const mensaje = encodeURIComponent(producto.whatsapp);
    window.open(`https://wa.me/${numeroAsesor}?text=${mensaje}`, '_blank');
  };

  const handleVerDetalle = () => {
    navigate(`/producto/${producto.id}`);
  };

  return (
    <div className="product-card-premium" onClick={handleVerDetalle}>
      <div className="product-badge">
        {producto.marca === "Dior" ? "DIOR" : producto.marca}
      </div>
      <div className="product-image-container">
        <img src={producto.imagen} alt={producto.nombre} className="product-image-premium" />
        <div className="product-overlay">
          <button className="btn-quick-view">Ver Detalles</button>
        </div>
      </div>
      <div className="product-info-premium">
        <div className="product-brand">{producto.marca}</div>
        <h3 className="product-name">{producto.nombre}</h3>
        <p className="product-description-premium">{producto.descripcion.substring(0, 60)}...</p>
        <div className="product-price-section">
          <span className="product-price-premium">${formatPrice(producto.precio)}</span>
          <span className="product-tax">Impuestos incluidos</span>
        </div>
        <button className="btn-whatsapp" onClick={handleWhatsApp}>
          <svg className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 2.38c4.16 0 7.53 3.37 7.53 7.53 0 4.16-3.37 7.53-7.53 7.53-1.34 0-2.63-.35-3.75-1.01l-.28-.16-3.11.82.83-3.04-.18-.29c-.71-1.16-1.08-2.48-1.08-3.85 0-4.16 3.37-7.53 7.53-7.53z"/>
            <path d="M16.5 13.2c-.3-.2-1.7-.9-2-.9-.3 0-.5.1-.7.3-.2.2-.8.9-.9 1.1-.1.2-.2.2-.5.1-.3-.1-1-.4-1.8-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3-.1-.1-.5-1.3-.8-1.8-.2-.4-.4-.4-.6-.4-.1 0-.3 0-.4 0-.1 0-.3.1-.5.2-.2.1-.7.6-.7 1.5 0 .9.7 1.8.8 1.9.1.1 1.3 2.1 3.2 2.9.5.2.8.3 1.1.4.5.2.9.1 1.3.1.4 0 1.2-.2 1.4-.5.2-.3.2-.6.1-.8z"/>
          </svg>
          Consultar con Asesor
        </button>
      </div>
    </div>
  );
}

export default ProductCard;