import { Search, Plus, Info, Settings, CircleEllipsis } from 'lucide-react'

const iconButton =
  'h-9 w-9 items-center justify-center rounded-md text-headings hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:hover:bg-accent/50'

export default function Header() {
  return (
    <header className="z-10 flex h-14 w-full shrink-0 items-center px-3 sm:h-16">
      <h2 className="me-8 font-medium leading-none text-headings">Contacts</h2>

      <div className="relative max-md:hidden lg:w-96">
        <Search className="absolute left-4 top-1/2 w-4 -translate-y-1/2 text-body" />
        <input
          className="h-10 w-full rounded-full border border-white/60 bg-white/20 pe-10 ps-10 text-sm placeholder:text-body focus:border-white/90 focus:outline-none dark:border-border/40 dark:bg-accent/5"
          placeholder="Search Contacts..."
          type="search"
        />
      </div>

      <div className="ms-auto flex items-center gap-1">
        <button className={`hidden sm:flex ${iconButton}`}>
          <Info className="h-4.5 w-4.5" />
        </button>
        <button className={`hidden sm:flex ${iconButton}`}>
          <Settings className="h-4.5 w-4.5" />
        </button>
        <button className={`flex ${iconButton}`}>
          <CircleEllipsis className="h-4.5 w-4.5" />
        </button>
        <button className="ms-3 inline-flex h-9 items-center gap-1 rounded-full border-[1.5px] border-current px-4 text-blue-500 hover:ring-3 hover:ring-blue-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40">
          <Plus className="me-1 h-4 w-4" />
          Create <span className="hidden lg:inline">Contact</span>
        </button>
      </div>
    </header>
  )
}
