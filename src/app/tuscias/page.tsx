'use client'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
export default function BlankPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb pageTitle="Tuscias puslapis" breadcrumbs={[{ label: 'Pradzia', href: '/' }, { label: 'Tuscias puslapis' }]} />
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] min-h-[400px] flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Cia galite prideti savo turini</p>
      </div>
    </AdminLayout>
  )
}