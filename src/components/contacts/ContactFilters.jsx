import { Contact, Heart, Clock, Layers2, Trash2, Import, Upload, Printer } from 'lucide-react'

const groups = [
  { label: 'Most Important', color: 'text-emerald-500' },
  { label: 'Work', color: 'text-amber-500' },
  { label: 'Family', color: 'text-blue-500' },
  { label: 'Projects', color: 'text-red-500' },
  { label: 'Recent Leads', color: 'text-fuchsia-500' },
]

const linkClass =
  'mb-px flex items-center rounded-md p-2.5 leading-none text-headings hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40'

export default function ContactFilters() {
  return (
    <aside className="hidden h-full w-60 shrink-0 overflow-y-auto px-1 pt-4 lg:block">
      <ul>
        <li className="mb-6">
          <div className="mb-1.5 px-2.5 text-xs text-muted">My Contacts</div>
          <ul className="w-full">
            <li>
              <a className={`${linkClass} bg-accent/20`} href="#">
                <Contact className="me-3 h-4 w-4" />
                <span className="flex-1">All Contacts</span>
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                <Heart className="me-3 h-4 w-4" />
                <span className="flex-1">Favorites</span>
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                <Clock className="me-3 h-4 w-4" />
                <span className="flex-1">Frequently Contacted</span>
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                <Layers2 className="me-3 h-4 w-4" />
                <span className="flex-1">Duplicates</span>
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                <Trash2 className="me-3 h-4 w-4" />
                <span className="flex-1">Deleted Contacts</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="mb-6">
          <div className="mb-1.5 px-2.5 text-xs text-muted">Groups</div>
          <ul className="w-full">
            {groups.map((g) => (
              <li key={g.label}>
                <a className={linkClass} href="#">
                  <Layers2 className={`me-3 h-4 w-4 ${g.color}`} />
                  <span className="flex-1">{g.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="mb-6">
          <div className="mb-1.5 px-2.5 text-xs text-muted">Actions</div>
          <ul className="w-full">
            <li>
              <a className={linkClass} href="#">
                <Import className="me-3 h-4 w-4" />
                <span className="flex-1">Import</span>
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                <Upload className="me-3 h-4 w-4" />
                <span className="flex-1">Export</span>
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                <Printer className="me-3 h-4 w-4" />
                <span className="flex-1">Print</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}
