'use client'

import dynamic from 'next/dynamic'
import { Page, View, Document, Text } from '@react-pdf/renderer'
import type { Profile, ProfileData } from 'types'
import { SearchAgain } from 'components/SearchAgain'

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
    loading: () => (
      <div className='flex flex-col items-center justify-center flex-1'>
        <p>Loading PDF...</p>
      </div>
    ),
  },
)

export const Resume = ({ data }: ResumeProps) => {
  const { educations, firstName, lastName, position, skills } =
    data as ProfileData

  return (
    <div className='flex flex-col w-full'>
      <SearchAgain />

      <PDFViewer style={styles.viewer}>
        <Document title={`${firstName} ${lastName}`}>
          <Page style={styles.page}>
            <View style={styles.section}>
              <Header data={data} />

              {!!position?.length && <Experience positions={position} />}

              {!!educations?.length && (
                <View break>
                  <Education educations={educations} />
                </View>
              )}

              {!!skills?.length && (
                <View break>
                  <SkillList skills={skills} />
                </View>
              )}
            </View>

            <Text
              fixed
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              style={styles.pageNumber}
            />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}
