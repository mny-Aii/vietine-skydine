'use client'

import { useState, useCallback, useEffect } from 'react'
import AdminLayout from '@/components/layout/AdminLayout'
import PageBreadcrumb from '@/components/common/PageBreadcrumb'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { EventInput, DateSelectArg, EventClickArg, EventContentArg } from '@fullcalendar/core'

// Pradiniai įvykiai
const initialEvents: EventInput[] = [
  {
    id: '1',
    title: 'Susitikimas su klientu',
    start: new Date().toISOString().split('T')[0] + 'T10:00:00',
    end: new Date().toISOString().split('T')[0] + 'T11:30:00',
    backgroundColor: '#465FFF',
    borderColor: '#465FFF',
  },
  {
    id: '2',
    title: 'Komandos pasitarimas',
    start: new Date().toISOString().split('T')[0] + 'T14:00:00',
    end: new Date().toISOString().split('T')[0] + 'T15:00:00',
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  {
    id: '3',
    title: 'Projekto pristatymas',
    start: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    allDay: true,
    backgroundColor: '#F97316',
    borderColor: '#F97316',
  },
  {
    id: '4',
    title: 'Deadline: Ataskaita',
    start: new Date(Date.now() + 172800000).toISOString().split('T')[0],
    allDay: true,
    backgroundColor: '#EF4444',
    borderColor: '#EF4444',
  },
  {
    id: '5',
    title: 'Atostogos',
    start: new Date(Date.now() + 604800000).toISOString().split('T')[0],
    end: new Date(Date.now() + 950400000).toISOString().split('T')[0],
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
]

const eventColors = [
  { name: 'Mėlyna', value: '#465FFF' },
  { name: 'Žalia', value: '#10B981' },
  { name: 'Oranžinė', value: '#F97316' },
  { name: 'Raudona', value: '#EF4444' },
  { name: 'Violetinė', value: '#8B5CF6' },
  { name: 'Rožinė', value: '#EC4899' },
  { name: 'Geltona', value: '#F59E0B' },
]

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (event: { title: string; start: string; end: string; allDay: boolean; color: string }) => void
  onDelete?: () => void
  initialData?: {
    title: string
    start: string
    end: string
    allDay: boolean
    color: string
  }
  isEdit?: boolean
}

function EventModal({ isOpen, onClose, onSave, onDelete, initialData, isEdit }: EventModalProps) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [startDate, setStartDate] = useState(initialData?.start || '')
  const [endDate, setEndDate] = useState(initialData?.end || '')
  const [allDay, setAllDay] = useState(initialData?.allDay || false)
  const [color, setColor] = useState(initialData?.color || '#465FFF')

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setStartDate(initialData.start)
      setEndDate(initialData.end)
      setAllDay(initialData.allDay)
      setColor(initialData.color)
    }
  }, [initialData])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onSave({ title, start: startDate, end: endDate || startDate, allDay, color })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {isEdit ? 'Redaguoti įvykį' : 'Naujas įvykis'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Pavadinimas
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:border-gray-700 dark:bg-gray-900"
              placeholder="Įveskite pavadinimą..."
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="allDay"
              checked={allDay}
              onChange={(e) => setAllDay(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
            />
            <label htmlFor="allDay" className="text-sm text-gray-700 dark:text-gray-300">
              Visa diena
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Pradžia
              </label>
              <input
                type={allDay ? 'date' : 'datetime-local'}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:border-gray-700 dark:bg-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Pabaiga
              </label>
              <input
                type={allDay ? 'date' : 'datetime-local'}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Spalva
            </label>
            <div className="flex gap-2 flex-wrap">
              {eventColors.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setColor(c.value)}
                  className={`w-8 h-8 rounded-full transition-transform ${
                    color === c.value ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.value }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {isEdit && onDelete && (
              <button
                type="button"
                onClick={() => {
                  onDelete()
                  onClose()
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
              >
                Ištrinti
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Atšaukti
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-brand-500 rounded-lg hover:bg-brand-600 transition-colors"
            >
              {isEdit ? 'Išsaugoti' : 'Sukurti'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function CalendarPage() {
  const [events, setEvents] = useState<EventInput[]>(initialEvents)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<EventInput | null>(null)
  const [modalData, setModalData] = useState<{
    title: string
    start: string
    end: string
    allDay: boolean
    color: string
  } | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Pasirinkti datos rėžį
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    const start = selectInfo.startStr
    const end = selectInfo.endStr
    const allDay = selectInfo.allDay

    setModalData({
      title: '',
      start: allDay ? start : start.slice(0, 16),
      end: allDay ? end : end.slice(0, 16),
      allDay,
      color: '#465FFF',
    })
    setSelectedEvent(null)
    setIsModalOpen(true)
    selectInfo.view.calendar.unselect()
  }, [])

  // Paspausti ant įvykio
  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    const event = clickInfo.event
    setSelectedEvent({
      id: event.id,
      title: event.title,
      start: event.startStr,
      end: event.endStr,
      allDay: event.allDay,
      backgroundColor: event.backgroundColor,
    })
    setModalData({
      title: event.title,
      start: event.allDay ? event.startStr : event.startStr.slice(0, 16),
      end: event.allDay ? event.endStr : (event.endStr?.slice(0, 16) || event.startStr.slice(0, 16)),
      allDay: event.allDay,
      color: event.backgroundColor || '#465FFF',
    })
    setIsModalOpen(true)
  }, [])

  // Išsaugoti įvykį
  const handleSaveEvent = useCallback((eventData: { title: string; start: string; end: string; allDay: boolean; color: string }) => {
    if (selectedEvent?.id) {
      // Redaguoti esamą
      setEvents((prev) =>
        prev.map((e) =>
          e.id === selectedEvent.id
            ? {
                ...e,
                title: eventData.title,
                start: eventData.start,
                end: eventData.end,
                allDay: eventData.allDay,
                backgroundColor: eventData.color,
                borderColor: eventData.color,
              }
            : e
        )
      )
    } else {
      // Sukurti naują
      const newEvent: EventInput = {
        id: String(Date.now()),
        title: eventData.title,
        start: eventData.start,
        end: eventData.end,
        allDay: eventData.allDay,
        backgroundColor: eventData.color,
        borderColor: eventData.color,
      }
      setEvents((prev) => [...prev, newEvent])
    }
  }, [selectedEvent])

  // Ištrinti įvykį
  const handleDeleteEvent = useCallback(() => {
    if (selectedEvent?.id) {
      setEvents((prev) => prev.filter((e) => e.id !== selectedEvent.id))
    }
  }, [selectedEvent])

  // Perkelti įvykį (drag & drop)
  const handleEventDrop = useCallback((info: any) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === info.event.id
          ? {
              ...e,
              start: info.event.startStr,
              end: info.event.endStr,
              allDay: info.event.allDay,
            }
          : e
      )
    )
  }, [])

  // Pakeisti įvykio dydį
  const handleEventResize = useCallback((info: any) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === info.event.id
          ? {
              ...e,
              start: info.event.startStr,
              end: info.event.endStr,
            }
          : e
      )
    )
  }, [])

  // Įvykio turinio renderinimas
  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <div className="px-1 py-0.5 overflow-hidden">
        {eventContent.timeText && (
          <span className="text-xs font-medium mr-1">{eventContent.timeText}</span>
        )}
        <span className="text-xs font-medium truncate">{eventContent.event.title}</span>
      </div>
    )
  }

  return (
    <AdminLayout>
      <PageBreadcrumb
        pageTitle="Kalendorius"
        breadcrumbs={[{ label: 'Pradžia', href: '/' }, { label: 'Kalendorius' }]}
      />

      <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        {/* Legenda */}
        <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Spalvų reikšmės:</span>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#465FFF]"></span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Susitikimai</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#10B981]"></span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Pasitarimai</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#F97316]"></span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Pristatymai</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]"></span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Deadline</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#8B5CF6]"></span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Atostogos</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              const today = new Date().toISOString().split('T')[0]
              setModalData({
                title: '',
                start: today,
                end: today,
                allDay: true,
                color: '#465FFF',
              })
              setSelectedEvent(null)
              setIsModalOpen(true)
            }}
            className="ml-auto flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-500 rounded-lg hover:bg-brand-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Naujas įvykis
          </button>
        </div>

        {/* Kalendorius */}
        {mounted && (
          <div className="fc-wrapper">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
              }}
              buttonText={{
                today: 'Šiandien',
                month: 'Mėnuo',
                week: 'Savaitė',
                day: 'Diena',
                list: 'Sąrašas',
              }}
              locale="lt"
              firstDay={1}
              events={events}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={3}
              weekends={true}
              nowIndicator={true}
              eventContent={renderEventContent}
              select={handleDateSelect}
              eventClick={handleEventClick}
              eventDrop={handleEventDrop}
              eventResize={handleEventResize}
              height="auto"
              aspectRatio={1.8}
              slotMinTime="06:00:00"
              slotMaxTime="22:00:00"
              slotDuration="00:30:00"
              allDayText="Visa diena"
              noEventsText="Nėra įvykių"
              moreLinkText={(n) => `+${n} daugiau`}
            />
          </div>
        )}
      </div>

      {/* Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedEvent(null)
          setModalData(null)
        }}
        onSave={handleSaveEvent}
        onDelete={selectedEvent ? handleDeleteEvent : undefined}
        initialData={modalData || undefined}
        isEdit={!!selectedEvent}
      />
    </AdminLayout>
  )
}
