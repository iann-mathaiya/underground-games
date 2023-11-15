import { useEffect, useState } from "react"
import apiClient from "@/services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"

interface FetchResponse<T> {
  count: number
  results: T[]
}

export default function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[],) {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results)
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, dependencies ? [...dependencies] : [])

  return { data, error, isLoading }
}
