import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const Navbar = () => {
  const router = useRouter()
  const { tag } = router.query

  return (
    <header className="w-full py-4 border-b border-ink-200 bg-ink-400">
      <nav className="flex items-center justify-center flex-wrap">
        <Link href="/" className="flex items-center text-gray-700 font-bold">
          <Image src="/gfi.png" alt="Good First Issue" className="h-12" width={236} height={48} />
        </Link>
        {tag ? (
          <span className="text-2xl cursor-pointer">
            <span className="font-normal ml-2 mr-1 text-slate">/</span>
            <span className="font-semibold text-juniper">{tag}</span>
          </span>
        ) : null}
      </nav>
    </header>
  )
}
