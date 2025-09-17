import type { FC, ReactNode } from 'react'
import type { Contact } from '../types/content'

type ContactSectionProps = {
  contact: Contact
}

type ContactEntry = {
  label: string
  value: ReactNode
}

const ContactSection: FC<ContactSectionProps> = ({ contact }) => {
  const entries: ContactEntry[] = []
  const githubUsername = contact.github?.replace(/^https?:\/\/(www\.)?github\.com\//i, '')

  if (contact.github) {
    entries.push({
      label: 'GitHub',
      value: (
        <a
          href={contact.github}
          className="contact-link contact-link--secondary contact-list__value"
          target="_blank"
          rel="noopener noreferrer"
        >
          {githubUsername ? `@${githubUsername}` : contact.github.replace(/^https?:\/\//i, '')}
        </a>
      ),
    })
  }

  if (contact.email) {
    entries.push({
      label: 'Email',
      value: (
        <a
          href={`mailto:${contact.email}`}
          className="contact-link contact-list__value"
        >
          {contact.email}
        </a>
      ),
    })
  }

  if (contact.phone) {
    entries.push({
      label: 'Phone',
      value: <span className="contact-list__value">{contact.phone}</span>,
    })
  }

  return (
    <section className="section">
      <h2>연락처</h2>
      <div className="contact">
        <ul className="contact-list">
          {entries.map((entry) => (
            <li className="contact-list__item" key={entry.label}>
              <span className="contact-list__label">{entry.label}</span>
              {entry.value}
            </li>
          ))}
        </ul>
        {contact.note ? <p className="contact-note">{contact.note}</p> : null}
      </div>
    </section>
  )
}

export default ContactSection
