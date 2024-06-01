import { Resume } from 'components/Resume'
import { SearchAgain } from 'components/SearchAgain'
import { fetchLinkedInUser } from 'utils'

export default async function Page({ params }: { params: { handle: string } }) {
  const { handle } = params
  const data = await fetchLinkedInUser(handle)

  if (data?.error) {
    return (
      <div className='flex flex-col w-full'>
        <SearchAgain />

        <div className='flex flex-col items-center justify-center flex-1'>
          <p>{data?.error ?? "This profile can't be accessed"}</p>
        </div>
      </div>
    )
  }

  return <Resume data={data} />
}
