import React from 'react';

const MosqueIcon = ({ size = 24, className = "", fill = "none" }: { size?: number, className?: string, fill?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={fill} 
    stroke="currentColor" 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Main Building Body */}
    <path d="M4 14h12v7H4z" />
    
    {/* Central Dome */}
    <path d="M6 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M12 6v2" />
    <circle cx="12" cy="5" r="1" />
    
    {/* Tall Minaret (Classic Style) */}
    <path d="M18 21V6h3v15" />
    <path d="M17.5 6h4" />
    <path d="M17.5 10h4" />
    <path d="M17.5 14h4" />
    <path d="M18.5 4h2" />
    <path d="M19.5 2v2" />
    
    {/* Entrance Arch */}
    <path d="M8 21v-3a2 2 0 0 1 4 0v3" />
    
    {/* Windows */}
    <path d="M6 16h2" />
    <path d="M12 16h2" />
    
    {/* Base Line */}
    <path d="M2 21h20" />
  </svg>
);

export default MosqueIcon;
