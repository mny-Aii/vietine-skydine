'use client'

import React from 'react'

export default function MonthlySale() {
  const saleData = [
    { day: 'Pr', value: 40 },
    { day: 'An', value: 65 },
    { day: 'Tr', value: 45 },
    { day: 'Kt', value: 80 },
    { day: 'Pn', value: 55 },
    { day: 'Se', value: 90 },
    { day: 'Sk', value: 70 },
  ]

  const maxValue = Math.max(...saleData.map((d) => d.value))

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Menesio pardavimai
          </h3>
          <p className="mt-1 text-gray-700 text-theme-sm dark:text-gray-300">
            Savaitinis pardavimu apzvalga
          </p>
        </div>
        <select className="px-3 py-2 text-sm border border-gray-200 rounded-lg dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
          <option>Savaite</option>
          <option>Menuo</option>
          <option>Metai</option>
        </select>
      </div>

      <div className="flex items-end justify-between h-64 gap-4">
        {saleData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full rounded-t-lg bg-brand-500 transition-all duration-300 hover:bg-brand-600"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <span className="mt-2 text-gray-700 text-theme-xs dark:text-gray-300">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200 dark:border-gray-800">
        <div>
          <span className="text-gray-700 text-theme-sm dark:text-gray-300">Viso pardavimu</span>
          <h4 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">$48,574</h4>
        </div>
        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-success-50 text-success-600 text-sm font-medium dark:bg-success-500/15 dark:text-success-500">
          <svg
            className="fill-current"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.56462 1.62393C5.70193 1.47072 5.90135 1.37432 6.12329 1.37432C6.1236 1.37432 6.12391 1.37432 6.12422 1.37432C6.31631 1.37415 6.50845 1.44731 6.65505 1.59381L9.65514 4.5918C9.94814 4.88459 9.94831 5.35947 9.65552 5.65246C9.36273 5.94546 8.88785 5.94562 8.59486 5.65283L6.87329 3.93247L6.87329 10.125C6.87329 10.5392 6.53751 10.875 6.12329 10.875C5.70908 10.875 5.37329 10.5392 5.37329 10.125L5.37329 3.93578L3.65516 5.65282C3.36218 5.94562 2.8873 5.94547 2.5945 5.65248C2.3017 5.35949 2.30185 4.88462 2.59484 4.59182L5.56462 1.62393Z"
              fill=""
            />
          </svg>
          +12.5%
        </span>
      </div>
    </div>
  )
}
