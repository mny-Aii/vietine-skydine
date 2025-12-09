'use client'
import dynamic from 'next/dynamic'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function BarChartPage() {
  const options: ApexCharts.ApexOptions = {
    chart: { type: 'bar', height: 350, toolbar: { show: false }, fontFamily: 'Outfit, sans-serif' },
    colors: ['#465FFF', '#9CB9FF'],
    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 } },
    dataLabels: { enabled: false },
    xaxis: { categories: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gru'] },
    legend: { position: 'top' },
    grid: { borderColor: '#E4E7EC', strokeDashArray: 4 },
    fill: { opacity: 1 },
  }
  const series = [
    { name: 'Pardavimai', data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 72, 78, 85] },
    { name: 'Grazinimai', data: [4, 5, 6, 5, 7, 6, 8, 7, 9, 8, 10, 12] },
  ]

  return (
    <AdminLayout>
      <PageBreadcrumb pageTitle="Stulpeline diagrama" breadcrumbs={[{ label: 'Pradzia', href: '/' }, { label: 'Diagramos' }, { label: 'Stulpeline' }]} />
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">Metiniu pardavimu statistika</h3>
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </AdminLayout>
  )
}