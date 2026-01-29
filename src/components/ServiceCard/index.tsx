import React from 'react'
import Link from 'next/link'

export interface ServiceCardProps {
  icon: string
  title: string
  description: string
  link: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <span className="material-symbols-outlined text-primary text-5xl mb-4 block">{icon}</span>
      <h4 className="text-xl font-bold text-charcoal mb-3">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        href={link}
        className="text-primary flex items-center hover:underline transition-all duration-300"
      >
        详情介绍
        <span className="material-symbols-outlined ml-1">chevron_right</span>
      </Link>
    </div>
  )
}
