'use client'
import Link from 'next/link'
export default function Error404Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white dark:bg-gray-900">
      <h1 className="text-[120px] font-bold text-brand-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white/90">Puslapis nerastas</h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">Atsiprasyome, puslapis neegzistuoja.</p>
      <Link href="/" className="mt-6 px-6 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 hover:bg-brand-600">Grizti i pradzia</Link>
    </div>
  )
}