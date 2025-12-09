'use client'

import AdminLayout from '@/components/layout/AdminLayout'
import EcommerceMetrics from '@/components/ecommerce/EcommerceMetrics'
import MonthlyTarget from '@/components/ecommerce/MonthlyTarget'
import MonthlySale from '@/components/ecommerce/MonthlySale'
import StatisticsChart from '@/components/ecommerce/StatisticsChart'
import CustomerDemographic from '@/components/ecommerce/CustomerDemographic'
import RecentOrders from '@/components/ecommerce/RecentOrders'

export default function Home() {
  return (
    <AdminLayout>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <MonthlyTarget />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <MonthlySale />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <CustomerDemographic />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </AdminLayout>
  )
}
