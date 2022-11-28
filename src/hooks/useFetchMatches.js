import { useEffect, useState } from 'react'
import { getMatches } from '../helpers/getMatches'

export const useFetchMatches = (abrev) => {
  const [matches, setMatches] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const fetchData = async () => {
    const data = await getMatches(abrev)
    setMatches(data)
    setisLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    matches,
    isLoading
  }
}
