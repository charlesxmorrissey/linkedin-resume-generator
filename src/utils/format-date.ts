import type { EmploymentDate } from 'types'

export const formatDate = (
  start: EmploymentDate | undefined,
  end: EmploymentDate | undefined,
): string | undefined => {
  if (start?.month === 0 || start?.year === 0) {
    return
  }

  let dateStr = `${start?.month}/${start?.year}`

  if (end?.month && end?.year) {
    dateStr += ` - ${end?.month}/${end?.year}`
  }

  return dateStr
}
