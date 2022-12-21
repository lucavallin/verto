import React, { Component } from "react"

export default class ComponentAAAA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerActive: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ bannerActive: false })
    }, 2000)
    this.setState({ bannerActive: false })
  }
  render() {
    return (
      <header
        className={`"w-full py-4 px-6 border-b border-ink-200 transition-background duration-1000 ${`bannerActive ? 'bg-robin' : 'bg-ink-300'`}"`}
      >
        <span className="flex items-center justify-center flex-wrap text-sm font-medium">
          <span className="md:flex items-center">
            <slot></slot>
          </span>
        </span>
      </header>
    )
  }
}
