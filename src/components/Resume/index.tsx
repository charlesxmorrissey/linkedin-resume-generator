'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Page, Text, View, Document } from '@react-pdf/renderer'
import type { ProfileData } from 'types'

import { styles } from './Resume.styles'

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
)

export const Resume = ({ data }: { data?: ProfileData | {} }) => {
  console.log('Resume::', data)

  return (
    <>
      <header>
        <Link href='/'>Search</Link>
      </header>

      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size='A4' style={styles.page}>
            <View style={styles.section}>
              <Text break>Hello</Text>
            </View>

            <View style={styles.section}>
              <Text break>World</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  )
}
