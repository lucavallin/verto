import React, { Component, useEffect, useState } from 'react'

type BannerProps = {
  children: React.ReactNode
}

export const Banner = ({ children }: BannerProps) => {
  const [active, setActive] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header
      className={`"w-full py-4 px-6 border-b border-ink-200 transition-background duration-1000 ${`bannerActive ? 'bg-robin' : 'bg-ink-300'`}"`}
    >
      <span className="flex items-center justify-center flex-wrap text-sm font-medium">
        <span className="md:flex items-center">{children}</span>
      </span>
    </header>
  )
}
