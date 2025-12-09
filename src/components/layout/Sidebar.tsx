'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSidebar } from '@/context/SidebarContext'
import {
  GridIcon,
  CalendarIcon,
  UserCircleIcon,
  ListIcon,
  TableIcon,
  PageIcon,
  PieChartIcon,
  BoxCubeIcon,
  PlugInIcon,
  ChevronDownIcon,
  HorizontalDotsIcon,
} from '@/icons'
import SidebarWidget from './SidebarWidget'

interface SubItem {
  name: string
  path: string
  pro?: boolean
  new?: boolean
}

interface MenuItem {
  icon: React.FC<{ className?: string }>
  name: string
  path?: string
  subItems?: SubItem[]
}

interface MenuGroup {
  title: string
  items: MenuItem[]
}

const menuGroups: MenuGroup[] = [
  {
    title: 'Meniu',
    items: [
      {
        icon: GridIcon,
        name: 'Valdymo skydas',
        subItems: [{ name: 'El. prekyba', path: '/', pro: false }],
      },
      {
        icon: CalendarIcon,
        name: 'Kalendorius',
        path: '/kalendorius',
      },
      {
        icon: UserCircleIcon,
        name: 'Vartotojo profilis',
        path: '/profilis',
      },
      {
        name: 'Formos',
        icon: ListIcon,
        subItems: [{ name: 'Formos elementai', path: '/formos-elementai', pro: false }],
      },
      {
        name: 'Lenteles',
        icon: TableIcon,
        subItems: [{ name: 'Paprasta lentele', path: '/paprasta-lentele', pro: false }],
      },
      {
        name: 'Puslapiai',
        icon: PageIcon,
        subItems: [
          { name: 'Tuscias puslapis', path: '/tuscias', pro: false },
          { name: '404 puslapis', path: '/klaida-404', pro: false },
        ],
      },
    ],
  },
  {
    title: 'Kiti',
    items: [
      {
        icon: PieChartIcon,
        name: 'Diagramos',
        subItems: [
          { name: 'Linijine diagrama', path: '/linijine-diagrama', pro: false },
          { name: 'Stulpeline diagrama', path: '/stulpeline-diagrama', pro: false },
        ],
      },
      {
        icon: BoxCubeIcon,
        name: 'UI elementai',
        subItems: [
          { name: 'Ispejimas', path: '/ispejimas', pro: false },
          { name: 'Avatai', path: '/avatai', pro: false },
          { name: 'Zenkleliai', path: '/zenkleliai', pro: false },
          { name: 'Mygtukai', path: '/mygtukai', pro: false },
          { name: 'Paveikslai', path: '/paveikslai', pro: false },
          { name: 'Vaizdo irasai', path: '/vaizdo-irasai', pro: false },
        ],
      },
      {
        icon: PlugInIcon,
        name: 'Autentifikacija',
        subItems: [
          { name: 'Prisijungimas', path: '/prisijungimas', pro: false },
          { name: 'Registracija', path: '/registracija', pro: false },
        ],
      },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { isExpanded, isMobileOpen, isHovered, openSubmenu, toggleSubmenu, setIsHovered } = useSidebar()

  const isActive = (path: string) => pathname === path

  const isSubmenuOpen = (groupIndex: number, itemIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`
    const item = menuGroups[groupIndex].items[itemIndex]
    return (
      openSubmenu === key ||
      (item.subItems?.some((subItem) => isActive(subItem.path)) ?? false)
    )
  }

  const handleToggleSubmenu = (groupIndex: number, itemIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`
    toggleSubmenu(key)
  }

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-99999 border-r border-gray-200 ${
        isExpanded || isMobileOpen || isHovered ? 'lg:w-[290px]' : 'lg:w-[90px]'
      } ${isMobileOpen ? 'translate-x-0 w-[290px]' : '-translate-x-full'} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex ${!isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'}`}>
        <Link href="/" className="flex items-center gap-2">
          {(isExpanded || isHovered || isMobileOpen) ? (
            <span className="text-xl font-bold text-brand-500">IT SANCHAJUS</span>
          ) : (
            <span className="text-2xl font-bold text-brand-500">IT</span>
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {menuGroups.map((menuGroup, groupIndex) => (
              <div key={groupIndex}>
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                    !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'
                  }`}
                >
                  {(isExpanded || isHovered || isMobileOpen) ? (
                    menuGroup.title
                  ) : (
                    <HorizontalDotsIcon />
                  )}
                </h2>
                <ul className="flex flex-col gap-4">
                  {menuGroup.items.map((item, index) => (
                    <li key={item.name}>
                      {item.subItems ? (
                        <>
                          <button
                            onClick={() => handleToggleSubmenu(groupIndex, index)}
                            className={`menu-item group w-full ${
                              isSubmenuOpen(groupIndex, index)
                                ? 'menu-item-active'
                                : 'menu-item-inactive'
                            } ${!isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start'}`}
                          >
                            <span
                              className={
                                isSubmenuOpen(groupIndex, index)
                                  ? 'menu-item-icon-active'
                                  : 'menu-item-icon-inactive'
                              }
                            >
                              <item.icon />
                            </span>
                            {(isExpanded || isHovered || isMobileOpen) && (
                              <span className="menu-item-text">{item.name}</span>
                            )}
                            {(isExpanded || isHovered || isMobileOpen) && (
                              <ChevronDownIcon
                                className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                                  isSubmenuOpen(groupIndex, index) ? 'rotate-180 text-brand-500' : ''
                                }`}
                              />
                            )}
                          </button>
                          {isSubmenuOpen(groupIndex, index) && (isExpanded || isHovered || isMobileOpen) && (
                            <ul className="mt-2 space-y-1 ml-9">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.path}
                                    className={`menu-dropdown-item ${
                                      isActive(subItem.path)
                                        ? 'menu-dropdown-item-active'
                                        : 'menu-dropdown-item-inactive'
                                    }`}
                                  >
                                    {subItem.name}
                                    {subItem.new && (
                                      <span
                                        className={`menu-dropdown-badge ml-auto ${
                                          isActive(subItem.path)
                                            ? 'menu-dropdown-badge-active'
                                            : 'menu-dropdown-badge-inactive'
                                        }`}
                                      >
                                        naujas
                                      </span>
                                    )}
                                    {subItem.pro && (
                                      <span
                                        className={`menu-dropdown-badge ml-auto ${
                                          isActive(subItem.path)
                                            ? 'menu-dropdown-badge-active'
                                            : 'menu-dropdown-badge-inactive'
                                        }`}
                                      >
                                        pro
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : item.path ? (
                        <Link
                          href={item.path}
                          className={`menu-item group ${
                            isActive(item.path) ? 'menu-item-active' : 'menu-item-inactive'
                          }`}
                        >
                          <span
                            className={
                              isActive(item.path)
                                ? 'menu-item-icon-active'
                                : 'menu-item-icon-inactive'
                            }
                          >
                            <item.icon />
                          </span>
                          {(isExpanded || isHovered || isMobileOpen) && (
                            <span className="menu-item-text">{item.name}</span>
                          )}
                        </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
        {(isExpanded || isHovered || isMobileOpen) && <SidebarWidget />}
      </div>
    </aside>
  )
}
