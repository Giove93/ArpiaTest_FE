import { useLocation } from "react-router-dom"
const UserDetail: React.FC = () => {
    const location = useLocation()
    const person = location.state?.data
    return (
        <>
            <div className="min-h-full">
                <main className="py-10">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                        <div className="flex items-center space-x-5">
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <img
                                        className="h-16 w-16 rounded-full"
                                        src={person.imageUrl}
                                    />
                                    <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{person?.name}</h1>
                                <p className="text-sm font-medium text-gray-500">
                                    @{person?.username}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
                        <div className="space-y-6 lg:col-span-2 lg:col-start-1">
                            {/* Description list*/}
                            <section aria-labelledby="applicant-information-title">
                                <div className="bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                                            User Information
                                        </h2>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Website</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{person.website}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{person.email}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Full Address</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{person.address.city} {person.address.street} - {person.address.zipcode}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{person.phone}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{person.company.name}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Company Catchphrase</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{person.company.catchPhrase}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default UserDetail