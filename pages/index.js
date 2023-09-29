// import Layout from "../../Components/Layout";
// import Header from "../../Components/Header";
// import DashboardTab from "../../Components/DashboardTab";
// import { useRouter } from "next/router";
// import jsCookie from "js-cookie";
// import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import List from '@/components/Lists'

const navigation = [
  { name: 'Overview', href: '#', icon: FolderIcon, current: false },
  { name: 'Deployments', href: '#', icon: ServerIcon, current: true },
  { name: 'Activity', href: '#', icon: SignalIcon, current: false },
  { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
]
const secondaryNavigation = [
  { name: 'Overview', href: '#', current: true },
  { name: 'Activity', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
  { name: 'Collaborators', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
]
const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' },
]
const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '2d89f0c8',
    branch: 'main',
    status: 'Completed',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
  },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const index = () => {

  return (
    <Layout>

      <div className="xl:pl-72">
        {/* Sticky search header */}        

        <main>
          <header>
            {/* Secondary navigation */}
            <nav className="flex overflow-x-auto border-b border-white/10 py-4">
              <ul
                role="list"
                className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
              >
                {secondaryNavigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className={item.current ? 'text-indigo-400' : ''}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Heading */}
            <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
              <div>
                <div className="flex items-center gap-x-3">
                  <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h1 className="flex gap-x-3 text-base leading-7">
                    <span className="font-semibold text-white">Planetaria</span>
                    <span className="text-gray-600">/</span>
                    <span className="font-semibold text-white">mobile-api</span>
                  </h1>
                </div>
                <p className="mt-2 text-xs leading-6 text-gray-400">Deploys from GitHub via main branch</p>
              </div>
              <div className="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none">
                Production
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={classNames(
                    statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                    'border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8'
                  )}
                >
                  <p className="text-sm font-medium leading-6 text-gray-400">{stat.name}</p>
                  <p className="mt-2 flex items-baseline gap-x-2">
                    <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                    {stat.unit ? <span className="text-sm text-gray-400">{stat.unit}</span> : null}
                  </p>
                </div>
              ))}
            </div>
          </header>

          {/* Activity list */}
          <List type={"allPolls"} activityItems={activityItems} />
        </main>
      </div>
    </Layout>
  );
};

export default index;
