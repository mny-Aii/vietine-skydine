'use client'

import React from 'react'
import { UsersIcon, BoxIcon, ArrowUpIcon, ArrowDownIcon } from '@/icons'

interface MetricCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: React.ReactNode
}

function MetricCard({ title, value, change, isPositive, icon }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
        {icon}
      </div>

      <div className="flex items-end justify-between mt-5">
        <div>
          <span className="text-sm text-gray-700 dark:text-gray-300">{title}</span>
          <h4 className="mt-2 font-bold text-gray-900 text-title-sm dark:text-white">{value}</h4>
        </div>

        <span
          className={`flex items-center gap-1 rounded-full py-0.5 pl-2 pr-2.5 text-sm font-medium ${
            isPositive
              ? 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500'
              : 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500'
          }`}
        >
          {isPositive ? (
            <ArrowUpIcon className="fill-current" />
          ) : (
            <ArrowDownIcon className="fill-current" />
          )}
          {change}
        </span>
      </div>
    </div>
  )
}

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      <MetricCard
        title="Klientai"
        value="3,782"
        change="11.01%"
        isPositive={true}
        icon={<UsersIcon className="fill-gray-800 dark:fill-white/90" />}
      />
      <MetricCard
        title="Uzsakymai"
        value="5,359"
        change="9.05%"
        isPositive={false}
        icon={<BoxIcon className="fill-gray-800 dark:fill-white/90" />}
      />
    </div>
  )
}
