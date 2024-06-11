import Redis from 'ioredis'
// import profileData from 'mocks'
import type { Profile } from 'types'

const reportError = (error: unknown) => {
  let message

  if (error instanceof Error) {
    message = error.message
  } else {
    message = String(error)
  }

  console.error('error fetching profile', message)
}

const fetchLinkedInUser = async (handle: string): Promise<Profile> => {
  try {
    const response = await fetch(
      `https://linkedin-api8.p.rapidapi.com/?username=${handle}`,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-rapidapi-host': 'linkedin-api8.p.rapidapi.com',
          'x-rapidapi-key': process.env.RAPIDAPI_KEY as string,
        },
      },
    )

    const result = await response.json()
    // const result = profileData

    return result
  } catch (error) {
    reportError(error)
  }
}

export async function fetchLinkedInProfile(
  handle: string,
  redis?: Redis | null,
): Promise<Profile> {
  try {
    if (redis) {
      let cachedData: string | null = await redis.get('linkedInProfile')

      if (cachedData) {
        const data = JSON.parse(cachedData)

        if (data.length > 0) {
          return data
        }
      }

      const freshData = await fetchLinkedInUser(handle)

      await redis.set(
        'linkedInProfile',
        JSON.stringify(freshData),
        'EX',
        1 * 60 * 60,
      )

      return freshData
    }
  } catch (error) {
    reportError(error)
  }
}
