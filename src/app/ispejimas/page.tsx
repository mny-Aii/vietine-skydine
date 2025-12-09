'use client'

import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
import ComponentCard from '@/components/common/ComponentCard'
import Alert from '@/components/ui/Alert'

export default function AlertsPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb
        pageTitle="Ispejimas"
        breadcrumbs={[
          { label: 'Pradzia', href: '/' },
          { label: 'UI elementai', href: '#' },
          { label: 'Ispejimas' },
        ]}
      />

      <div className="space-y-6">
        <ComponentCard title="Sekmes ispejimas" description="Naudokite pranesti apie sekme">
          <Alert
            type="success"
            title="Sekmingai atlikta!"
            message="Jusu pakeitimai buvo issaugoti sekmingai."
          />
        </ComponentCard>

        <ComponentCard title="Klaidos ispejimas" description="Naudokite pranesti apie klaida">
          <Alert
            type="error"
            title="Ivyko klaida!"
            message="Kazkas nutiko ne taip. Bandykite dar karta."
          />
        </ComponentCard>

        <ComponentCard title="Ispejimo pranesimas" description="Naudokite ispeti vartotoja">
          <Alert
            type="warning"
            title="Demesio!"
            message="Jusu sesija greitai baigsis. Issaugokite savo darba."
          />
        </ComponentCard>

        <ComponentCard title="Informacinis pranesimas" description="Naudokite pateikti informacija">
          <Alert
            type="info"
            title="Informacija"
            message="Nauja versija yra prieinama. Atnaujinkite kad gautumet naujausias funkcijas."
          />
        </ComponentCard>

        <ComponentCard title="Ispejimai su uzdarymo mygtuku" description="Ispejimai kuriuos galima uzdaryti">
          <div className="space-y-4">
            <Alert
              type="success"
              title="Sekmingai atlikta!"
              message="Jusu pakeitimai buvo issaugoti sekmingai."
              onClose={() => console.log('Uzdarytas')}
            />
            <Alert
              type="error"
              title="Ivyko klaida!"
              message="Kazkas nutiko ne taip. Bandykite dar karta."
              onClose={() => console.log('Uzdarytas')}
            />
          </div>
        </ComponentCard>
      </div>
    </AdminLayout>
  )
}
