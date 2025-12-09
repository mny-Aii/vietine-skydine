'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { BellIcon, CloseIcon } from '@/icons'

interface Notification {
  id: number
  userName: string
  userImage: string
  action: string
  project: string
  type: string
  time: string
  status: 'online' | 'offline'
}

const notifications: Notification[] = [
  {
    id: 1,
    userName: 'Tomas Jonaitis',
    userImage: '/images/user/user-02.jpg',
    action: 'praso leidimo pakeisti',
    project: 'Projekta - Programa',
    type: 'Projektas',
    time: 'Pries 5 min',
    status: 'online',
  },
  {
    id: 2,
    userName: 'Ona Petrauskiene',
    userImage: '/images/user/user-03.jpg',
    action: 'praso leidimo pakeisti',
    project: 'Projekta - Programa',
    type: 'Projektas',
    time: 'Pries 5 min',
    status: 'offline',
  },
  {
    id: 3,
    userName: 'Jonas Kazlauskas',
    userImage: '/images/user/user-04.jpg',
    action: 'praso leidimo pakeisti',
    project: 'Projekta - Programa',
    type: 'Projektas',
    time: 'Pries 5 min',
    status: 'online',
  },
  {
    id: 4,
    userName: 'Marija Stankeviciene',
    userImage: '/images/user/user-05.jpg',
    action: 'praso leidimo pakeisti',
    project: 'Projekta - Programa',
    type: 'Projektas',
    time: 'Pries 5 min',
    status: 'online',
  },
]

export default function NotificationMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notifying, setNotifying] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
    setNotifying(false)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={toggleDropdown}
      >
        <span
          className={`${
            notifying ? 'flex' : 'hidden'
          } absolute right-0 top-0.5 z-1 h-2 w-2 rounded-full bg-orange-400`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 -z-1 animate-ping"></span>
        </span>
        <BellIcon className="fill-current" />
      </button>

      {dropdownOpen && (
        <div className="absolute -right-[240px] mt-[17px] flex h-[480px] w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark sm:w-[361px] lg:right-0">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-800">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white/90">Pranesimai</h5>
            <button onClick={closeDropdown} className="text-gray-500 dark:text-gray-400">
              <CloseIcon className="fill-current" />
            </button>
          </div>

          <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
            {notifications.map((notification) => (
              <li key={notification.id} onClick={closeDropdown}>
                <a
                  className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
                  href="#"
                >
                  <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                    <img
                      src={notification.userImage}
                      alt="Vartotojas"
                      className="overflow-hidden rounded-full"
                    />
                    <span
                      className={`${
                        notification.status === 'online' ? 'bg-success-500' : 'bg-error-500'
                      } absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900`}
                    ></span>
                  </span>

                  <span className="block">
                    <span className="mb-1.5 block text-theme-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-800 dark:text-white/90">
                        {notification.userName}
                      </span>{' '}
                      {notification.action}{' '}
                      <span className="font-medium text-gray-800 dark:text-white/90">
                        {notification.project}
                      </span>
                    </span>

                    <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                      <span>{notification.type}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>{notification.time}</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className="mt-3 flex justify-center rounded-lg border border-gray-300 bg-white p-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            onClick={closeDropdown}
          >
            Perziureti visus pranesimus
          </Link>
        </div>
      )}
    </div>
  )
}
