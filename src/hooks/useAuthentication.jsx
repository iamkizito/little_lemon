import { useState, useEffect } from "react";


const useAuthentication = (url, data, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch(url, data, options)
            if (response.status == 200) {
                let resp = await response.json()
                setData(resp.data)
            } else ( 
                setError(response.error)
            )
            setLoading(false)
        }

        fetchData()
    }, [])

    return {data, loading, error}
}

export default useAuthentication;