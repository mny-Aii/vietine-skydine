'use client'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
const data = [
  { id: 1, vardas: 'Jonas Jonaitis', pastas: 'jonas@pav.lt', busena: 'Aktyvus' },
  { id: 2, vardas: 'Ona Petrauskiene', pastas: 'ona@pav.lt', busena: 'Aktyvus' },
  { id: 3, vardas: 'Petras Kazlauskas', pastas: 'petras@pav.lt', busena: 'Neaktyvus' },
]
export default function BasicTablesPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb pageTitle="Paprasta lentele" breadcrumbs={[{ label: 'Pradzia', href: '/' }, { label: 'Lenteles' }]} />
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800"><tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Nr.</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Vardas</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">El. pastas</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">Busena</th>
          </tr></thead>
          <tbody>{data.map(r => <tr key={r.id} className="border-t border-gray-200 dark:border-gray-800">
            <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{r.id}</td>
            <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">{r.vardas}</td>
            <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">{r.pastas}</td>
            <td className="px-4 py-4"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${r.busena === 'Aktyvus' ? 'bg-success-50 text-success-600' : 'bg-error-50 text-error-600'}`}>{r.busena}</span></td>
          </tr>)}</tbody>
        </table>
      </div>
    </AdminLayout>
  )
}