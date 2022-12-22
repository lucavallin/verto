import React, { Component } from 'react'

import Tags from '../data/tags.json'
export default class MyReactCompoennt extends Component {
  render() {
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
        </div>
        <div className="pt-6">
          <a
            className="block bg-juniper hover:bg-light_juniper text-ink-400 uppercase rounded-md font-bold text-center px-1 py-3"
            href="https://github.com/deepsourcelabs/good-first-issue#adding-a-new-project"
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
            href="https://deepsource.io?ref=gfi"
          >
            <span className="ml-2">
              A
              <span
                className="inline hover:underline text-juniper"
                title="Visit DeepSource website"
              >
                DeepSource
              </span>
              initative
            </span>
          </a>
        </div>
      </section>
    )
  }
}
