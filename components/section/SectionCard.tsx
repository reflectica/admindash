import React from 'react'

interface SectionCardProps {
  title: string;
  containerStyle?: string;
  children: React.ReactNode;
}

export default function SectionCard({ title, containerStyle, children }: SectionCardProps) {
  return (
    <div className={containerStyle}>
      <p className="font-extrabold text-sm leading-3 text-black my-2">{title}</p>
      <div className='bg-white shadow rounded-lg p-4 gap-5 flex flex-col'>
        <div className="overflow-hidden flex flex-col gap-2">
          {children}
        </div>
      </div>
    </div>
  )
}
