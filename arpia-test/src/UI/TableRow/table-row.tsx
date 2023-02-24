import { useContext, useState } from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
import { Person } from "../../DataModel/Person"
import { AppContext } from "../../store/app-context"
import DialogConfirmation from "../Dialog-Confirmation/Dialog-Confirmation"
import ModalDetail from "../Modal-Detail/modal-detail"

type Props = {
  person: Person
}

const TableRow: React.FC<Props> = (props) => {
  const appCtx = useContext(AppContext)
  const [openDialog, setOpenDialog] = useState<boolean>(appCtx.showDialogDelete)
  const [openModal, setOpenModal] = useState<boolean>(appCtx.showModalDetails)

  const showDeleteDialogHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setOpenDialog(true)
  }
  const showModalDetailHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setOpenModal(true)
  }

  const updatePropFromChild = (val: boolean) => {
    setOpenDialog(val)
    setOpenModal(val)
  }

  return (
    <>
      {ReactDOM.createPortal(
        <DialogConfirmation id={props.person.id} showDialog={openDialog} setOpenDialog={updatePropFromChild} />,
        document.getElementById("dialog-delete-user-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalDetail person={props.person} id={props.person.id} showModal={openModal} setOpenModal={updatePropFromChild} />,
        document.getElementById("modal-user-detail-root") as HTMLElement
      )}
      <tr >
        <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm sm:pl-0">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={props.person.imageUrl} alt="" />
            </div>
            <div className="ml-4">
              <div className="font-medium text-gray-900">{props.person.name}</div>
              <div className="text-gray-500">{props.person.email}</div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <div className="text-gray-900">{props.person.username}</div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <div className="text-gray-900">{props.person.phone}</div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{props.person.website}</td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-0">
        <Link to={`/user/${props.person.id}`} state={{data:props.person}} className="text-gray-500 hover:text-gray-900 pr-4">
            Profile<span className="sr-only">, {props.person.name}</span>
          </Link>
          <a onClick={showModalDetailHandler}  href="#" className="text-indigo-600 hover:text-indigo-900 pr-4">
            Edit<span className="sr-only">, {props.person.name}</span>
          </a>
          <a onClick={showDeleteDialogHandler} href="#" className="text-red-600 hover:text-red-900">
            Delete<span className="sr-only">, {props.person.name}</span>
          </a>
         
        </td>
      </tr>
    </>
  )
}

export default TableRow