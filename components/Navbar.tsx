import React, { Component } from "react"
import PropTypes from "prop-types"

import Tags from "../data/tags.json"
export default class MyReactCompoennt extends Component {
  static propTypes = { tag: PropTypes.object.isRequired }
  static defaultProps = {}
  render() {
    return (
      <header className="w-full py-4 border-b border-ink-200 bg-ink-400">
        <nav className="flex items-center justify-center flex-wrap">
        </nav>
      </header>
    )
  }
}
