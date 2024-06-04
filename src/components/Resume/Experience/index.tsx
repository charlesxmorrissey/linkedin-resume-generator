import { Text } from '@react-pdf/renderer'
import type { Position } from 'types'

import { JobItem } from './JobItem'
import { styles } from '../Resume.styles'

interface ExperienceProps {
  positions: Position[]
}

export const Experience = ({ positions }: ExperienceProps) => (
  <>
    <Text style={{ ...styles.heading2Text, marginTop: 16 }}>Experience</Text>

    {positions.map((position, index) => (
      <JobItem key={`position-${index}`} data={position} />
    ))}
  </>
)
