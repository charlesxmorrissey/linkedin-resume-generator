import { Text } from '@react-pdf/renderer'
import type { Educations } from 'types'

import { SchoolItem } from './SchoolItem'
import { styles } from '../Resume.styles'

interface EducationProps {
  educations: Educations[] | undefined
}

export const Education = ({ educations }: EducationProps) => (
  <>
    <Text style={{ ...styles.heading2Text, marginTop: 16 }}>Education</Text>

    {!!educations?.length &&
      educations.map((education, index) => (
        <SchoolItem key={`education-${index}`} data={education} />
      ))}
  </>
)