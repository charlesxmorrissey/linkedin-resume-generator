import Link from 'next/link'

import { Resume } from 'components/Resume'
import { fetchLinkedInUser } from 'utils'

export default async function Page({ params }: { params: { handle: string } }) {
  const { handle } = params
  const data = await fetchLinkedInUser(handle)

  if (data?.error) {
    return (
      <>
        <p>{data?.error ?? "This profile can't be accessed"}</p>

        <Link href='/'>Search</Link>
      </>
    )
  }

  return <Resume data={data} />
}
