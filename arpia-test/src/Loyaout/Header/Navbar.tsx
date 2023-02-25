import { useContext, useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ListBulletIcon, UserCircleIcon, ArrowPathIcon} from '@heroicons/react/20/solid'
import { AppContext } from '../../store/app-context'
const Navbar: React.FC = () => {

    const appCtx = useContext(AppContext)

    const showGridHandler= (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       appCtx.setShowGrid()
    }

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="bg-gray-800 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className='text-white'>
                                        LOGO HERE
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center">
                           
                              {!appCtx.showGrid && <div className="flex-shrink-0">
                                    <button
                                        onClick={showGridHandler}
                                        type="button"
                                        className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <UserCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>Show As Grid</span>
                                    </button>
                                </div>}
                                
                                {appCtx.showGrid && <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                                    <button
                                    onClick={showGridHandler}
                                        type="button"
                                        className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <ListBulletIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>Show As List</span>
                                    </button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
export default Navbar