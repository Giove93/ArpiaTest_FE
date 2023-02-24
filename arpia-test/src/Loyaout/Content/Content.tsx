import TableList from './Components/Table-List'
import ThumbinalList from './Components/Thumbinals-List'
import useHttp from '../../Hooks/use-http'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Person } from '../../DataModel/Person'
import { AppContext } from '../../store/app-context'
import ModalDetail from '../../UI/Modal-Detail/modal-detail'
import { ListBulletIcon } from '@heroicons/react/20/solid'

const Content: React.FC = () => {
    const urlPeopleList = "https://jsonplaceholder.typicode.com/users"
    const [isLoadingPeople, errorPeopleReq, sendPeopleReq] = useHttp(urlPeopleList, populatePeopleList)
    const [isAscOrder, setIsAscOrder] = useState(false)

    const appCtx = useContext(AppContext)

    useEffect(() => {
        sendPeopleReq();
    }, [])

    function populatePeopleList(data: Person[]) {
        if (data && data.length > 0) {
            data.forEach(person => {
                person.imageUrl = `https://avatars.dicebear.com/v2/avataaars/${person.username}.svg?options[mood][]=happy`
            });
            appCtx.setPeopleList(data)
        }
    }

    const sortListHandler = () => {
        if(!isAscOrder){
            const strAscending = [...appCtx.peopleList].sort((a, b) =>
                a.username > b.username ? 1 : -1,
            );
            appCtx.setPeopleList(strAscending)
            setIsAscOrder(!isAscOrder)
        }
        else{
            const strAscending = [...appCtx.peopleList].sort((a, b) =>
                a.username > b.username ? -1 : 1,
            );
            appCtx.setPeopleList(strAscending)
            setIsAscOrder(!isAscOrder)
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
       { !isAscOrder &&  <button
            onClick={sortListHandler}
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Sort user by username from A-Z
          </button>}

          { isAscOrder &&  <button
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

export default Content