import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { categorias } from './data/productos';
import ProductDetail from './components/ProductDetail';
import CategoryPage from './components/CategoryPage';
import './App.css';

function Home() {
  return (
    <>
      <header className="header-premium">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <span className="logo-glow">✨</span>
              <span className="logo-star">⭐</span>
              <span className="logo-moon">🌙</span>
            </div>
            
            <h1 className="logo-text"> </h1>
            <div className="logo-subtitle">LUXURY COSMETICS</div>
          </div>
          <p className="header-tagline">Maquillaje de alta calidad con un toque místico y elegante</p>
        </div>
        <div className="header-decoration"></div>
      </header>

      <div className="categories-section">
        <div className="container">
          <div className="categories-grid">
            {categorias.map(cat => (
              <Link 
                key={cat.id} 
                to={`/categoria/${encodeURIComponent(cat.nombre)}`}
                className="category-card-link"
              >
                <div 
                  className="category-card"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%), url(${cat.imagen})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="category-content">
                    <div className="category-icon">{cat.icono}</div>
                    <h3 className="category-name">{cat.nombre}</h3>
                    <p className="category-desc">{cat.descripcion}</p>
                  </div>
                  <div className="category-hover-effect"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer-premium">
        <div className="footer-content">
          <div className="footer-column">
            <h4>MYSTIC MAKEUP</h4>
            <p>Maquillaje de alta calidad con esencia mística</p>
          </div>
          <div className="footer-column">
            <h4>Contacto</h4>
            <p>📞 +57 310 6436784</p>
            <p>✉️ info@mysticmakeup.com</p>
          </div>
          <div className="footer-column">
            <h4>Síguenos</h4>
            <p>📱 Instagram: @mysticmakeup</p>
            <p>💬 WhatsApp: Asesoría personalizada</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Mystic Makeup - Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:categoriaNombre" element={<CategoryPage />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;