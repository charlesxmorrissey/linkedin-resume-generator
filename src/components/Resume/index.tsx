'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Page, View, Document } from '@react-pdf/renderer'
import type { Profile, ProfileData } from 'types'

import { Education } from './Education'
import { Experience } from './Experience'
import { Header } from './Header'
import { SkillList } from './SkillList'
import { styles } from './Resume.styles'

interface ResumeProps {
  data: Profile
}

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
)

export const Resume = ({ data }: ResumeProps) => {
  const { educations, firstName, lastName, position, skills } =
    data as ProfileData

  return (
    <>
      <header>
        <Link className='text-blue-600' href='/'>
          Search Again
        </Link>
      </header>

      <PDFViewer style={styles.viewer}>
        <Document title={`${firstName} ${lastName}`}>
          <Page style={styles.page}>
            <View style={styles.section}>
              <Header data={data} />
              <Experience positions={position} />
              <Education educations={educations} />
              <SkillList skills={skills} />
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  )
}
