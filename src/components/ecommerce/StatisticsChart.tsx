'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function StatisticsChart() {
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
      categories: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gru'],
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
      data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 100, 110],
    },
    {
      name: 'Islaidos',
      data: [20, 30, 25, 40, 39, 50, 60, 71, 65, 75, 80, 90],
    },
  ]

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Statistika</h3>
          <p className="mt-1 text-gray-700 text-theme-sm dark:text-gray-300">
            Metiniu pajamu ir islainiu apzvalga
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
            Savaite
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-brand-500 hover:bg-brand-600">
            Menuo
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
            Metai
          </button>
        </div>
      </div>

      <Chart options={options} series={series} type="area" height={350} />
    </div>
  )
}
