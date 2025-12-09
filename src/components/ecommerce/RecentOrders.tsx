'use client'

import React from 'react'

interface Order {
  id: string
  product: string
  customer: string
  date: string
  amount: string
  status: 'Ivykdytas' | 'Vykdomas' | 'Atsauktas'
}

const orders: Order[] = [
  {
    id: '#ORD-001',
    product: 'MacBook Pro 14"',
    customer: 'Jonas Jonaitis',
    date: '2024-01-15',
    amount: '$2,499.00',
    status: 'Ivykdytas',
  },
  {
    id: '#ORD-002',
    product: 'iPhone 15 Pro',
    customer: 'Ona Petrauskiene',
    date: '2024-01-14',
    amount: '$1,199.00',
    status: 'Vykdomas',
  },
  {
    id: '#ORD-003',
    product: 'AirPods Pro',
    customer: 'Petras Kazlauskas',
    date: '2024-01-13',
    amount: '$249.00',
    status: 'Ivykdytas',
  },
  {
    id: '#ORD-004',
    product: 'iPad Air',
    customer: 'Marija Stankeviciene',
    date: '2024-01-12',
    amount: '$799.00',
    status: 'Atsauktas',
  },
  {
    id: '#ORD-005',
    product: 'Apple Watch',
    customer: 'Tomas Vaitkus',
    date: '2024-01-11',
    amount: '$399.00',
    status: 'Ivykdytas',
  },
]

const statusColors = {
  Ivykdytas: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500',
  Vykdomas: 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-500',
  Atsauktas: 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500',
}

export default function RecentOrders() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Naujausi uzsakymai
            </h3>
            <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
              Paskutiniu uzsakymu sarasas
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300">
            Ziureti visus
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase dark:text-gray-300">
                  Uzsakymo Nr.
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase dark:text-gray-300">
                  Produktas
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase dark:text-gray-300">
                  Klientas
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase dark:text-gray-300">
                  Data
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase dark:text-gray-300">
                  Suma
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase dark:text-gray-300">
                  Busena
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {order.id}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {order.product}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {order.customer}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {order.date}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {order.amount}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        statusColors[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
