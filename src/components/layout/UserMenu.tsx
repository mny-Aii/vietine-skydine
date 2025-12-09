'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
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
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img src="/images/user/owner.jpg" alt="Vartotojas" />
        </span>

        <span className="hidden mr-1 font-medium text-gray-700 text-theme-sm lg:block dark:text-gray-400">
          Jonas Jonaitis
        </span>

        <svg
          className={`hidden h-5 w-5 stroke-gray-500 lg:block dark:stroke-gray-400 transition-transform duration-200 ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.79175 7.39551L10.0001 12.6038L15.2084 7.39551"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 z-40 w-[260px] space-y-1 rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img src="/images/user/owner.jpg" alt="Vartotojas" />
            </div>
            <div>
              <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                Jonas Jonaitis
              </p>
              <p className="text-gray-500 text-theme-xs dark:text-gray-400">
                jonas@pav.lt
              </p>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-800" />

          <ul>
            <li>
              <Link
                href="/profilis"
                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                onClick={closeDropdown}
              >
                <svg
                  className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 2.29163C5.74282 2.29163 2.29169 5.74276 2.29169 9.99996C2.29169 11.8094 2.93458 13.4695 4.00629 14.7791C4.29358 14.1517 4.78019 13.5523 5.47208 13.039C6.36422 12.3773 7.59869 11.875 9.16669 11.875H10.8334C12.4014 11.875 13.6358 12.3773 14.528 13.039C15.2199 13.5523 15.7065 14.1517 15.9938 14.7791C17.0655 13.4695 17.7084 11.8094 17.7084 9.99996C17.7084 5.74276 14.2572 2.29163 10 2.29163ZM14.8914 15.9068C14.7359 15.2516 14.3486 14.5689 13.6956 14.0841C12.9738 13.549 11.9624 13.125 10.8334 13.125H9.16669C8.03772 13.125 7.02627 13.549 6.30448 14.0841C5.65147 14.5689 5.26415 15.2516 5.10867 15.9068C6.45347 16.9168 8.15418 17.5083 10 17.5083C11.8459 17.5083 13.5466 16.9168 14.8914 15.9068ZM1.04169 9.99996C1.04169 5.05236 5.05242 1.04163 10 1.04163C14.9476 1.04163 18.9584 5.05236 18.9584 9.99996C18.9584 14.9476 14.9476 18.9583 10 18.9583C5.05242 18.9583 1.04169 14.9476 1.04169 9.99996ZM10 5.62496C8.73735 5.62496 7.70835 6.65396 7.70835 7.91663C7.70835 9.17929 8.73735 10.2083 10 10.2083C11.2627 10.2083 12.2917 9.17929 12.2917 7.91663C12.2917 6.65396 11.2627 5.62496 10 5.62496ZM6.45835 7.91663C6.45835 5.96356 8.04693 4.37496 10 4.37496C11.9531 4.37496 13.5417 5.96356 13.5417 7.91663C13.5417 9.86969 11.9531 11.4583 10 11.4583C8.04693 11.4583 6.45835 9.86969 6.45835 7.91663Z"
                    fill=""
                  />
                </svg>
                Mano profilis
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                onClick={closeDropdown}
              >
                <svg
                  className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 1.04163C8.07953 1.04163 6.52085 2.60031 6.52085 4.52079V5.20829H13.4792V4.52079C13.4792 2.60031 11.9205 1.04163 10 1.04163ZM14.7292 5.20829V4.52079C14.7292 1.90991 12.6109 -0.208374 10 -0.208374C7.38912 -0.208374 5.27085 1.90991 5.27085 4.52079V5.20829H4.16669C3.59139 5.20829 3.12502 5.67466 3.12502 6.24996V17.5C3.12502 18.0753 3.59139 18.5416 4.16669 18.5416H15.8334C16.4087 18.5416 16.875 18.0753 16.875 17.5V6.24996C16.875 5.67466 16.4087 5.20829 15.8334 5.20829H14.7292ZM4.37502 6.45829V17.2916H15.625V6.45829H4.37502Z"
                    fill=""
                  />
                </svg>
                Nustatymai
              </Link>
            </li>
          </ul>

          <hr className="border-gray-200 dark:border-gray-800" />

          <button
            onClick={closeDropdown}
            className="flex items-center w-full gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
          >
            <svg
              className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.125 3.125C2.77982 3.125 2.5 3.40482 2.5 3.75V16.25C2.5 16.5952 2.77982 16.875 3.125 16.875H8.125C8.47018 16.875 8.75 17.1548 8.75 17.5C8.75 17.8452 8.47018 18.125 8.125 18.125H3.125C2.08947 18.125 1.25 17.2855 1.25 16.25V3.75C1.25 2.71447 2.08947 1.875 3.125 1.875H8.125C8.47018 1.875 8.75 2.15482 8.75 2.5C8.75 2.84518 8.47018 3.125 8.125 3.125H3.125ZM12.9419 5.44194C13.186 5.19786 13.5818 5.19786 13.8258 5.44194L18.2258 9.84194C18.4699 10.086 18.4699 10.4818 18.2258 10.7259L13.8258 15.1259C13.5818 15.37 13.186 15.37 12.9419 15.1259C12.6979 14.8818 12.6979 14.486 12.9419 14.2419L16.0588 11.125H7.5C7.15482 11.125 6.875 10.8452 6.875 10.5C6.875 10.1548 7.15482 9.875 7.5 9.875H16.0588L12.9419 6.75806C12.6979 6.51398 12.6979 6.11602 12.9419 5.87194L12.9419 5.44194Z"
                fill=""
              />
            </svg>
            Atsijungti
          </button>
        </div>
      )}
    </div>
  )
}
