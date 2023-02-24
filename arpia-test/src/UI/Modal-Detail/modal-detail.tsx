import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Person } from '../../DataModel/Person'
import { AppContext } from '../../store/app-context'

type Props = {
  id:number,
  showModal:boolean,
  setOpenModal:(val:boolean)=>void,
  person:Person
}

const ModalDetail: React.FC<Props> = (props) => {

  const [showModalDetails, setShowModalDetails] = useState<boolean>(props.showModal)
  const appCtx = useContext(AppContext)

  const nameRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const websiteRef = useRef<HTMLInputElement>(null)
  const companyNameRef = useRef<HTMLInputElement>(null)
  const streetRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const zipCodeRef = useRef<HTMLInputElement>(null)
  const suiteRef = useRef<HTMLInputElement>(null)
  

  const saveButtonRef = useRef(null)

  const showModalHandler = (val: boolean) => {
    setShowModalDetails(val)
    props.setOpenModal(val)

  }

  useEffect(()=>{
    setShowModalDetails(props.showModal)
},[props.showModal])

  const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
     event.preventDefault()
     let updatedPerson = updateNewPerson()
     appCtx.setPeopleList(appCtx.peopleList.map(el => (el.id === updatedPerson.id ? updatedPerson : el)))
     setShowModalDetails(false)
     props.setOpenModal(false)
  }

  const updateNewPerson = ():Person => {
    let updatedPerson:Person = {
      username: usernameRef.current!.value,
      name: nameRef.current!.value,
      id: props.person.id,
      imageUrl: props.person.imageUrl,
      email: emailRef.current!.value,
      address: {
        street: streetRef.current!.value,
        suite: suiteRef.current!.value,
        city: cityRef.current!.value,
        zipcode: zipCodeRef.current!.value,
        geo: {
          lat: props.person.address.geo.lat,
          lng: props.person.address.geo.lng
        }
      },
      phone: phoneRef.current!.value,
      website: websiteRef.current!.value,
      company: {
        name: companyNameRef.current!.value,
        catchPhrase: props.person.company.catchPhrase,
        bs: props.person.company.bs
      }
    }

    return updatedPerson
    
  }

  return (
    <>
      <Transition.Root show={showModalDetails} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={saveButtonRef} onClose={showModalHandler}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-1/2 sm:mx-auto  sm:p-6">
                  <div>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
                        </div>
                      </div>
                      <div className="mt-5 md:col-span-2 md:mt-0">
                      <form>
                          <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Name
                                  </label>
                                  <input
                                    ref={nameRef}
                                    defaultValue={props.person.name}
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                  </label>
                                  <input
                                  defaultValue={props.person.username}
                                  ref={usernameRef}
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="family-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Email address
                                  </label>
                                  <input
                                  defaultValue={props.person.email}
                                  ref={emailRef}
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone
                                  </label>
                                  <input
                                  defaultValue={props.person.phone}
                                  ref={phoneRef}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                               
                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Website
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                      http://
                                    </span>
                                    <input
                                    ref={websiteRef}
                                    defaultValue={props.person.website}
                                      type="text"
                                      name="company-website"
                                      id="company-website"
                                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      placeholder="www.example.com"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                                    Company Name
                                  </label>
                                  <input
                                  defaultValue={props.person.company.name}
                                  ref={companyNameRef}
                                    type="text"
                                    name="company-name"
                                    id="company-name"
                                    autoComplete="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6">
                                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                    Street address
                                  </label>
                                  <input
                                  defaultValue={props.person.address.street}
                                  ref={streetRef}
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                    City
                                  </label>
                                  <input
                                  defaultValue={props.person.address.city}
                                  ref={cityRef}
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                    ZIP / Postal code
                                  </label>
                                  <input
                                  ref={zipCodeRef}
                                  defaultValue={props.person.address.zipcode}
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                  <label htmlFor="suite" className="block text-sm font-medium text-gray-700">
                                    Suite
                                  </label>
                                  <input
                                  ref={suiteRef}
                                    defaultValue={props.person.address.suite}
                                    type="text"
                                    name="suite"
                                    id="suite"
                                    autoComplete="address-level1"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                              <button
                                ref={saveButtonRef}
                                onClick={onSubmitHandler}
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ModalDetail