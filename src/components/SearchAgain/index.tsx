import Link from 'next/link'

interface SearchAgainProps {
  text?: string
  url?: string
}

export const SearchAgain = ({
  text = 'Search Again',
  url = '/',
}: SearchAgainProps) => (
  <header className='mb-4'>
    <Link className='text-blue-600 hover:text-blue-400' href={url}>
      {text}
    </Link>
  </header>
)
