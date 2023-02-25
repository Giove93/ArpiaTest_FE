import TableList from './Components/Table-List'
import ThumbinalList from './Components/Thumbinals-List'
import useHttp from '../../Hooks/use-http'
import { useContext, useEffect, useState } from 'react'
import { Person } from '../../DataModel/Person'
import { AppContext } from '../../store/app-context'
import React from 'react'

const Content: React.FC = () => {

    const appCtx = useContext(AppContext)

   

    const sortListHandler = () => {
        if(!appCtx.isAscOrder){
            const strAscending = [...appCtx.peopleList].sort((a, b) =>
                a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1,
            );
            appCtx.setPeopleList(strAscending)
            appCtx.setIsAscOrder()
        }
        else{
            const strAscending = [...appCtx.peopleList].sort((a, b) =>
                a.username.toLowerCase() > b.username.toLowerCase() ? -1 : 1,
            );
            appCtx.setPeopleList(strAscending)
            appCtx.setIsAscOrder()
        }
       
    }

    return (
        <div className="py-10">
            <header>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight">
            Our team!
          </h2>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:mt-0 md:ml-4">
       { !appCtx.isAscOrder &&  <button
            onClick={sortListHandler}
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Sort user by username from A-Z
          </button>}

          { appCtx.isAscOrder &&  <button
            onClick={sortListHandler}
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Sort user by username from Z-A
          </button>}
        </div>
      </div>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-8">
                    {appCtx.showGrid && <ThumbinalList />}
                    {!appCtx.showGrid && <TableList />}
                </div>
            </main>
        </div>
    )
}

export default React.memo(Content) 