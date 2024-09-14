import React from 'react'

interface LineDividerProps {
    style: string;
}

export default function LineDivider({ style }: LineDividerProps) {
  return (
    <div className={`bg-custom-divider-gray h-px ${style}`}></div>
  )
}
