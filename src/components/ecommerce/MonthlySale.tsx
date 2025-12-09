'use client'

import React, { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'
import DatePicker, { registerLocale } from 'react-datepicker'
import { lt } from 'date-fns/locale'
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, eachDayOfInterval, eachWeekOfInterval, eachMonthOfInterval } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

registerLocale('lt', lt)

type ViewType = 'diena' | 'savaite' | 'menuo' | 'metai'
type ChartType = 'bar' | 'area' | 'line'

// Generuoti duomenis su seed pagal datą (kad būtų nuoseklūs)
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const generateData = (viewType: ViewType, date: Date) => {
  const dateSeed = date.getTime()

  switch (viewType) {
    case 'diena':
      return Array.from({ length: 24 }, (_, i) => ({
        label: `${i.toString().padStart(2, '0')}:00`,
        pardavimai: Math.floor(seededRandom(dateSeed + i) * 80 + 20),
        grazinimai: Math.floor(seededRandom(dateSeed + i + 100) * 15 + 2),
      }))
    case 'savaite':
      const weekStart = startOfWeek(date, { weekStartsOn: 1 })
      const weekEnd = endOfWeek(date, { weekStartsOn: 1 })
      const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd })
      return weekDays.map((d, i) => ({
        label: format(d, 'EEEE', { locale: lt }),
        pardavimai: Math.floor(seededRandom(dateSeed + i * 7) * 100 + 40),
        grazinimai: Math.floor(seededRandom(dateSeed + i * 7 + 100) * 20 + 5),
      }))
    case 'menuo':
      const monthStart = startOfMonth(date)
      const monthEnd = endOfMonth(date)
      const weeks = eachWeekOfInterval({ start: monthStart, end: monthEnd }, { weekStartsOn: 1 })
      return weeks.map((w, i) => ({
        label: `${i + 1} savaitė`,
        pardavimai: Math.floor(seededRandom(dateSeed + i * 30) * 200 + 100),
        grazinimai: Math.floor(seededRandom(dateSeed + i * 30 + 100) * 40 + 10),
      }))
    case 'metai':
      const yearStart = startOfYear(date)
      const yearEnd = endOfYear(date)
      const months = eachMonthOfInterval({ start: yearStart, end: yearEnd })
      return months.map((m, i) => ({
        label: format(m, 'LLLL', { locale: lt }),
        pardavimai: Math.floor(seededRandom(dateSeed + i * 365) * 500 + 200),
        grazinimai: Math.floor(seededRandom(dateSeed + i * 365 + 100) * 80 + 20),
      }))
    default:
      return []
  }
}

export default function MonthlySale() {
  const [viewType, setViewType] = useState<ViewType>('savaite')
  const [chartType, setChartType] = useState<ChartType>('bar')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const saleData = useMemo(() => generateData(viewType, selectedDate), [viewType, selectedDate])
  const totalSales = saleData.reduce((sum, d) => sum + d.pardavimai * 100, 0)
  const totalReturns = saleData.reduce((sum, d) => sum + d.grazinimai * 100, 0)
  const growthPercent = ((totalSales - totalReturns) / totalSales * 100).toFixed(1)

  const getDatePickerConfig = () => {
    switch (viewType) {
      case 'diena':
        return { showMonthYearPicker: false, showYearPicker: false }
      case 'savaite':
        return { showMonthYearPicker: false, showYearPicker: false }
      case 'menuo':
        return { showMonthYearPicker: true, showYearPicker: false }
      case 'metai':
        return { showMonthYearPicker: false, showYearPicker: true }
      default:
        return { showMonthYearPicker: false, showYearPicker: false }
    }
  }

  const datePickerConfig = getDatePickerConfig()

  const getViewLabel = () => {
    switch (viewType) {
      case 'diena':
        return format(selectedDate, 'yyyy m. MMMM d d.', { locale: lt })
      case 'savaite':
        const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 })
        const weekEnd = endOfWeek(selectedDate, { weekStartsOn: 1 })
        return `${format(weekStart, 'MMM d', { locale: lt })} - ${format(weekEnd, 'MMM d', { locale: lt })}`
      case 'menuo':
        return format(selectedDate, 'yyyy m. LLLL', { locale: lt })
      case 'metai':
        return format(selectedDate, 'yyyy m.', { locale: lt })
      default:
        return ''
    }
  }

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: chartType,
      height: 320,
      toolbar: { show: true, tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true } },
      fontFamily: 'Outfit, sans-serif',
      animations: {
        enabled: true,
        speed: 500,
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      zoom: { enabled: true },
    },
    colors: ['#465FFF', '#F97316'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 6,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: chartType === 'bar' ? 0 : 3,
    },
    fill: {
      type: chartType === 'area' ? 'gradient' : 'solid',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: saleData.map(d => d.label),
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#667085', fontSize: '11px' },
        rotate: -45,
        rotateAlways: saleData.length > 10,
      },
    },
    yaxis: {
      labels: {
        style: { colors: '#667085', fontSize: '12px' },
        formatter: (value: number) => `€${value}`,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      markers: { size: 6, shape: 'circle' },
    },
    grid: {
      borderColor: '#E4E7EC',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (value: number) => `€${(value * 100).toLocaleString()}`,
      },
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: { height: 280 },
          xaxis: { labels: { rotate: -60, style: { fontSize: '9px' } } },
        },
      },
    ],
  }

  const series = [
    { name: 'Pardavimai', data: saleData.map(d => d.pardavimai) },
    { name: 'Grąžinimai', data: saleData.map(d => d.grazinimai) },
  ]

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-full">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Pardavimų statistika
            </h3>
            <p className="mt-1 text-gray-700 text-theme-sm dark:text-gray-300">
              {getViewLabel()}
            </p>
          </div>

          {/* Kalendorius */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Pasirinkti datą
            </button>
            {isCalendarOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsCalendarOpen(false)} />
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
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Kontrolės */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Periodo pasirinkimas */}
          <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {(['diena', 'savaite', 'menuo', 'metai'] as ViewType[]).map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setViewType(type)}
                className={`px-3 py-2 text-xs font-medium transition-colors ${
                  viewType === type
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Diagramos tipo pasirinkimas */}
          <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              type="button"
              onClick={() => setChartType('bar')}
              className={`px-3 py-2 text-xs font-medium transition-colors flex items-center gap-1 ${
                chartType === 'bar'
                  ? 'bg-brand-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              Stulpeliai
            </button>
            <button
              type="button"
              onClick={() => setChartType('area')}
              className={`px-3 py-2 text-xs font-medium transition-colors flex items-center gap-1 ${
                chartType === 'area'
                  ? 'bg-brand-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Plotas
            </button>
            <button
              type="button"
              onClick={() => setChartType('line')}
              className={`px-3 py-2 text-xs font-medium transition-colors flex items-center gap-1 ${
                chartType === 'line'
                  ? 'bg-brand-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              Linija
            </button>
          </div>
        </div>
      </div>

      {/* Diagrama */}
      <div className="mt-4">
        {mounted && (
          <Chart options={chartOptions} series={series} type={chartType} height={320} />
        )}
      </div>

      {/* Suvestinė */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
        <div>
          <span className="text-gray-700 text-theme-sm dark:text-gray-300">Viso pardavimų</span>
          <h4 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">€{totalSales.toLocaleString()}</h4>
        </div>
        <div>
          <span className="text-gray-700 text-theme-sm dark:text-gray-300">Grąžinimai</span>
          <h4 className="mt-1 text-xl font-bold text-orange-500">€{totalReturns.toLocaleString()}</h4>
        </div>
        <div className="col-span-2 sm:col-span-1 flex sm:justify-end items-center">
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-success-50 text-success-600 text-sm font-medium dark:bg-success-500/15 dark:text-success-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            +{growthPercent}% pelnas
          </span>
        </div>
      </div>
    </div>
  )
}
