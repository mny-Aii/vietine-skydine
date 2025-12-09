'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false })

interface CalendarEvent {
  id: string
  title: string
  start: string
  end?: string
  backgroundColor?: string
  borderColor?: string
}

const initialEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Susitikimas',
    start: new Date().toISOString().split('T')[0],
    backgroundColor: '#465FFF',
    borderColor: '#465FFF',
  },
  {
    id: '2',
    title: 'Pristatymas',
    start: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  {
    id: '3',
    title: 'Terminas',
    start: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    backgroundColor: '#F59E0B',
    borderColor: '#F59E0B',
  },
]

export default function DashboardCalendar() {
  const [events] = useState<CalendarEvent[]>(initialEvents)

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kalendorius</h3>
        <p className="mt-1 text-gray-700 text-theme-sm dark:text-gray-300">
          Artimiausi ivykiai
        </p>
      </div>

      <div className="dashboard-calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next',
          }}
          height="auto"
          locale="lt"
          firstDay={1}
          buttonText={{
            today: 'Siandien',
          }}
          dayHeaderFormat={{ weekday: 'short' }}
          titleFormat={{ year: 'numeric', month: 'long' }}
        />
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Artimiausi ivykiai:</h4>
        <div className="space-y-2">
          {events.slice(0, 3).map((event) => (
            <div key={event.id} className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: event.backgroundColor }}
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{event.title}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                {new Date(event.start).toLocaleDateString('lt-LT', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
