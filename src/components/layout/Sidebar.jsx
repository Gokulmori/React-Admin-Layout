import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { navSections } from '../../data/navData'

const activeClass = 'text-[#05a2a1] dark:text-[#0398ff]'

function Icon({ name, className }) {
  const Cmp = Icons[name]
  if (!Cmp) return null
  return <Cmp size={18} className={className} />
}

function Glow() {
  return (
    <i className="absolute inset-px -z-[1] scale-90 rounded-full bg-gradient-to-r from-white/90 to-white/40 opacity-0 outline-none ring-3 ring-white/30 transition-all duration-300 group-hover/link:scale-100 group-hover/link:opacity-100 dark:from-[#0091ff40] dark:to-[#0091ff0d] dark:ring-[#0091ff0d]" />
  )
}

function NavItem({ item }) {
  const [open, setOpen] = useState(false)

  if (item.children) {
    return (
      <li className="group/link my-0.5">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative flex w-full items-center rounded-full px-3 py-2 text-headings transition-colors duration-300"
        >
          <Icon name={item.icon} className="me-2.5 shrink-0" />
          <span className="xl:opacity-0 group-hover:opacity-100">{item.label}</span>
          <ChevronRight
            className={`ms-auto w-3.5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
          />
          <Glow />
        </button>
        <ul
          className={`mx-5 overflow-hidden rounded-xl bg-gradient-to-t from-white/80 to-white/0 px-2 text-sm transition-[height,opacity] duration-300 dark:from-[#0091ff26] dark:to-[#0091ff00] ${open ? 'opacity-100' : 'h-0 opacity-0'}`}
        >
          {item.children.map((child) => (
            <li key={child.label} className="first:pt-2 last:pb-2.5">
              <NavLink
                to={child.href}
                className={({ isActive }) =>
                  `mt-1 block rounded-full px-3 py-1 text-sm text-headings hover:bg-white/40 dark:hover:bg-[#0091ff13] ${isActive ? activeClass : ''}`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    )
  }

  const linkClass = ({ isActive }) =>
    `relative flex w-full items-center rounded-full px-3 py-2 transition-colors duration-300 ${isActive ? activeClass : 'text-headings'}`

  return (
    <li className="group/link my-0.5">
      {item.external ? (
        <a href={item.href} target="_blank" rel="noreferrer" className="relative flex w-full items-center rounded-full px-3 py-2 text-headings transition-colors duration-300">
          <Icon name={item.icon} className="me-2.5 shrink-0" />
          <span className="xl:opacity-0 group-hover:opacity-100">{item.label}</span>
          <Glow />
        </a>
      ) : (
        <NavLink to={item.href} className={linkClass}>
          <Icon name={item.icon} className="me-2.5 shrink-0" />
          <span className="xl:opacity-0 group-hover:opacity-100">{item.label}</span>
          <Glow />
        </NavLink>
      )}
    </li>
  )
}

export default function Sidebar() {
  return (
    <aside className="max-xl:bg-popover/25 group fixed start-0 top-0 z-[12] hidden h-full w-56 -translate-x-full whitespace-nowrap rounded-e-2xl border-popover outline-none transition-all duration-300 max-xl:overflow-hidden max-xl:border-r max-xl:shadow-lg max-xl:backdrop-blur-lg hover:shadow-lg xl:block xl:w-[4.25rem] xl:translate-x-0 xl:hover:w-60 xl:hover:border-r xl:hover:border-popover xl:hover:bg-popover/25 xl:hover:backdrop-blur-lg">
      <div className="h-full overflow-y-auto overflow-x-hidden p-2">
        <a className="m-4 flex items-center" href="/">
          <svg width="18" height="18" fill="none" className="me-3 shrink-0">
            <path fill="#0660B8" d="M2 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            <path
              fill="#22A279"
              d="M16 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
            />
            <path fill="#0660B8" d="M2 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
          </svg>
          <svg width="94" height="14" fill="none" className="transition-opacity duration-300 xl:opacity-0 group-hover:opacity-100">
            <path
              fillRule="evenodd"
              fill="url(#sidebar-wordmark)"
              d="M63.791 13.341c.305-.204.57-.477.794-.819l.111.987 2.233-.009V0h-2.47v4.771c-.193-.251-.412-.455-.659-.614-.34-.228-.736-.343-1.187-.343-.497 0-.94.097-1.327.29-.381.188-.703.475-.967.862s-.462.87-.597 1.45c-.129.58-.193 1.257-.193 2.03v.634l-.001-.001c-.008.664.056 1.328.193 1.978.135.568.332 1.048.59 1.441a2.66 2.66 0 0 0 .966.879c.388.199.829.299 1.328.299.451 0 .846-.111 1.186-.335zm.571-6.899l.097.173v4.313c-.09.17-.205.312-.343.427-.205.164-.472.246-.8.246a1.29 1.29 0 0 1-.632-.14c-.17-.1-.308-.249-.413-.448-.1-.205-.173-.466-.22-.783s-.062-.706-.062-1.151v-.633c0-.45.024-.838.071-1.16.052-.328.128-.595.228-.8.1-.211.234-.365.404-.465.176-.1.387-.15.633-.15.229 0 .427.05.597.15a1.26 1.26 0 0 1 .44.421zM11.074 3.99v9.51h-2.47V3.99h2.47zM8.49 1.53a1.29 1.29 0 0 1 .36-.941c.247-.252.575-.378.985-.378.416 0 .744.126.984.378.24.246.36.56.36.94s-.122.689-.368.94c-.24.247-.563.37-.967.37-.416 0-.747-.123-.993-.37a1.31 1.31 0 0 1-.36-.94l-.001.001zm-1.388 9.843V13.5H2.575h-.791H0V.703h2.575v10.67h4.527zm8.34-4.796V13.5h-2.47V3.99h2.312l.073.935a2.93 2.93 0 0 1 .903-.785 2.66 2.66 0 0 1 1.31-.326c.368 0 .705.065 1.01.194.31.129.577.334.8.615s.395.656.518 1.125c.123.463.185 1.031.185 1.705V13.5h-2.47V7.436c0-.41-.04-.727-.123-.95-.082-.228-.205-.386-.369-.474-.189-.1-.401-.148-.615-.14a1.02 1.02 0 0 0-.624.201c-.182.134-.332.306-.44.504zm10.275 7.099c-.65 0-1.228-.1-1.732-.299-.498-.2-.92-.486-1.265-.861-.346-.381-.61-.841-.791-1.38s-.273-1.155-.273-1.846v-.782c0-.774.088-1.45.264-2.03.176-.586.425-1.079.747-1.477.313-.392.722-.698 1.186-.888.475-.199 1.011-.299 1.609-.299s1.122.1 1.573.3c.457.193.835.486 1.134.878s.524.867.677 1.442.228 1.242.228 2.004v1.124h-4.943c.013.322.049.601.109.836.076.292.188.533.334.72.153.182.337.314.554.396.217.076.469.114.756.114.433 0 .823-.076 1.169-.229a2.7 2.7 0 0 0 .896-.641l.985 1.494c-.203.254-.439.479-.703.668-.327.237-.689.421-1.073.545-.416.14-.896.211-1.441.211zm-1.521-6.372l-.051.528h2.512v-.22c0-.387-.04-.71-.123-.967-.082-.264-.21-.46-.386-.59s-.41-.193-.704-.193c-.246 0-.454.05-.624.15a1.03 1.03 0 0 0-.404.466c-.1.21-.173.486-.22.826zm10.612 5.455c-.061.083-.127.163-.197.24-.181.2-.407.363-.676.492a2.21 2.21 0 0 1-.94.185c-.51 0-.976-.117-1.398-.352a2.61 2.61 0 0 1-1.002-.984c-.24-.422-.36-.923-.36-1.503 0-.48.076-.914.228-1.3a2.55 2.55 0 0 1 .703-.994c.31-.275.703-.486 1.178-.633s1.031-.22 1.67-.22h.676v-.773c0-.287-.035-.516-.105-.686-.052-.155-.158-.286-.299-.369s-.308-.128-.474-.123a.98.98 0 0 0-.528.132c-.142.09-.253.222-.316.378a1.61 1.61 0 0 0-.097.589h-2.47c0-.41.08-.797.238-1.16.158-.37.39-.692.694-.967a3.39 3.39 0 0 1 1.107-.66 4.13 4.13 0 0 1 1.442-.237c.633 0 1.195.109 1.687.326.492.21.882.548 1.17 1.01s.43 1.064.43 1.802v4.236c0 .534.026.967.08 1.301s.143.621.254.862v.149h-2.479c-.095-.24-.167-.488-.216-.741zm-.118-1.605c-.094.158-.24.292-.439.403a1.42 1.42 0 0 1-.703.167c-.161.004-.32-.039-.457-.124s-.234-.212-.29-.36c-.065-.158-.097-.351-.097-.58 0-.205.026-.398.079-.58a1.34 1.34 0 0 1 .264-.475 1.18 1.18 0 0 1 .43-.325c.176-.076.381-.114.616-.114h.597v1.988zm6.76 2.345V7.202c.056-.149.127-.279.21-.39a1.17 1.17 0 0 1 .484-.378c.193-.088.427-.132.703-.132l.404.017a3.11 3.11 0 0 1 .404.053l.035-2.452c-.076-.03-.181-.053-.316-.07a2.02 2.02 0 0 0-.369-.036c-.346 0-.656.106-.932.317-.269.211-.501.51-.694.896l-.001.003-.07-1.04h-2.32v9.51h2.462zM54.079.703h.643L58.755 13.5h-2.732l-.695-2.637H51.79L51.1 13.5h-2.716L52.383.703h.616 1.08zm-1.73 8.024h2.417l-1.213-4.602-1.204 4.602zm18.913-2.175V13.5h-2.47V3.99h2.32l.066.867a2.78 2.78 0 0 1 .805-.7c.398-.228.864-.343 1.397-.343a2.35 2.35 0 0 1 .958.194c.293.123.548.32.765.589.116.141.218.306.305.494.255-.399.572-.711.951-.934.393-.228.847-.343 1.363-.343.387 0 .738.065 1.054.194a1.94 1.94 0 0 1 .809.624c.229.281.401.653.519 1.116.123.463.184 1.025.184 1.688V13.5h-2.47V7.444c0-.427-.041-.756-.123-.984s-.199-.384-.351-.466c-.169-.086-.356-.128-.545-.123-.199-.004-.394.058-.554.176a1.39 1.39 0 0 0-.386.492l-.09.203.01.412V13.5h-2.461V7.453c0-.422-.041-.744-.123-.967-.082-.228-.199-.386-.351-.474-.171-.098-.366-.147-.563-.14-.234 0-.439.064-.615.192a1.41 1.41 0 0 0-.404.488zM84.727 3.99v9.51h-2.47V3.99h2.47zm-2.584-2.46a1.29 1.29 0 0 1 .36-.941c.246-.252.574-.378.984-.378.416 0 .745.126.985.378.24.246.36.56.36.94a1.29 1.29 0 0 1-.369.94c-.24.247-.562.37-.967.37-.416 0-.747-.123-.993-.37a1.31 1.31 0 0 1-.274-.434c-.062-.161-.091-.332-.086-.505zm6.952 5.045V13.5h-2.47V3.99h2.312l.073.934a2.94 2.94 0 0 1 .902-.784c.401-.219.853-.332 1.31-.326a2.57 2.57 0 0 1 1.011.194c.31.129.577.334.799.615s.396.656.519 1.125c.123.463.184 1.031.184 1.705V13.5h-2.469V7.436c0-.41-.041-.727-.123-.95s-.205-.386-.369-.474a1.23 1.23 0 0 0-.616-.14 1.02 1.02 0 0 0-.624.201 1.54 1.54 0 0 0-.439.502z"
            />
            <defs>
              <linearGradient id="sidebar-wordmark" x1="-.5" y1="9.48" x2="92.291" y2="-.197" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0762b7" />
                <stop offset="1" stopColor="#22a279" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        {navSections.map((section) => (
          <div key={section.label} className="p-1">
            <div className="mb-2 mt-3 ps-3 text-sm text-muted">
              <span className="text-xs xl:opacity-0 group-hover:opacity-100">{section.label}</span>
              <span className="-mt-7 block ps-0.5 text-lg font-medium group-hover:opacity-0">...</span>
            </div>
            <ul>
              {section.items.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
