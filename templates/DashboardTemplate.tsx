
import { FC, Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3CenterLeftIcon, Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import SidebarOpen from '../components/organism/SidebarOpen'
import StaticSidebar from '../components/molecules/SidebarComponent'
import UserAccount from '../components/organism/SidebarElement'
import SidebarSearch from '../components/atoms/SidebarSearch'
import Navigation from '../components/organism/Navigation'
import PageTitle from '../components/molecules/PageTitle'
import PinnedProjects from '../components/organism/PinnedProjects'
import ProjectsTable from '../components/organism/ProjectsTable'


const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'My tasks', href: '#', icon: Bars4Icon, current: false },
  { name: 'Recent', href:'companies', icon: ClockIcon, current: false },
]



export default function DashboardTemplate() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
    <>
        
        <div className="min-h-full">
            <SidebarOpen/>
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
            <div className="flex flex-col lg-pl-64">
                <StaticSidebar/>
                <UserAccount/>
                    <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
                        < SidebarSearch/>
                        <Navigation/> 
                    <div className="flex items-center">
                        </div>
                    </div>
                    </div>
                </div>
               
                <main className="flex-1">
                    <PageTitle/>
                    <div className="mt-6 px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                        <PinnedProjects/>
                    </div>
                    </div>
                        <ProjectsTable/>
                </main>    
            </div>
            
            
               
    </>        
  )
}
 