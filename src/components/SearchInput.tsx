import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
  onSearch: (searchText: string) => void
}

export default function SearchInput({ onSearch }: Props) {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='flex-1 flex'>
      <form
        className='w-full flex md:ml-0'
        onSubmit={(event) => {
          event.preventDefault()
          if (searchInputRef.current) onSearch(searchInputRef.current.value)
        }}
      >
        <label htmlFor='search-field' className='sr-only'>
          Search
        </label>
        <div className='relative w-full text-gray-400 focus-within:text-orange-500'>
          <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
            <BsSearch className='h-4 w-4' aria-hidden='true' />
          </div>
          <input
            id='search-field'
            ref={searchInputRef}
            className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
            placeholder='Search games'
            type='search'
            name='search'
          />
        </div>
      </form>
    </div>
  )
}
