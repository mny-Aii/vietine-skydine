'use client'

import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { SunIcon, MoonIcon } from '@/icons'

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    >
      {theme === 'dark' ? (
        <SunIcon className="fill-current" />
      ) : (
        <MoonIcon className="fill-current" />
      )}
    </button>
  )
}
