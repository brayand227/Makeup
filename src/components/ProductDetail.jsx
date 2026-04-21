import { useParams, useNavigate } from 'react-router-dom';
import { productos } from '../data/productos';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return <div className="not-found">Producto no encontrado</div>;
  }

  const handleWhatsApp = () => {
    const numeroAsesor = "573106436784";
    const mensaje = encodeURIComponent(producto.whatsapp);
    window.open(`https://wa.me/${numeroAsesor}?text=${mensaje}`, '_blank');
  };

  return (
    <div className="product-detail-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      
      <div className="product-detail-card">
        <div className="product-detail-image">
          <img src={producto.imagenDetalle || producto.imagen} alt={producto.nombre} />
        </div>
        
        <div className="product-detail-info">
          <div className="product-detail-brand">{producto.marca}</div>
          <h1 className="product-detail-title">{producto.nombre}</h1>
          <div className="product-detail-price">${producto.precio.toFixed(2)}</div>
          <div className="product-detail-tax">Impuestos incluidos</div>
          
          <div className="product-detail-description">
            <h3>Descripción</h3>
            <p>{producto.descripcion}</p>
          </div>
          
          <div className="product-detail-features">
            <h3>Características</h3>
            <ul>
              {producto.detalles.map((detalle, index) => (
                <li key={index}>✨ {detalle}</li>
              ))}
            </ul>
          </div>
          
          <button className="btn-whatsapp-detail" onClick={handleWhatsApp}>
            <svg className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 2.38c4.16 0 7.53 3.37 7.53 7.53 0 4.16-3.37 7.53-7.53 7.53-1.34 0-2.63-.35-3.75-1.01l-.28-.16-3.11.82.83-3.04-.18-.29c-.71-1.16-1.08-2.48-1.08-3.85 0-4.16 3.37-7.53 7.53-7.53z"/>
              <path d="M16.5 13.2c-.3-.2-1.7-.9-2-.9-.3 0-.5.1-.7.3-.2.2-.8.9-.9 1.1-.1.2-.2.2-.5.1-.3-.1-1-.4-1.8-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3-.1-.1-.5-1.3-.8-1.8-.2-.4-.4-.4-.6-.4-.1 0-.3 0-.4 0-.1 0-.3.1-.5.2-.2.1-.7.6-.7 1.5 0 .9.7 1.8.8 1.9.1.1 1.3 2.1 3.2 2.9.5.2.8.3 1.1.4.5.2.9.1 1.3.1.4 0 1.2-.2 1.4-.5.2-.3.2-.6.1-.8z"/>
            </svg>
            Consultar Disponibilidad por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;