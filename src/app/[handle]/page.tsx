import Redis from 'ioredis'

import { Resume } from 'components/Resume'
import { SearchAgain } from 'components/SearchAgain'
import type { Profile } from 'types'
import { fetchLinkedInProfile } from 'utils'

const displayErrorMessage = (data: Profile) => {
  let message = "This profile can't be accessed"

  if (data?.error) {
    message = data.error
  }

  if (data?.message) {
    message = data.message
  }

  return message
}

export default async function Page({ params }: { params: { handle: string } }) {
  const { handle } = params
  const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null
  const data = await fetchLinkedInProfile(handle, redis)

  if (data?.error || data?.message) {
    return (
      <div className='flex flex-col w-full'>
        <SearchAgain />

        <div className='flex flex-col items-center justify-center flex-1'>
          <p>{displayErrorMessage(data)}</p>
        </div>
      </div>
    )
  }

  return <Resume data={data} />
}
