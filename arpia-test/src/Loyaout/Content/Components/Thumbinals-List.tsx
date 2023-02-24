import { useContext, useEffect, useState } from "react"
import { Person } from "../../../DataModel/Person"
import { AppContext } from "../../../store/app-context"
import Card from "../../../UI/Card/Card"


const ThumbinalList: React.FC = () => {

    const appCtx = useContext(AppContext)
  

    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {appCtx.peopleList.map((person) =>
                    <li key={person.id} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                        <Card person={person} id={person.id} imageUrl={person.imageUrl} name={person.name} />
                    </li>
                )}
            </ul>
        </>
    )
}
export default ThumbinalList