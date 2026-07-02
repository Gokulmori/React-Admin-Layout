import {
  MoveLeft,
  SquarePen,
  MinusCircle,
  Smartphone,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  StickyNote,
  Clipboard,
} from 'lucide-react'

const headerButton =
  'flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 md:hidden'

function DetailRow({ icon: IconEl, label, value, border = true }) {
  return (
    <div className={`flex items-start gap-5 ${border ? 'border-t border-border/30' : ''} py-4`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white dark:text-black">
        <IconEl className="h-4.5 w-4.5" />
      </span>
      <div className="flex-1">
        <div className="text-xs text-muted">{label}</div>
        <div className="text-headings">{value}</div>
      </div>
      <button className="flex h-9 w-9 items-center justify-center rounded-md text-headings hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
        <Clipboard className="h-4 w-4" />
      </button>
    </div>
  )
}

export default function ContactDetail({ contact, detail }) {
  return (
    <div className="hidden h-full flex-1 flex-col md:flex">
      <header className="flex h-11 shrink-0 items-center px-3 text-headings">
        <button className={headerButton}>
          <MoveLeft className="h-4 w-4" />
        </button>
        <button className="ms-auto inline-flex h-10 items-center gap-2 rounded-md px-4 hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
          <SquarePen className="h-3.5 w-3.5" />
          Update
        </button>
        <button className="inline-flex h-10 items-center gap-2 rounded-md px-4 hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
          <MinusCircle className="h-3.5 w-3.5" />
          Delete
        </button>
      </header>
      <div className="flex-1 overflow-y-auto">
        {detail && contact ? (
          <div className="mx-auto mt-5 block max-w-xl rounded-lg bg-card p-2">
            <div className="rounded bg-accent/10 p-5 text-center">
              <img alt="" className="mb-3 inline w-32 rounded-full" src={detail.photo} />
              <div className="mb-1 font-medium text-headings">{contact.name}</div>
              <div>{detail.title}</div>
            </div>
            <div className="p-3">
              <DetailRow icon={Smartphone} label="Mobile Phone" value={detail.mobile} border={false} />
              <DetailRow icon={Phone} label="Home Phone" value={detail.home} />
              <DetailRow icon={Mail} label="Email Address" value={detail.email} />
              <DetailRow icon={MessageSquare} label="Message" value={detail.message} />
              <DetailRow icon={MapPin} label="Address" value={detail.address} />
              <DetailRow icon={StickyNote} label="Notes" value={detail.notes} />
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted">Select a contact</div>
        )}
      </div>
    </div>
  )
}
