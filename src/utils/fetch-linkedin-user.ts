import results from 'mocks/index.json'
import type { Profile } from 'types'

export async function fetchLinkedInUser(handle: string): Promise<Profile> {
  try {
    // const response = await fetch(
    //   `https://linkedin-api8.p.rapidapi.com/?username=${handle}`,
    //   {
    //     cache: 'no-store',
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //       'x-rapidapi-host': 'linkedin-api8.p.rapidapi.com',
    //       'x-rapidapi-key': process.env.RAPIDAPI_KEY as string,
    //     },
    //   },
    // )

    // const result = await response.json()
    // console.log('result::', result)
    const result =
      handle === 'charles-x-morrissey-b366976'
        ? results
        : { error: "This profile can't be accessed" }

    return result
  } catch (error) {
    let message

    if (error instanceof Error) {
      message = error.message
    } else {
      message = String(error)
    }

    console.error('error fetching profile', message)
  }
}
