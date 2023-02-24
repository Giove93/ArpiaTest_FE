import { useCallback, useEffect, useState } from "react"

const useHttp = (url: string, applyData: any) => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    const sendRequest = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Request Failed!");
            }
            const data = await response.json()
            applyData(data)
        } catch (error: any) {
            setError(error.message || "Something went wrong!")
        }
    }, [url, applyData])

    return [
        isLoading,
        error,
        sendRequest
    ]
}

export default useHttp