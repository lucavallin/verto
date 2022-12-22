import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Tag } from '../Types'

type NavbarProps = {
  tags: Tag[]
}

export const Navbar = ({ tags }: NavbarProps) => {
  const thisRoute = 'none'
  const activeTag = tags.find((t) => t.language == thisRoute)

  return (
    <header className="w-full py-4 border-b border-ink-200 bg-ink-400">
      <nav className="flex items-center justify-center flex-wrap">
        <Link href="/" className="flex items-center text-gray-700 font-bold">
          <Image
            src="/gfi-logo.svg"
            alt="Good First Issue"
            className="h-12"
            width={236}
            height={48}
          />
        </Link>
        {activeTag ? (
          <span className="text-2xl cursor-pointer">
            <span className="font-normal ml-2 mr-1 text-slate">/</span>
            <span className="font-semibold text-juniper">{activeTag.language}</span>
          </span>
        ) : null}
      </nav>
    </header>
  )
}
