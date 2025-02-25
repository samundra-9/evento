import { cn } from '@/lib/utils'
import React from 'react'

export default function H1({children,className}: {children: React.ReactNode, className?: string}) {
  return (
    <h1 className={cn("text-3xl font-bold tracking-tight lg:text-6xl",className)} >{children}</h1>

  )
}
