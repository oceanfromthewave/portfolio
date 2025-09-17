export type Experience = {
  id: string
  period: string
  title: string
  organization: string
  summary: string
  achievements: string[]
  tags: string[]
  thumbnail: string
  thumbnailAlt: string
}

export type EducationItem = {
  title: string
  subtitle?: string
  period: string
  details?: string[]
}

export type TrainingItem = {
  title: string
  provider: string
  period: string
  description: string
}

export type SkillSet = {
  label: string
  items: string[]
}

export type Metric = {
  value: string
  label: string
  helpText?: string
}

export type About = {
  title: string
  description: string
  bullets: string[]
}

export type ExternalLink = {
  label: string
  href: string
  description?: string
}

export type CallToAction = {
  title: string
  message: string
  primary: {
    label: string
    href: string
  }
  secondary?: {
    label: string
    href: string
  }
}

export type Contact = {
  email: string
  github?: string
  phone?: string
  note?: string
}
