'use client'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
export default function FormElementsPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb pageTitle="Formos elementai" breadcrumbs={[{ label: 'Pradzia', href: '/' }, { label: 'Formos elementai' }]} />
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] space-y-5">
        <div><label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Vardas</label><input type="text" placeholder="Iveskite varda" className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" /></div>
        <div><label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">El. pastas</label><input type="email" placeholder="info@pav.lt" className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" /></div>
        <div><label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Zinute</label><textarea rows={4} placeholder="Jusu zinute..." className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" /></div>
        <button className="px-6 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 hover:bg-brand-600">Siusti</button>
      </div>
    </AdminLayout>
  )
}