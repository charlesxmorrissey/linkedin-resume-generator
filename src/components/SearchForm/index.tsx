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
    <form
      className='flex w-full max-w-prose justify-center'
      onSubmit={handleOnSubmit}
    >
      <div className='flex px-4 w-full border shadow rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200 focus:ring-blue-500 focus:border-blue-500'>
        <input
          className='outline-none w-full bg-transparent dark:text-gray-600 text-sm  h-12'
          onChange={handleOnChange}
          placeholder='Search LinkedIn by profile name'
          type='text'
          value={inputValue}
        />

        <button
          className='disabled:text-gray-400'
          disabled={!inputValue}
          type='submit'
        >
          <SearchIcon className='h-6 w-6 shrink-0 fill-current' />
        </button>
      </div>
    </form>
  )
}
