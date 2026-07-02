import { useParams, useNavigate, Navigate } from 'react-router-dom'
import ContactFilters from '../components/contacts/ContactFilters'
import ContactList from '../components/contacts/ContactList'
import ContactDetail from '../components/contacts/ContactDetail'
import { contacts, contactDetails } from '../data/contactsData'

export default function ContactsPage() {
  const { contactId } = useParams()
  const navigate = useNavigate()
  const activeId = Number(contactId)

  if (!contactId) return <Navigate to="/contacts/1" replace />

  const detail = contactDetails[activeId]
  const activeContact = contacts.find((c) => c.id === activeId)

  return (
    <div className="relative flex h-full flex-1 overflow-hidden rounded-xl border-[7px] border-transparent bg-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.5)] dark:bg-[#0091ff0d] dark:shadow-[0_0_0_1px_rgb(0,145,255,0.15)] md:gap-5">
      <ContactFilters />
      <ContactList contacts={contacts} activeId={activeId} onSelect={(id) => navigate(`/contacts/${id}`)} />
      <ContactDetail contact={activeContact} detail={detail} />
    </div>
  )
}
