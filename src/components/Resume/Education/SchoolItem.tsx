import { Text } from '@react-pdf/renderer'
import { useMemo } from 'react'
import type { Educations } from 'types'
import { formatDate } from 'utils'

import { styles } from '../Resume.styles'

interface SchoolItemProps {
  data: Educations
}

export const SchoolItem = ({ data }: SchoolItemProps) => {
  const { degree, end, fieldOfStudy, schoolName, start } = data

  const date = useMemo(() => formatDate(start, end), [end, start])

  return (
    <>
      <Text style={{ ...styles.heading3Text, marginBottom: 2 }}>
        {schoolName}
      </Text>

      {date && (
        <Text style={{ ...styles.smallText, marginBottom: 2 }}>{date}</Text>
      )}

      {fieldOfStudy && (
        <Text style={{ ...styles.smallText, marginBottom: 2 }}>
          {fieldOfStudy}
        </Text>
      )}

      {degree && (
        <Text style={{ ...styles.smallText, marginBottom: 2 }}>{degree}</Text>
      )}
    </>
  )
}
