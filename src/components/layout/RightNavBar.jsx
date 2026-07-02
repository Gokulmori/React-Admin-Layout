import { Search, BellDot, CheckCircle2, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const iconButton =
  'flex items-center justify-center text-headings hover:bg-white hover:ring-3 hover:ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:hover:bg-accent/50 dark:hover:ring-accent/15'

export default function RightNavBar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <aside className="fixed end-1 top-2 z-30 hidden h-[calc(100%-1rem)] w-16 flex-col items-center gap-6 py-4 sm:flex">
      <button className={`h-11 w-11 rounded-full ${iconButton}`}>
        <img alt="Profile" className="h-8 w-8 rounded-full object-cover" src="/img/contacts/2.jpg" />
      </button>

      <button className={`h-9 w-9 rounded-md ${iconButton}`}>
        <img alt="Language" className="h-6 w-6 rounded-full" src="/img/flags/england.svg" />
      </button>

      <button className={`h-9 w-9 rounded-md ${iconButton}`}>
        <Search className="h-5 w-5" />
      </button>

      <button className={`relative h-9 w-9 rounded-md ${iconButton}`}>
        <i className="absolute h-5 w-5 animate-ping rounded-full border border-red-500" />
        <BellDot className="h-5 w-5" />
      </button>

      <button className={`h-9 w-9 rounded-md ${iconButton}`}>
        <CheckCircle2 className="h-5 w-5" />
      </button>

      <button onClick={toggleTheme} aria-label="Toggle theme" className={`h-9 w-9 rounded-md ${iconButton}`}>
        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
    </aside>
  )
}
