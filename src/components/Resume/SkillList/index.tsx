import { Text } from '@react-pdf/renderer'
import type { Skills } from 'types'
import { useMemo } from 'react'

import { styles } from '../Resume.styles'

interface SkillProps {
  skills: Skills[]
}

export const SkillList = ({ skills }: SkillProps) => {
  const skillList = useMemo(
    () =>
      skills.map(
        ({ name }, index) => `${name}${index < skills.length - 1 ? ', ' : ''}`,
      ),
    [skills],
  )

  return (
    <>
      <Text style={{ ...styles.heading2Text, marginTop: 16 }}>Skills</Text>

      {skillList && (
        <Text style={{ ...styles.smallText, marginBottom: 2 }}>
          {skillList}
        </Text>
      )}
    </>
  )
}
