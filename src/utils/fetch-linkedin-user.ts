import Redis from 'ioredis'
import type { Profile } from 'types'

export async function fetchLinkedInProfile(
  handle: string,
  redis: Redis | null,
) {
  try {
    if (redis) {
      let cachedData: any = await redis.get('linkedInProfile')

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
    console.error(error)

    return {
      source: 'error',
      data: [],
    }
  }
}

export async function fetchLinkedInUser(handle: string): Promise<Profile> {
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
