'use client'

import React from 'react'
import { useSidebar } from '@/context/SidebarContext'
import Header from './Header'
import Sidebar from './Sidebar'
import Backdrop from './Backdrop'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { isExpanded, isHovered } = useSidebar()

  return (
    <div className="min-h-screen xl:flex">
      <Sidebar />
      <Backdrop />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]'
        }`}
      >
        <Header />
        <div className="p-4 mx-auto max-w-[1536px] md:p-6">{children}</div>
        <footer className="p-4 mx-auto max-w-[1536px] md:p-6 pt-0">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Sukurta{' '}
            <a
              href="#"
              className="text-brand-500 hover:text-brand-600 transition-colors duration-200 font-medium"
            >
              IT Sanchajus
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
