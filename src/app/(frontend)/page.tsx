import React from 'react'
import { HeroBlock } from '@/blocks/HeroBlock/Component'
import { NewsBlock } from '@/blocks/NewsBlock/Component'
import { ServicesBlock } from '@/blocks/ServicesBlock/Component'
import { StatsBlock } from '@/blocks/StatsBlock/Component'
import { ValuesBlock } from '@/blocks/ValuesBlock/Component'

export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <NewsBlock />
      <ServicesBlock />
      <StatsBlock />
      <ValuesBlock />
    </>
  )
}
