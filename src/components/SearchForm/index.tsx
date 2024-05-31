'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import SearchIcon from 'assets/icons/search.svg'

export const SearchForm = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e

    setInputValue(value)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const urlParam = inputValue.trim()

    if (inputValue) {
      router.push(`/${urlParam}`)
    }
  }

  return (
    <form className='w-full' onSubmit={handleOnSubmit}>
      <div className='flex px-4 py-3 w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200'>
        <input
          className='w-full outline-none bg-transparent text-gray-600 text-sm'
          onChange={handleOnChange}
          placeholder='Search LinkedIn by profile name'
          type='text'
          value={inputValue}
        />

        <button
          className=' disabled:text-gray-400'
          disabled={!inputValue}
          type='submit'
        >
          <SearchIcon className='h-6 w-6 shrink-0 fill-current' />
        </button>
      </div>
    </form>
  )
}
