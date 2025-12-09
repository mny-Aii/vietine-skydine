'use client'

import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
import ComponentCard from '@/components/common/ComponentCard'
import Avatar from '@/components/ui/Avatar'

export default function AvatarsPage() {
  return (
    <AdminLayout>
      <PageBreadcrumb
        pageTitle="Avatai"
        breadcrumbs={[
          { label: 'Pradzia', href: '/' },
          { label: 'UI elementai', href: '#' },
          { label: 'Avatai' },
        ]}
      />

      <div className="space-y-6">
        <ComponentCard title="Pagrindinis avataras" description="Avatarai su nuotraukomis">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar src="/images/user/user-01.jpg" size="xs" />
            <Avatar src="/images/user/user-02.jpg" size="sm" />
            <Avatar src="/images/user/user-03.jpg" size="md" />
            <Avatar src="/images/user/user-04.jpg" size="lg" />
            <Avatar src="/images/user/user-05.jpg" size="xl" />
          </div>
        </ComponentCard>

        <ComponentCard title="Avataras su inicialais" description="Avatarai rodantys vardo inicialus">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar name="Jonas Jonaitis" size="xs" />
            <Avatar name="Ona Petrauskiene" size="sm" />
            <Avatar name="Petras Kazlauskas" size="md" />
            <Avatar name="Marija Stankeviciene" size="lg" />
            <Avatar name="Tomas Vaitkus" size="xl" />
          </div>
        </ComponentCard>

        <ComponentCard title="Avataras su busena" description="Avatarai rodantys vartotojo busena">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar src="/images/user/user-01.jpg" size="md" status="online" />
            <Avatar src="/images/user/user-02.jpg" size="md" status="offline" />
            <Avatar src="/images/user/user-03.jpg" size="md" status="away" />
            <Avatar src="/images/user/user-04.jpg" size="md" status="busy" />
          </div>
        </ComponentCard>

        <ComponentCard title="Avataru grupe" description="Keli avatarai viename elemente">
          <div className="flex -space-x-3">
            <Avatar src="/images/user/user-01.jpg" size="md" />
            <Avatar src="/images/user/user-02.jpg" size="md" />
            <Avatar src="/images/user/user-03.jpg" size="md" />
            <Avatar src="/images/user/user-04.jpg" size="md" />
            <div className="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-600 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
              +5
            </div>
          </div>
        </ComponentCard>
      </div>
    </AdminLayout>
  )
}
