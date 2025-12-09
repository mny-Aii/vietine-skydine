'use client'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
export default function VideosPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb pageTitle="Vaizdo irasai" breadcrumbs={[{ label: 'Pradzia', href: '/' }, { label: 'UI elementai' }, { label: 'Vaizdo irasai' }]} />
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">YouTube vaizdo irasas</h3>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowFullScreen />
        </div>
      </div>
    </AdminLayout>
  )
}