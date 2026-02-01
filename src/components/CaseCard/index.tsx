import React from 'react'
import { Building2 } from 'lucide-react'

export interface CaseCardProps {
  title: string
  client: string
  date: string
  category: string
  description: string
  tags: string[]
}

export const CaseCard: React.FC<CaseCardProps> = ({
  title,
  client,
  date,
  category,
  description,
  tags,
}) => {
  return (
    <div className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <span className="bg-primary text-white px-3 py-1 text-sm font-semibold">{category}</span>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>

      <h3 className="text-2xl font-bold text-charcoal mb-3 hover:text-primary transition-colors duration-300 cursor-pointer">
        {title}
      </h3>

      <div className="flex items-center text-gray-700 mb-4">
        <Building2 className="mr-2 text-primary" size={20} />
        <span>{client}</span>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
