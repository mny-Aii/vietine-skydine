'use client'

import React from 'react'

interface CountryData {
  country: string
  flag: string
  customers: number
  percent: number
}

const countryData: CountryData[] = [
  { country: 'Lietuva', flag: '🇱🇹', customers: 1250, percent: 35 },
  { country: 'Latvija', flag: '🇱🇻', customers: 890, percent: 25 },
  { country: 'Estija', flag: '🇪🇪', customers: 720, percent: 20 },
  { country: 'Lenkija', flag: '🇵🇱', customers: 450, percent: 12 },
  { country: 'Kitos', flag: '🌍', customers: 290, percent: 8 },
]

export default function CustomerDemographic() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Klientu demografija
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Klientu pasiskirstymas pagal salis
        </p>
      </div>

      <div className="space-y-4">
        {countryData.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-2xl">{item.flag}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {item.country}
                </span>
                <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                  {item.customers.toLocaleString()} klientu
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-800">
                <div
                  className="h-full rounded-full bg-brand-500"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
            <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {item.percent}%
            </span>
          </div>
        ))}
      </div>

      <div className="pt-4 mt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-theme-sm dark:text-gray-400">Viso klientu</span>
          <span className="font-semibold text-gray-800 dark:text-white/90">
            {countryData.reduce((acc, item) => acc + item.customers, 0).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}
