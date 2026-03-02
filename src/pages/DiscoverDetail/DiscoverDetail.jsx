import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { 
  ChevronLeft, 
  History, 
  Play, 
  Compass, 
  ShoppingBasket, 
  Send, 
  Users, 
  Clock, 
  SlidersHorizontal,
  Download
} from 'lucide-react'
import { discoverFeeds } from '../../data/discoverFeeds'
import SaveModal from '../../components/SaveModal/SaveModal'
import './DiscoverDetail.css'

export default function DiscoverDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showSave, setShowSave] = useState(false)

  const feed = discoverFeeds.find(f => f.id === id)

  if (!feed) {
    return (
      <div className="error-state">
        <p>Recipe not found</p>
        <button onClick={() => navigate('/discover')}>Back to Discover</button>
      </div>
    )
  }

  return (
    <div className="detail-page">
      {/* HEADER NAVBAR */}
      <div className="detail-nav-header">
        <div className="nav-left" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} color="#00A3FF" strokeWidth={2.5} />
          <span className="nav-title">Discover</span>
        </div>
        <button className="history-btn">
          <History size={24} color="#00A3FF" />
        </button>
      </div>

      <div className="detail-scroll-content">
        {/* HERO IMAGE SECTION */}
        <div className="recipe-hero-card">
          <img src={feed.image} alt={feed.title} className="hero-img" />
          <div className="hero-overlay">
            <h1 className="hero-recipe-title">{feed.title}</h1>
            <div className="source-tag">
              <div className="source-icon">F</div>
              <span>budgetbytes.com</span>
            </div>
          </div>
        </div>

        {/* PRIMARY ACTIONS */}
        <div className="action-row">
          <button 
            className="btn-start" 
            onClick={() => navigate(`/discover/steps/${feed.id}`)}
          >
            <Play size={20} fill="currentColor" />
            <span>Start</span>
          </button>
          <button className="btn-circle blue"><Compass size={22} /></button>
          <button className="btn-circle orange"><ShoppingBasket size={22} /></button>
          <button className="btn-circle purple"><Send size={22} /></button>
        </div>

        {/* STATS CARDS */}
        <div className="stats-grid">
          <div className="stat-card">
            <Users size={24} color="#888" />
            <span className="stat-value">{feed.servings || '10'}</span>
          </div>
          <div className="stat-card stack">
            <Clock size={24} color="#888" />
            <div className="stat-text">
              <span className="stat-label">Prep</span>
              <span className="stat-value">{feed.duration || '1hr, 10min'}</span>
            </div>
          </div>
        </div>

        {/* INGREDIENTS SECTION */}
        <div className="section-header">
          <h2 className="section-title">Ingredients</h2>
          <div className="section-controls">
            <button className="control-btn-text">Scale</button>
            <button className="control-btn-icon"><SlidersHorizontal size={18} /></button>
          </div>
        </div>

        <div className="ingredients-container">
          {feed.ingredients.map((item, i) => {
            // Logic tách số lượng và tên để tô màu giống Figma
            const parts = item.split(' ')
            const quantity = parts[0] + (parts[1] === 'cup' ? ' cup' : '')
            const name = item.replace(quantity, '')
            
            return (
              <div key={i} className="ingredient-row">
                <div className="ing-info">
                  <span className="ing-qty">{quantity}</span>
                  <span className="ing-name">{name}</span>
                </div>
                <span className="ing-price">($0.01)</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* FLOATING SAVE BUTTON */}
      <button className="floating-save-btn" onClick={() => setShowSave(true)}>
        <Download size={20} />
        <span>Save</span>
      </button>

      {showSave && (
        <SaveModal
          feed={feed}
          onClose={() => setShowSave(false)}
        />
      )}
    </div>
  )
}