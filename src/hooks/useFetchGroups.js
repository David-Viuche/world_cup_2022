import { useEffect, useState } from 'react'
import { getGroups } from '../helpers/getGroups'

export const useFetchGroups = () => {
  const [groups, setGroups] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const fetchData = async () => {
    const data = await getGroups()
    setGroups(data)
    setisLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    groups,
    isLoading
  }
}
