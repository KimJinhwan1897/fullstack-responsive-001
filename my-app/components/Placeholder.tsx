'use client';

import { CSSProperties } from 'react';

interface PlaceholderProps {
  text: string;
  width?: number;
  height?: number;
  bgColor?: string;
  textColor?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Placeholder({
  text,
  width = 200,
  height = 150,
  bgColor = '#e2e8f0',
  textColor = '#64748b',
  className = '',
  style = {}
}: PlaceholderProps) {
  const containerStyle: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    backgroundColor: bgColor,
    color: textColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 600,
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    ...style
  };

  return (
    <div className={className} style={containerStyle}>
      {text}
    </div>
  );
} 