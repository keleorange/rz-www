import React from 'react'

export interface NewsCardProps {
  category: string
  date: string
  title: string
  description: string
}

export const NewsCard: React.FC<NewsCardProps> = ({ category, date, title, description }) => {
  return (
    <div className="border-b pb-6 hover:bg-gray-50 transition-colors duration-300 p-4">
      <p className="text-gray-500 text-sm mb-2">
        {category} • {date}
      </p>
      <h4 className="text-xl font-bold text-charcoal mb-2 hover:text-primary transition-colors duration-300 cursor-pointer">
        {title}
      </h4>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
