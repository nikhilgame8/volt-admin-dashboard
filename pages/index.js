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

// import PieChart from "@/components/Charts/PieChart";
import dynamic from "next/dynamic";
import Heading from "@/components/Heading";
const PieChart = dynamic(() => import("@/components/Charts/PieChart"), {
  ssr: false,
})
const DemoGauge = dynamic(() => import("@/components/Charts/Meter").then(module => module.DemoGauge), {
  ssr: false
});
const ColumnPlot = dynamic(() => import("@/components/Charts/ColumnPlot"), {
  ssr: false,
})
const LinePlot = dynamic(() => import("@/components/Charts/LineDataPlot"), {
  ssr: false,
})
const Map = dynamic(() => import("@/components/Charts/IndiaMap"), {
  ssr: false,
})
const PerformanceChart = dynamic(() => import("@/components/Charts/Perfomance"), {
  ssr: false,
})

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
                Creat Poll
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

          <div className="graph-charts mt-5">
            <div className="grid grid-cols-4 bg-gray-900">
              <div className="col-span-2">
                <div>
                  <div className="card-body">
                    <h2 className="card-title">Todays polls live stats</h2>
                    <hr className="border" />
                    <div className="chart-img text-center img-fluid charts">
                      <div className="w-100 text-start">
                        <h4 className="">
                          What is you favourite Icecream flavour ?
                        </h4>
                      </div>
                      <PieChart />
                      {/* <img
                        src={PieChart}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Todays Completion Rate</h2>
                    <hr className="border" />
                    {/* <h4 className="">Completion Rate:</h4> */}
                    <div className="chart-img text-center charts">
                      <DemoGauge className=" img-fluid" />

                      {/* <img
                        src={DemoChartImg2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Top Age</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <ColumnPlot />
                      {/* <img
                        src={DemoChartImg3}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End First Row --> */}

              <div className="col-span-2">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Todays Votes Over Time</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <LinePlot />
                      {/* <img
                        src={DemoChartImg2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Votes by Location</h2>
                    <hr className="border" />
                    {/* <div className="chart-img text-center"> */}
                    <div className="chart-img text-start votebylocation scroll">
                      <p>Total Location of votes</p>
                      <h2>26</h2>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Ludhiana <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Pune <span>(Maharashtra)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Delhi <span>(India)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">Chandigarh</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Dehradun <span>(Uttarakhand)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Delhi <span>(India)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">Chandigarh</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Dehradun <span>(Uttarakhand)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Delhi <span>(India)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">Chandigarh</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Dehradun <span>(Uttarakhand)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="point"></div>
                        <p className="m-0">
                          Jalandhar <span>(Punjab)</span>
                        </p>
                      </div>
                      {/* <img
                        src={DemoChart}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Votes by Area</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <Map />
                      {/* <img
                        src={DemoChartImg2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- End Second Row --> */}

              <div className="col-span-2">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Performance Over Days</h2>
                    <hr className="border" />
                    <div className="chart-img text-center charts">
                      <PerformanceChart />
                      {/* <img
                        src={DemoChartImg2}
                        alt="chart-img"
                        className="img-fluid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="card trending-polls overflow-auto">
                  {/* <!-- <div className="filter">
                    <a className="icon" href='/' data-bs-toggle="dropdown"
                      ><i className="bi bi-three-dots"></i
                    ></a>
                    <ul
                      className="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                    >
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href='/'>Today</a></li>
                      <li><a className="dropdown-item" href='/'>This Month</a></li>
                      <li><a className="dropdown-item" href='/'>This Year</a></li>
                    </ul>
                  </div> --> */}

                  <div className="card-body">
                    <div className="card-title-header d-flex justify-content-between align-items-center">
                      <h2 className="card-title">Trending Polls</h2>
                      <a href="/" className="">
                        View All
                      </a>
                    </div>

                    <table className="table datatable mt-4">
                      <thead>
                        <tr>
                          <th scope="col">Poll Name</th>
                          <th scope="col">
                            Votes <i className="fa-solid fa-caret-up"></i>
                          </th>
                          <th scope="col">
                            Reaches <i className="fa-solid fa-caret-up"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                        <tr>
                          <td>First Poll Name</td>
                          <td>4563</td>
                          <td>9834</td>
                        </tr>

                        <tr>
                          <td>Second Poll Name</td>
                          <td>8763</td>
                          <td>28656</td>
                        </tr>

                        <tr>
                          <td>Third Poll Name</td>
                          <td>35829</td>
                          <td>52036</td>
                        </tr>

                        <tr>
                          <td>Forth Poll Name</td>
                          <td>8923</td>
                          <td>17830</td>
                        </tr>

                        <tr>
                          <td>Fifth Poll Name</td>
                          <td>62891</td>
                          <td>97269</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- End Third Row --> */}

              <div className="col-span-4">
                <div className="border-t border-white/10 pt-11">
                  <Heading type="headingh2ViewMore" />
                  <List type={"recentActivity"} activityItems={activityItems} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default index;
