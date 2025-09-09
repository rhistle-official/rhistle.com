export default function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="currentColor"
      className={className}
    >
      <rect width="24" height="2" y="4" rx="1" />
      <rect width="24" height="2" y="11" rx="1" />
      <rect width="24" height="2" y="18" rx="1" />
    </svg>
  )
}