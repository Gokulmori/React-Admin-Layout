export default function Avatar({ initial, color }) {
  return (
    <span
      className={`me-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base text-white ${color || 'bg-accent dark:text-black'}`}
    >
      {initial}
    </span>
  )
}
