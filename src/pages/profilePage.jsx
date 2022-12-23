import { Fragment, useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import {
  ArrowLeftOnRectangleIcon,
  Bars3BottomLeftIcon,
  BellIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CogIcon,
  DocumentMagnifyingGlassIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'Jobs', href: '#', icon: BriefcaseIcon, current: false },
  { name: 'Applications', href: '#', icon: DocumentMagnifyingGlassIcon, current: false },
  { name: 'Messages', href: '#', icon: ChatBubbleOvalLeftEllipsisIcon, current: false },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: true },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)

  return (
    <>
    <div>
        <div className="">
          <div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
       

            <main className="flex-1">
              <div className="relative mx-auto max-w-4xl md:px-8 xl:px-0">
                <div className="pt-10 pb-16">
                  <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Profile Page</h1>
                  </div>
                  <div className="px-4 sm:px-6 md:px-0">
                    <div className="py-6">
                      {/* Tabs */}
                      <div className="lg:hidden">
                        <label htmlFor="selected-tab" className="sr-only">
                          Select a tab
                        </label>
            
                      </div>
                

                      {/* Description list with inline editing */}
                      <div className="mt-5 divide-y divide-gray-200">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                          <p className="max-w-2xl text-sm text-gray-500">
                            This information will be displayed publicly so be careful what you share.
                          </p>
                        </div>
                        <div className="mt-6">
                          <dl className="divide-y divide-gray-200">
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                              <dt className="text-sm font-medium text-gray-500">Name</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <span className="flex-grow">Chelsea Hagon</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                              <dt className="text-sm font-medium text-gray-500">Email</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <span className="flex-grow">chelsea.hagon@example.com</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                              <dt className="text-sm font-medium text-gray-500">Bio</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <span className="flex-grow">Bio goes Here</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                              <dt className="text-sm font-medium text-gray-500">Job title</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <span className="flex-grow">Human Resources Manager</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
        </>
  )
}
