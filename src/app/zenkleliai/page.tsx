'use client'

import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
import ComponentCard from '@/components/common/ComponentCard'
import Badge from '@/components/ui/Badge'

export default function BadgesPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb
        pageTitle="Zenkleliai"
        breadcrumbs={[
          { label: 'Pradzia', href: '/' },
          { label: 'UI elementai', href: '#' },
          { label: 'Zenkleliai' },
        ]}
      />

      <div className="space-y-6">
        <ComponentCard title="Pagrindiniai zenkleliai" description="Skirtingu spalvu zenkleliai">
          <div className="flex flex-wrap gap-4">
            <Badge variant="primary">Pagrindinis</Badge>
            <Badge variant="success">Sekme</Badge>
            <Badge variant="error">Klaida</Badge>
            <Badge variant="warning">Ispejimas</Badge>
            <Badge variant="info">Informacija</Badge>
            <Badge variant="gray">Pilkas</Badge>
          </div>
        </ComponentCard>

        <ComponentCard title="Zenkleliu dydziai" description="Skirtingu dydziu zenkleliai">
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm" variant="primary">Mazas</Badge>
            <Badge size="md" variant="primary">Vidutinis</Badge>
          </div>
        </ComponentCard>

        <ComponentCard title="Zenkleliai su ikonomis" description="Zenkleliai su SVG ikonomis">
          <div className="flex flex-wrap gap-4">
            <Badge variant="success">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Patvirtinta
            </Badge>
            <Badge variant="error">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Atmesta
            </Badge>
            <Badge variant="warning">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Laukiama
            </Badge>
          </div>
        </ComponentCard>

        <ComponentCard title="Zenkleliai tekste" description="Zenkleliai naudojami sakiniuose">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Jusu paskyros busena: <Badge variant="success">Aktyvi</Badge>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Uzsakymas #1234 yra <Badge variant="warning">Vykdomas</Badge>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Nauja funkcija <Badge variant="primary">Beta</Badge> yra prieinama
            </p>
          </div>
        </ComponentCard>
      </div>
    </AdminLayout>
  )
}
