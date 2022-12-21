import React, { Component } from "react"
import PropTypes from "prop-types"

import Tags from "~/data/tags.json"
import { find } from "lodash"
export default class MyReactCompoennt extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = { tag: PropTypes.object.isRequired }
  static defaultProps = {}
  render() {
    return (
      <header className="w-full py-4 border-b border-ink-200 bg-ink-400">
        <nav className="flex items-center justify-center flex-wrap">
          <nuxt-link
            to="/"
            className="flex items-center text-gray-700 font-bold"
          >
            <img
              src="~/static/gfi-logo-white.svg"
              alt="Good First Issue"
              className="h-12"
            />
          </nuxt-link>
          {this.props.activeTag ? (
            <span className="text-2xl cursor-pointer">
              <span className="font-normal ml-2 mr-1 text-slate">/</span>
              <span className="font-semibold text-juniper">
                {activeTag.language}
              </span>
            </span>
          ) : null}
        </nav>
      </header>
    )
  }
}
