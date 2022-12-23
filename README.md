<p align="center">
  <img src="public/gfi.png" width="355" height="51"/>
</p>

---

Welcome! 👋🏼

**Good First Issue** is an initiative to curate easy pickings from popular projects, so developers who've never contributed to open-source can get started quickly.

Open-source maintainers are always looking to get more people involved, but new developers generally think it's challenging to become a contributor. We believe getting developers to fix super-easy issues removes the barrier for future contributions. This is why Good First Issue exists.

## What is different in this fork?
The original project is unmaintained, but I find the website very useful and I would like to keep it alive.
The original code has been entirely replaced by Next.js and Typescript and there are differences in how data in retrieve from GitHub and compiled.

## Adding a new project

You're welcome to add a new project in Good First Issue, and we encourage all projects &mdash; old and new, big and small.

Follow these simple steps:

- The goal is to narrow down projects for new open-source contributors. To maintain the quality of projects in Good First Issue, please make sure the GitHub repository you want to add meets the following criteria:

  - It has at least three issues with the `good first issue` label or other labels defined in `gfi.config.json` (see `labels` and the end).

  - It has at least 10 contributors.

  - It has at least 100 stars.

  - It contains a README.md with detailed setup instructions for the project, and a CONTRIBUTING.md with guidelines for new contributors.

  - It is actively maintained.

- Add your repository's path (in the format `owner/name` and lexicographic order) to [gfi.config.json](gfi.config.json).

- Create a new pull-request. Please add the link to the issues page of the repository in the PR description. Once the pull request is merged, the changes will be live on [gfi.lucavall.in](https://gfi.lucavall.in/).

## Setting up the project locally

To contribute new features and changes to the website, you would want to run the app locally. Please follow these steps:

1. Clone the project locally. Make sure you have a recent version of Node.js installed on your computer.

2. Start the development server.

```bash
# install the dependencies
$ npm install
# start the development server
$ npm run dev
```

You will then be able to open the app in your browser.
