'use client'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
export default function CalendarPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb pageTitle="Kalendorius" breadcrumbs={[{ label: 'Pradzia', href: '/' }, { label: 'Kalendorius' }]} />
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="text-center py-20"><p className="text-gray-500 dark:text-gray-400">Kalendoriaus komponentas (reikia FullCalendar bibliotekos)</p></div>
      </div>
    </AdminLayout>
  )
}