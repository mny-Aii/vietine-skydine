'use client'

import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'

export default function ProfilePage() {
  return (
    <AdminLayout>
      <PageBreadcrumb
        pageTitle="Vartotojo profilis"
        breadcrumbs={[
          { label: 'Pradzia', href: '/' },
          { label: 'Vartotojo profilis' },
        ]}
      />

      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        {/* Cover Photo */}
        <div className="relative h-48 w-full rounded-t-2xl bg-gradient-to-r from-brand-500 to-brand-700">
          <div className="absolute bottom-0 left-6 translate-y-1/2">
            <div className="relative">
              <div className="w-32 h-32 flex items-center justify-center border-4 border-white rounded-full dark:border-gray-900 bg-brand-500 text-white font-bold text-4xl">
                IT
              </div>
              <button className="absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 text-white rounded-full bg-brand-500 hover:bg-brand-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-6 pt-20 pb-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90">Jonas Jonaitis</h2>
              <p className="mt-1 text-gray-500 dark:text-gray-400">Programuotojas @ Vietine skydine</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Vilnius, Lietuva</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Prisijunge 2024 m. Sausis</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="edit-button">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Redaguoti profili
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 p-6 border-t border-gray-200 sm:grid-cols-3 dark:border-gray-800">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">125</h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Projektai</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">1,234</h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Sekcjai</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">567</h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Seka</p>
          </div>
        </div>
      </div>

      {/* Personal Info Card */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Asmenine informacija</h3>
          <button className="text-brand-500 hover:text-brand-600 text-theme-sm font-medium">
            Redaguoti
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">Vardas</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">Jonas</p>
          </div>
          <div>
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">Pavarde</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">Jonaitis</p>
          </div>
          <div>
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">El. pastas</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">jonas@pavyzdys.lt</p>
          </div>
          <div>
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">Telefonas</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">+370 600 12345</p>
          </div>
          <div className="sm:col-span-2">
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">Biografija</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">
              Programuotojas su 5+ metu patirtimi kuriant modernias interneto aplikacijas. Specializuojuosi React, Next.js ir Node.js technologijose.
            </p>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Adresas</h3>
          <button className="text-brand-500 hover:text-brand-600 text-theme-sm font-medium">
            Redaguoti
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">Salis</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">Lietuva</p>
          </div>
          <div>
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">Miestas</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">Vilnius</p>
          </div>
          <div>
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">Pasto kodas</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">LT-01234</p>
          </div>
          <div>
            <span className="text-gray-500 text-theme-sm dark:text-gray-400">Gatve</span>
            <p className="mt-1 font-medium text-gray-800 dark:text-white/90">Gedimino pr. 1</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
