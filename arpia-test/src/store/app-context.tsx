import React, { useState } from "react"
import { Person } from "../DataModel/Person"

type Props={
    children: React.ReactNode
}

type AppContextValuesObj = {
        showGrid:boolean, 
        setShowGrid: () => void,
        showDialogDelete:boolean,
        setShowDialogDelete: (val:boolean) => void,
        showModalDetails:boolean,
        setShowModalDetails: (val:boolean) => void,
        peopleList:Person[],
        setPeopleList: (peopleList:Person[]) => void,
        isAscOrder:boolean,
        setIsAscOrder: () => void,
}

export const AppContext = React.createContext<AppContextValuesObj>({
    showGrid:true,
    setShowGrid: () => {},
    showDialogDelete:false,
    setShowDialogDelete:() => {},
    peopleList:[],
    setPeopleList:() => {},
    showModalDetails:false,
    setShowModalDetails:() => {},
    isAscOrder:false,
    setIsAscOrder:() => {},

})

const AppContextProvider: React.FC <Props>= (props)=>{
    
    const [showGrid, setShowGrid] = useState<boolean>(true)
    const [showDialogDelete, setShowDialogDelete] = useState<boolean>(false)
    const [showModalDetails, setShowModalDetails] = useState<boolean>(false)
    const [isAscOrder, setIsAscOrder] = useState(false)
    const [peopleList, setPoepleList] = useState<Person[]>([])


    function showGridHandler(){
        setShowGrid(!showGrid)
    }

    function setshowDialogDeleteHandler(val:boolean){
        setShowDialogDelete(val)
    }

    function setshowModalDetailsHandler(val:boolean){
        setShowModalDetails(val)
    }

    function setPeopleListHandler(people:Person[]){
        setPoepleList(people)
    }

    function setIsAscOrderHandler(){
        setIsAscOrder(!isAscOrder)
    }

    const contextValue:AppContextValuesObj = {
        showGrid: showGrid,
        setShowGrid: showGridHandler,
        showDialogDelete: showDialogDelete,
        setShowDialogDelete: setshowDialogDeleteHandler,
        peopleList:peopleList,
        setPeopleList: setPeopleListHandler,
        showModalDetails: showModalDetails,
        setShowModalDetails: setshowModalDetailsHandler,
        isAscOrder:isAscOrder,
        setIsAscOrder:setIsAscOrderHandler
    }
    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider