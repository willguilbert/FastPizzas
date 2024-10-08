import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchOrder() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-yellow-200 px-2 py-2 text-sm transition-all duration-1000 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      ></input>
    </form>
  )
}

export default SearchOrder
