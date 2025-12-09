'use client'

import React from 'react'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageBreadcrumbProps {
  pageTitle: string
  breadcrumbs: BreadcrumbItem[]
}

export default function PageBreadcrumb({ pageTitle, breadcrumbs }: PageBreadcrumbProps) {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">{pageTitle}</h2>
      <nav>
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-500 dark:text-brand-400">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
