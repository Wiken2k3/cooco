import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { 
  X, 
  List, 
  EyeOff, 
  History, 
  Plus, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react'
import { discoverFeeds } from '../../data/discoverFeeds'
import './DiscoverSteps.css'

export default function DiscoverSteps() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)

  const feed = discoverFeeds.find(f => f.id === id)

  if (!feed) {
    navigate('/discover')
    return null
  }

  const steps = feed.steps || []
  const totalSteps = steps.length

  // Hàm để highlight các từ quan trọng (giống Figma)
  const formatStepText = (text) => {
    // Đây là ví dụ, bạn có thể bổ sung logic regex để highlight tự động các nguyên liệu
    const highlights = ["dates", "pitted", "Medjool date", "chunky peanut butter", "walnuts", "ground cinnamon", "sea salt", "quick rolled oats", "honey", "dark chocolate chips"]
    
    let formattedText = text
    highlights.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi')
      formattedText = formattedText.replace(regex, `<span class="highlight">$1</span>`)
    })
    
    return <p dangerouslySetInnerHTML={{ __html: formattedText }} />
  }

  return (
    <div className="steps-screen-overlay">
      {/* HEADER ACTIONS */}
      <header className="steps-header">
        <button className="close-btn" onClick={() => navigate(-1)}>
          <X size={28} strokeWidth={1.5} />
        </button>
        
        <div className="header-right-group">
          <button className="icon-action-btn"><List size={24} /></button>
          <button className="icon-action-btn"><EyeOff size={24} /></button>
          <button className="icon-action-btn"><History size={24} /></button>
          <button className="icon-action-btn"><Plus size={24} /></button>
        </div>
      </header>

      {/* CONTENT AREA */}
      <main className="steps-main-content">
        <div className="step-label">Step {currentStep + 1}</div>
        <div className="step-instruction">
          {formatStepText(steps[currentStep])}
        </div>
      </main>

      {/* NAVIGATION FOOTER */}
      <footer className="steps-footer">
        {currentStep > 0 && (
          <button 
            className="nav-circle-btn prev" 
            onClick={() => setCurrentStep(prev => prev - 1)}
          >
            <ArrowLeft size={32} color="white" strokeWidth={2.5} />
          </button>
        )}

        <div className="step-indicators">
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${index === currentStep ? 'active' : ''}`} 
            />
          ))}
        </div>

        {currentStep < totalSteps - 1 && (
          <button 
            className="nav-circle-btn next" 
            onClick={() => setCurrentStep(prev => prev + 1)}
          >
            <ArrowRight size={32} color="white" strokeWidth={2.5} />
          </button>
        )}
      </footer>
    </div>
  )
}