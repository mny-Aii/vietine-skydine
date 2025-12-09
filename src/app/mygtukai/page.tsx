'use client'

import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
import ComponentCard from '@/components/common/ComponentCard'
import Button from '@/components/ui/Button'

export default function ButtonsPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb
        pageTitle="Mygtukai"
        breadcrumbs={[
          { label: 'Pradzia', href: '/' },
          { label: 'UI elementai', href: '#' },
          { label: 'Mygtukai' },
        ]}
      />

      <div className="space-y-6">
        <ComponentCard title="Pagrindinis mygtukas" description="Pagrindinis stilius mygtukams">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Pagrindinis</Button>
            <Button variant="secondary">Antrinis</Button>
            <Button variant="outline">Konturas</Button>
            <Button variant="ghost">Skaidrus</Button>
            <Button variant="danger">Pavojus</Button>
          </div>
        </ComponentCard>

        <ComponentCard title="Mygtuku dydziai" description="Skirtingi mygtuku dydziai">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Mazas</Button>
            <Button size="md">Vidutinis</Button>
            <Button size="lg">Didelis</Button>
          </div>
        </ComponentCard>

        <ComponentCard title="Isungti mygtukai" description="Mygtukai neaktyviu busenoje">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>Isjungtas</Button>
            <Button variant="secondary" disabled>Isjungtas</Button>
            <Button variant="outline" disabled>Isjungtas</Button>
          </div>
        </ComponentCard>

        <ComponentCard title="Kraunami mygtukai" description="Mygtukai su krovimo animacija">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" loading>Kraunama...</Button>
            <Button variant="secondary" loading>Kraunama...</Button>
          </div>
        </ComponentCard>

        <ComponentCard title="Mygtukai su ikonomis" description="Mygtukai su SVG ikonomis">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Prideti
            </Button>
            <Button variant="outline">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Ikelti
            </Button>
            <Button variant="danger">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Istrinti
            </Button>
          </div>
        </ComponentCard>
      </div>
    </AdminLayout>
  )
}
