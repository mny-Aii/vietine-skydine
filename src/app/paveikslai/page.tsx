'use client'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
export default function ImagesPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb pageTitle="Paveikslai" breadcrumbs={[{ label: 'Pradzia', href: '/' }, { label: 'UI elementai' }, { label: 'Paveikslai' }]} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white overflow-hidden dark:border-gray-800 dark:bg-white/[0.03]">
            <img src={`/images/grid-image/image-0${i > 6 ? 1 : i}.png`} alt={`Paveikslas ${i}`} className="w-full h-48 object-cover" />
            <div className="p-4"><p className="text-sm text-gray-600 dark:text-gray-400">Paveikslas {i}</p></div>
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}