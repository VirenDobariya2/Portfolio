import React from 'react'
import './SkillCardone.css'

const SkillCardone = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
    className={`skills-card ${isActive ? "active" : ""}`}
    onClick={() => onClick()}
  >
    <div className="skills-icon">
      <img src={iconUrl} alt={title} />
    </div>
    <span>{title}</span>
  </div>
  )
}

export default SkillCardone
