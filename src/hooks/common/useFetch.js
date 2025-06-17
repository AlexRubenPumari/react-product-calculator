export function useFetch(asyncFetchFn) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    asyncFetchFn()
      .then(data => (setData(data), setError(null)))
      .catch(err => (setError(err), setData(null)))
      .finally(() => setIsLoading(false))
  }, [])

  return { data, isLoading, error }
}