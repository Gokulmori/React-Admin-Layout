import { ArrowDownAZ } from 'lucide-react'
import Avatar from './Avatar'

export default function ContactList({ contacts, activeId, onSelect }) {
  return (
    <div className="flex h-full w-full flex-col md:w-64 xl:w-80 2xl:w-96">
      <header className="flex h-11 shrink-0 items-center px-3 text-headings">
        <div className="flex-1">All Contacts</div>
        <button className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
          <ArrowDownAZ className="h-4 w-4" />
        </button>
      </header>
      <div className="flex-1 overflow-y-auto px-1">
        {contacts.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`mb-px flex w-full items-center rounded-md px-3 py-2.5 text-start hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${c.id === activeId ? 'bg-accent/20' : ''}`}
          >
            <Avatar initial={c.initial} color={c.color} />
            <div className="flex-1 overflow-hidden">
              <div className="mb-1 truncate text-headings">{c.name}</div>
              <div className="truncate text-xs text-muted">{c.email}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
