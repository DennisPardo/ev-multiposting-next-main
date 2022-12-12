import { FC, Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3CenterLeftIcon, Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'


const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'My tasks', href: '#', icon: Bars4Icon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
const projects = [
  {
    id: 1,
    title: 'GraphQL API',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
]
const pinnedProjects = projects.filter((project) => project.pinned)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function SidebarOpen(){
  const [sidebarOpen, setSidebarOpen] = useState(false)
return (
    <>
    <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                       <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                       <button
                              type="button"
                              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                              onClick={() => setSidebarOpen(false)}
                          >
                              <span className="sr-only">Close sidebar</span>
                              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                          </button>
                      </div>
                  </Transition.Child>
                              <div className="flex flex-shrink-0 items-center px-4">
                 <img
                     className="h-8 w-auto"
                     src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
                     alt="Your Company"
                 />
             </div>
             <div className="mt-5 h-0 flex-1 overflow-y-auto">
                 <nav className="px-2">
                     <div className="space-y-1">
                         {navigation.map((item) => (
             <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                      item.current
                                          ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                        'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                                      <item.icon
                                          className={classNames(
                                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                              'mr-3 flex-shrink-0 h-6 w-6'
                           )}
                           aria-hidden="true"
                                     />
                                     {item.name}
                                 </a>
                             ))}
                         </div>
                         <div className="mt-8">
                    <h3 className="px-3 text-sm font-medium text-gray-500" id="mobile-teams-headline">
                        Teams
                    </h3>
                                   <div className="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline">
                                       {teams.map((team) => (
                                           <a
                                               key={team.name}
                                               href={team.href}
                                               className="group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                      >
            <span
                         className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                         aria-hidden="true"
                   />
                                               <span className="truncate">{team.name}</span>
                                      </a>
                                  ))}
                          </div>
                      </div>
                  </nav>
                   </div>
               </Dialog.Panel>
            </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    </div>
</>
)

}
