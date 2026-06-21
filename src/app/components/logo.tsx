import Image from 'next/image'

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Ayobami Tunwase"
      width={40}
      height={40}
      className={`dark:invert ${className ?? ''}`}
      priority
    />
  )
}
