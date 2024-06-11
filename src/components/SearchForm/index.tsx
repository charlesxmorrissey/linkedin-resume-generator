'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import SearchIcon from 'assets/icons/search.svg'
import { validateUrlFromInput } from 'utils'

const sanitizeStr = (val: string): string => val.trim().replace(/\//g, '')

export const SearchForm = () => {
  const router = useRouter()

  const [formError, setFormError] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e

    const error = validateUrlFromInput(value)

    setFormError(error ?? null)
    setInputValue(value)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputValue) {
      const urlParam = sanitizeStr(inputValue)

      setFormError(null)

      router.push(`/${urlParam}`)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center flex-1 relative'>
      <form
        className='flex flex-col w-full max-w-prose justify-center'
        onSubmit={handleOnSubmit}
      >
        <label className='text-lg pb-2 text-center' htmlFor='search-input'>
          Generate a resume PDF from LinkedIn
        </label>

        <div className='flex px-4 w-full border shadow rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200 focus:ring-blue-500 focus:border-blue-500'>
          <input
            autoComplete='off'
            className='outline-none w-full bg-transparent dark:text-gray-600 text-sm h-12'
            id='search-input'
            onChange={handleOnChange}
            placeholder='Search LinkedIn by profile name'
            type='text'
            value={inputValue}
          />

          <button
            className='disabled:text-gray-400 hover:text-blue-500 focus:text-blue-500 outline-none'
            disabled={!inputValue || !!formError}
            type='submit'
          >
            <SearchIcon className='h-6 w-6 shrink-0 fill-current' />
          </button>
        </div>

        <div className='h-6 text-red-600 mt-2 ml-4'>
          {formError && formError}
        </div>
      </form>
    </div>
  )
}
