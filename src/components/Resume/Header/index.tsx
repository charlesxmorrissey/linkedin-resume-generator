import { Image, Text } from '@react-pdf/renderer'
import type { Profile, ProfileData } from 'types'

import { styles } from '../Resume.styles'

interface HeaderProps {
  data: Profile
}

export const Header = ({ data }: HeaderProps) => {
  const {
    firstName,
    geo: { full: location },
    headline,
    lastName,
    profilePicture,
    summary,
  } = data as ProfileData

  return (
    <>
      {profilePicture && (
        <Image style={styles.profileImage} src={profilePicture} />
      )}

      <Text style={styles.heading1Text}>{`${firstName} ${lastName}`}</Text>

      {headline && (
        <Text style={{ ...styles.smallText, marginBottom: 8 }}>{headline}</Text>
      )}

      <Text style={{ ...styles.smallText, marginBottom: 8 }}>{location}</Text>

      {summary && (
        <>
          <Text style={styles.heading2Text}>About</Text>

          <Text style={styles.smallText}>{summary}</Text>
        </>
      )}
    </>
  )
}
