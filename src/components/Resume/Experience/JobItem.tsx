import { Link, Text } from '@react-pdf/renderer'
import type { Position } from 'types'
import { ConditionalWrapper } from 'components/Utilities'
import { formatDate } from 'utils'

import { styles } from '../Resume.styles'

interface JobItemProps {
  data: Position
}

export const JobItem = ({ data }: JobItemProps) => {
  const { companyName, companyURL, description, location, start, end, title } =
    data

  return (
    <>
      <Text style={{ ...styles.heading3Text, marginBottom: 2 }}>{title}</Text>

      <ConditionalWrapper
        condition={!!companyURL}
        wrapper={(children) => <Link src={companyURL}>{children}</Link>}
      >
        <Text style={{ ...styles.smallText, marginBottom: 2 }}>
          {companyName}
        </Text>
      </ConditionalWrapper>

      <Text style={{ ...styles.smallText, marginBottom: 2 }}>
        {formatDate(start, end)}
      </Text>

      <Text style={{ ...styles.smallText, marginBottom: 2 }}>{location}</Text>

      <Text style={styles.smallText}>{description}</Text>
    </>
  )
}
