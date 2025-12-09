'use client'

import React from 'react'

interface ComponentCardProps {
  title: string
  children: React.ReactNode
  description?: string
}

export default function ComponentCard({ title, children, description }: ComponentCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="p-5 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">{title}</h3>
        {description && (
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">{description}</p>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}
