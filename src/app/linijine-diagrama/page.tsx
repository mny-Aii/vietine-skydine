'use client'
import dynamic from 'next/dynamic'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function LineChartPage() {
  const options: ApexCharts.ApexOptions = {
    chart: { type: 'line', height: 350, toolbar: { show: false }, fontFamily: 'Outfit, sans-serif' },
    colors: ['#465FFF', '#10B981'],
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gru'] },
    legend: { position: 'top' },
    grid: { borderColor: '#E4E7EC', strokeDashArray: 4 },
  }
  const series = [
    { name: 'Pajamos', data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 100, 110] },
    { name: 'Islaidos', data: [20, 30, 25, 40, 39, 50, 60, 71, 65, 75, 80, 90] },
  ]

  return (
    <AdminLayout>
      <PageBreadcrumb pageTitle="Linijine diagrama" breadcrumbs={[{ label: 'Pradzia', href: '/' }, { label: 'Diagramos' }, { label: 'Linijine' }]} />
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">Metiniu pajamu apzvalga</h3>
        <Chart options={options} series={series} type="line" height={350} />
      </div>
    </AdminLayout>
  )
}