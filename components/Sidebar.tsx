import React from 'react'
import Link from 'next/link'
import { Tag } from '../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

type SidebarProps = {
  tags: Tag[]
}

export const Sidebar = ({ tags }: SidebarProps) => {
  return (
    <section className="masthead font-sans pt-6 border-r border-ink-200 px-6 text-vanilla-300 flex-none w-full md:max-w-sm">
      <div>
        <h3 className="section-heading">About</h3>
        <p className="text-sm">
          Good First Issue curates easy pickings from popular open-source projects, and helps you
          make your first contribution to open-source.
        </p>
      </div>
      <div className="pt-6">
        <h3 className="section-heading">Browse by language</h3>
        <div>
          {tags.map((tag) => {
            return (
              <Link key={tag.language} href={`/language/${tag.language}`}>
                {tag.language}
                <span className="{'text-vanilla-400 group-hover:text-juniper': $route.params.slug !== tag.slug}">
                  &times; {tag.count}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="pt-6">
        <a
          className="block bg-juniper hover:bg-light_juniper text-ink-400 uppercase rounded-md font-bold text-center px-1 py-3"
          href="https://github.com/lucavallin/gfi#adding-a-new-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add your project
        </a>
      </div>

      <div className="text-sm pt-6">
        <a
          className="flex flex-row justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://cavall.in"
        >
          <FontAwesomeIcon icon={faHeart} />
          <span className="ml-2">
            A
            <span className="inline hover:underline text-juniper" title="Visit Luca's blog">
              &nbsp;@lucavallin&nbsp;
            </span>
            & contributors initiative
          </span>
        </a>
      </div>
    </section>
  )
}
