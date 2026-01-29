'use client'

import React, { useState } from 'react'

interface FilterTabsProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  label: string
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  label,
}) => {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <span className="text-xs font-bold uppercase py-2 min-w-[80px] opacity-40">{label}:</span>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-1.5 text-sm transition-colors border ${
              selectedCategory === category
                ? 'bg-primary text-white border-primary'
                : 'hover:bg-[#f4f0f0] border-transparent hover:border-[#ddd]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
