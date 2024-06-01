interface BgImage {
  height: number
  url: string
  width: number
}

interface Languages {
  name: string
  proficiency: string
}

export interface EmploymentDate {
  year?: number
  month?: number
  day?: number
}

export interface Educations {
  activities: string
  degree: string
  description: string
  end?: EmploymentDate
  fieldOfStudy: string
  grade: string
  schoolId: string
  schoolName: string
  start?: EmploymentDate
  url: string
}

export interface Position {
  companyIndustry: string
  companyLogo: string
  companyName: string
  companyStaffCountRange: string
  companyURL: string
  companyUsername: string
  description: string
  employmentType: string
  end?: EmploymentDate
  location: string
  multiLocaleCompanyName: { en_US?: string } | null
  multiLocaleTitle: { en_US?: string } | null
  start?: EmploymentDate
  title: string
}

export interface Skills {
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
  geo: {
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

export type Profile = ProfileData | { error: string } | undefined
