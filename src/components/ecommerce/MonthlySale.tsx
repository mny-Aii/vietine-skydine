'use client'

import React, { useState, useMemo } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { lt } from 'date-fns/locale'
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, eachDayOfInterval, eachWeekOfInterval, eachMonthOfInterval } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('lt', lt)

type ViewType = 'diena' | 'savaite' | 'menuo' | 'metai'

// Simuliuoti duomenys pagal datą
const generateData = (viewType: ViewType, date: Date) => {
  const baseValue = 50
  const randomFactor = () => Math.floor(Math.random() * 50) + 20

  switch (viewType) {
    case 'diena':
      // 24 valandos
      return Array.from({ length: 24 }, (_, i) => ({
        label: `${i}:00`,
        value: baseValue + randomFactor(),
      }))
    case 'savaite':
      // 7 dienos
      const weekStart = startOfWeek(date, { weekStartsOn: 1 })
      const weekEnd = endOfWeek(date, { weekStartsOn: 1 })
      const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd })
      return weekDays.map((d) => ({
        label: format(d, 'EEE', { locale: lt }).slice(0, 2).toUpperCase(),
        value: baseValue + randomFactor(),
      }))
    case 'menuo':
      // Savaitės per mėnesį
      const monthStart = startOfMonth(date)
      const monthEnd = endOfMonth(date)
      const weeks = eachWeekOfInterval({ start: monthStart, end: monthEnd }, { weekStartsOn: 1 })
      return weeks.map((w, i) => ({
        label: `${i + 1} sav.`,
        value: baseValue + randomFactor(),
      }))
    case 'metai':
      // 12 mėnesių
      const yearStart = startOfYear(date)
      const yearEnd = endOfYear(date)
      const months = eachMonthOfInterval({ start: yearStart, end: yearEnd })
      return months.map((m) => ({
        label: format(m, 'MMM', { locale: lt }).slice(0, 3),
        value: baseValue + randomFactor(),
      }))
    default:
      return []
  }
}

export default function MonthlySale() {
  const [viewType, setViewType] = useState<ViewType>('savaite')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const saleData = useMemo(() => generateData(viewType, selectedDate), [viewType, selectedDate])
  const maxValue = Math.max(...saleData.map((d) => d.value))
  const totalSales = saleData.reduce((sum, d) => sum + d.value * 100, 0)

  const getDatePickerConfig = () => {
    switch (viewType) {
      case 'diena':
        return { showMonthYearPicker: false, showYearPicker: false, dateFormat: 'yyyy-MM-dd' }
      case 'savaite':
        return { showMonthYearPicker: false, showYearPicker: false, dateFormat: 'yyyy-MM-dd' }
      case 'menuo':
        return { showMonthYearPicker: true, showYearPicker: false, dateFormat: 'yyyy MMMM' }
      case 'metai':
        return { showMonthYearPicker: false, showYearPicker: true, dateFormat: 'yyyy' }
      default:
        return { showMonthYearPicker: false, showYearPicker: false, dateFormat: 'yyyy-MM-dd' }
    }
  }

  const datePickerConfig = getDatePickerConfig()

  const getViewLabel = () => {
    switch (viewType) {
      case 'diena':
        return format(selectedDate, 'yyyy-MM-dd', { locale: lt })
      case 'savaite':
        const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 })
        const weekEnd = endOfWeek(selectedDate, { weekStartsOn: 1 })
        return `${format(weekStart, 'MM-dd')} - ${format(weekEnd, 'MM-dd')}`
      case 'menuo':
        return format(selectedDate, 'yyyy MMMM', { locale: lt })
      case 'metai':
        return format(selectedDate, 'yyyy', { locale: lt })
      default:
        return ''
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-full">
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Pardavimu statistika
          </h3>
          <p className="mt-1 text-gray-700 text-theme-sm dark:text-gray-300">
            {getViewLabel()}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Periodo pasirinkimas */}
          <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {(['diena', 'savaite', 'menuo', 'metai'] as ViewType[]).map((type) => (
              <button
                key={type}
                onClick={() => setViewType(type)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  viewType === type
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Kalendorius */}
          <div className="relative">
            <button
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Pasirinkti data</span>
            </button>
            {isCalendarOpen && (
              <div className="absolute right-0 top-full mt-2 z-50">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => {
                    if (date) {
                      setSelectedDate(date)
                      setIsCalendarOpen(false)
                    }
                  }}
                  locale="lt"
                  inline
                  showMonthYearPicker={datePickerConfig.showMonthYearPicker}
                  showYearPicker={datePickerConfig.showYearPicker}
                  calendarClassName="!bg-white dark:!bg-gray-800 !border-gray-200 dark:!border-gray-700 !rounded-lg !shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Diagramos plotas */}
      <div className="flex items-end justify-between h-64 gap-1 sm:gap-2 overflow-x-auto pb-2">
        {saleData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 min-w-[20px]">
            <div className="relative w-full group">
              <div
                className="w-full rounded-t-lg bg-brand-500 transition-all duration-300 hover:bg-brand-600 cursor-pointer"
                style={{ height: `${(item.value / maxValue) * 100}%`, minHeight: '4px' }}
              ></div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                €{(item.value * 100).toLocaleString()}
              </div>
            </div>
            <span className="mt-2 text-gray-700 text-[10px] sm:text-xs dark:text-gray-300 truncate max-w-full">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200 dark:border-gray-800">
        <div>
          <span className="text-gray-700 text-theme-sm dark:text-gray-300">Viso pardavimu</span>
          <h4 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">€{totalSales.toLocaleString()}</h4>
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
