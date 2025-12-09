'use client'

import React from 'react'

export default function MonthlyTarget() {
  const targetPercent = 75.55
  const targetAmount = 12546
  const totalTarget = 20000

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Menesio tikslas</h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Tikslas tu pasiekti sio menesio
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="block w-3 h-3 rounded-full bg-brand-500"></span>
          <span className="text-gray-500 text-theme-sm dark:text-gray-400">Pardavimai</span>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="flex items-center justify-center">
          <div className="relative">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="16"
                fill="none"
                className="text-gray-100 dark:text-gray-800"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="16"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 88}`}
                strokeDashoffset={`${2 * Math.PI * 88 * (1 - targetPercent / 100)}`}
                strokeLinecap="round"
                className="text-brand-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-800 dark:text-white/90">
                {targetPercent}%
              </span>
              <span className="text-gray-500 text-theme-sm dark:text-gray-400">Pasiekta</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-theme-sm dark:text-gray-400">Tikslas pasiektas</span>
          <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
            ${targetAmount.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-theme-sm dark:text-gray-400">Sio menesio tikslas</span>
          <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
            ${totalTarget.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}
