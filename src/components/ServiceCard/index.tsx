import React from 'react'
import Link from 'next/link'
import { ChevronRight, LucideIcon } from 'lucide-react'

export interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: IconComponent, title, description, link }) => {
  return (
    <div className="bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <IconComponent className="text-primary mb-4 block" size={48} />
      <h4 className="text-xl font-bold text-charcoal mb-3">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        href={link}
        className="text-primary flex items-center hover:underline transition-all duration-300"
      >
        详情介绍
        <ChevronRight className="ml-1" size={16} />
      </Link>
    </div>
  )
}
