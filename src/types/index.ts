interface BgImage {
  height: number
  url: string
  width: number
}

interface Languages {
  name: string
  proficiency: string
}

interface Educations {
  activities: string
  degree: string
  description: string
  end: {
    year: number
    month: number
    day: number
  }
  fieldOfStudy: string
  grade: string
  schoolId: string
  schoolName: string
  start: {
    year: number
    month: number
    day: number
  }
  url: string
}

interface Position {
  companyIndustry: string
  companyLogo: string
  companyName: string
  companyStaffCountRange: string
  companyURL: string
  companyUsername: string
  description: string
  employmentType: string
  end: { year: number; month: number; day: number }
  location: string
  multiLocaleCompanyName: { en_US?: string } | null
  multiLocaleTitle: { en_US?: string } | null
  start: { year: number; month: number; day: number }
  title: string
}

interface Skills {
  endorsementsCount?: number
  name: string
  passedSkillAssessment: boolean
}

export interface ProfileData {
  backgroundImage: BgImage[]
  error?: string
  firstName: string
  educations: Educations[]
  fullPositions?: Position[]
  geo?: {
    country: string
    city: string
    full: string
  }
  headline?: string
  isHiring: boolean
  isOpenToWork: boolean
  languages?: Languages[]
  lastName: string
  position: Position[]
  profilePicture: string
  skills: Skills[]
  summary?: string
  urn: string
  username: string
}
