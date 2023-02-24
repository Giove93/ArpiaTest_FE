import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'
import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Person } from '../../DataModel/Person'
import { AppContext } from '../../store/app-context'
import DialogConfirmation from '../Dialog-Confirmation/Dialog-Confirmation'
import ModalDetail from '../Modal-Detail/modal-detail'

type Props = {
    imageUrl: string,
    name: string,
    id:number,
    person:Person
}
const Card: React.FC<Props> = (props) => {

    const appCtx = useContext(AppContext)
    const [openDialog,setOpenDialog] = useState<boolean>(appCtx.showDialogDelete)
    const [openModal,setOpenModal] = useState<boolean>(appCtx.showModalDetails)

    const showDeleteDialogHandler= (event: React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
        setOpenDialog(true)
     }

     const showModalDetailHandler= (event: React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
        setOpenModal(true)
     }

    const updatePropFromChild = (val:boolean) => {
        setOpenDialog(val)
        setOpenModal(val)
    } 

    

  

    return (
        <> 
        {ReactDOM.createPortal(
            <DialogConfirmation id={props.id} showDialog={openDialog} setOpenDialog={updatePropFromChild}/>,
            document.getElementById("dialog-delete-user-root") as HTMLElement
        )}
         {ReactDOM.createPortal(
            <ModalDetail person={props.person} id={props.id} showModal={openModal} setOpenModal={updatePropFromChild}/>,
            document.getElementById("modal-user-detail-root") as HTMLElement
        )}
            <div className="relative before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip={props.name}>
                <Link to={`/user/${props.id}`} state={{data:props.person}}>
                    <div className="flex flex-1 flex-col p-8">
                        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={props.imageUrl} alt="" />
                    </div>
                </Link>
                <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                        <a
                            onClick={showModalDetailHandler}
                            href="#"
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                            <PencilSquareIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="ml-3">Edit</span>
                        </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1 hover:text-red-500">
                        <a
                            onClick={showDeleteDialogHandler}
                            href="#"
                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-red-500"
                        >
                            <TrashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="ml-3">Delete</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Card