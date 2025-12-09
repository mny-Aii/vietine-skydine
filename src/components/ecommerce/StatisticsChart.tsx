'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Period = 'week' | 'month' | 'year'

interface DataSet {
  categories: string[]
  income: number[]
  expenses: number[]
  description: string
}

const periodData: Record<Period, DataSet> = {
  week: {
    categories: ['Pir', 'Ant', 'Tre', 'Ket', 'Pen', 'Ses', 'Sek'],
    income: [4.2, 5.1, 3.8, 6.2, 5.5, 7.8, 4.9],
    expenses: [2.8, 3.2, 2.5, 4.1, 3.8, 5.2, 3.1],
    description: 'Savaites pajamu ir islainiu apzvalga',
  },
  month: {
    categories: ['1 sav', '2 sav', '3 sav', '4 sav'],
    income: [18.5, 22.3, 19.8, 25.4],
    expenses: [12.2, 15.1, 13.5, 17.8],
    description: 'Menesio pajamu ir islainiu apzvalga',
  },
  year: {
    categories: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gru'],
    income: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 100, 110],
    expenses: [20, 30, 25, 40, 39, 50, 60, 71, 65, 75, 80, 90],
    description: 'Metiniu pajamu ir islainiu apzvalga',
  },
}

export default function StatisticsChart() {
  const [activePeriod, setActivePeriod] = useState<Period>('year')

  const currentData = periodData[activePeriod]

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
      fontFamily: 'Outfit, sans-serif',
    },
    colors: ['#465FFF', '#9CB9FF'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      categories: currentData.categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#667085',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#667085',
          fontSize: '12px',
        },
        formatter: (value: number) => `$${value}k`,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      markers: {
        size: 6,
        shape: 'circle',
      },
    },
    grid: {
      borderColor: '#E4E7EC',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: 'light',
    },
  }

  const series = [
    {
      name: 'Pajamos',
      data: currentData.income,
    },
    {
      name: 'Islaidos',
      data: currentData.expenses,
    },
  ]

  const getButtonClass = (period: Period) => {
    if (period === activePeriod) {
      return 'px-4 py-2 text-sm font-medium text-white rounded-lg bg-brand-500 hover:bg-brand-600'
    }
    return 'px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Statistika</h3>
          <p className="mt-1 text-gray-700 text-theme-sm dark:text-gray-300">
            {currentData.description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className={getButtonClass('week')}
            onClick={() => setActivePeriod('week')}
          >
            Savaite
          </button>
          <button
            className={getButtonClass('month')}
            onClick={() => setActivePeriod('month')}
          >
            Menuo
          </button>
          <button
            className={getButtonClass('year')}
            onClick={() => setActivePeriod('year')}
          >
            Metai
          </button>
        </div>
      </div>

      <Chart options={options} series={series} type="area" height={350} />
    </div>
  )
}
