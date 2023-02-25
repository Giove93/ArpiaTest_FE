import { useContext} from "react"
import { AppContext } from "../../../store/app-context"

import TableRow from "../../../UI/TableRow/table-row"

const TableList: React.FC = () => {
  const appCtx = useContext(AppContext)
  return (
    <>
      <div className="px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Username
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Phone Number
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Website
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-6 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {appCtx.peopleList.map((person) => (
                    <TableRow key={person.id} person={person} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableList