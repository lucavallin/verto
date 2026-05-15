<!-- omit in toc -->

# Contributing to verto.sh

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->

## Table of Contents

- [Contributing to verto.sh](#contributing-to-vertosh)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [I Have a Question](#i-have-a-question)
  - [I Want To Contribute](#i-want-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
      - [Before Submitting a Bug Report](#before-submitting-a-bug-report)
      - [How Do I Submit a Good Bug Report?](#how-do-i-submit-a-good-bug-report)
    - [Suggesting Enhancements](#suggesting-enhancements)
      - [Before Submitting an Enhancement](#before-submitting-an-enhancement)
      - [How Do I Submit a Good Enhancement Suggestion?](#how-do-i-submit-a-good-enhancement-suggestion)
    - [Your First Code Contribution](#your-first-code-contribution)
    - [Improving The Documentation](#improving-the-documentation)
  - [Styleguides](#styleguides)
    - [Commit Messages](#commit-messages)
  - [Join The Project Team](#join-the-project-team)

## Code of Conduct

This project and everyone participating in it is governed by the
[verto Code of Conduct](https://github.com/lucavallin/verto/blob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to `coc@lucavall.in`.

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](https://github.com/lucavallin/verto/blob/main/README.md#how-does-it-work).

Before you ask a question, it is best to search for existing [Issues](https://github.com/lucavallin/verto/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/lucavallin/verto/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

<!--
You might want to create a separate issue tag for questions and include it in this description. People should then tag their issues accordingly.

Depending on how large the project is, you may want to outsource the questioning, e.g. to Stack Overflow or Gitter. You may add additional contact and information possibilities:
- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum
-->

## I Want To Contribute

> ### Legal Notice <!-- omit in toc -->
>
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs

<!-- omit in toc -->

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](https://github.com/lucavallin/verto/blob/main/README.md#how-does-it-work). If you are looking for support, you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](https://github.com/lucavallin/verto/issues?q=label%3Abug).
- Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
- Stack trace (Traceback)
- OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
- Version of the interpreter, compiler, SDK, runtime environment, package manager, depending on what seems relevant.
- Possibly your input and the output
- Can you reliably reproduce the issue? And can you also reproduce it with older versions?

<!-- omit in toc -->

#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs must be sent by email to .

<!-- You may add a PGP key to allow the messages to be sent encrypted as well. -->

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/lucavallin/verto/issues/new). (Since we can't be sure at this point whether it is a bug or not, we ask you not to talk about a bug yet and not to label the issue.)
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the _reproduction steps_ that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro`. Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags (such as `critical`), and the issue will be left to be [implemented by someone](#your-first-code-contribution).

<!-- You might want to create an issue template for bugs and errors that can be used as a guide and that defines the structure of the information to be included. If you do so, reference it here in the description. -->

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for **verto.sh**, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

<!-- omit in toc -->

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation](https://github.com/lucavallin/verto/blob/main/README.md#how-does-it-work) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/lucavallin/verto/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

<!-- omit in toc -->

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/lucavallin/verto/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux. <!-- this should only be included if the project has a GUI -->
- **Explain why this enhancement would be useful** to most **verto.sh** users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

<!-- You might want to create an issue template for enhancement suggestions that can be used as a guide and that defines the structure of the information to be included. If you do so, reference it here in the description. -->

### Your First Code Contribution

Ready to make your first code contribution? Here's a step-by-step guide:

1. **Find an issue:** Browse the [issues labeled "good first issue"](https://github.com/lucavallin/verto/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22). These are curated tickets designed for newcomers — they have clear scope, limited complexity, and usually include hints or acceptance criteria.

2. **Comment and claim:** Leave a comment on the issue you'd like to work on so maintainers know it's being picked up. If you have questions about the approach, ask there — we're happy to discuss before you write code.

3. **Set up locally:** Follow the [How to Setup The Project Locally](https://github.com/lucavallin/verto/blob/main/README.md#how-to-setup-the-project-locally) section in the README. You will need Node.js (see `.nvmrc` for the recommended version) and a GitHub Personal Access Token if you plan to run the data generation script.

4. **Create a branch:** Use a descriptive branch name prefixed with the change type — for example `fix/issue-123-typo` or `feat/456-new-filter`. Always branch from an up-to-date `main`.

5. **Make your changes:** Keep them focused on the issue scope. Follow the existing code style (TypeScript, React + Next.js). The project uses ESLint with a pre-commit hook — run `npm run lint` to check your changes before committing.

6. **Write conventional commits:** Follow the [Commit Messages](#commit-messages) format below. Each commit should be a single logical change relevant to the issue.

7. **Open a pull request:** Push your branch and open a PR against `main`. Include a clear description, reference the issue number (e.g. `Closes #123`), and describe how you tested your change. CI will run linting and tests automatically — make sure both pass.

8. **Respond to feedback:** Maintainers may request changes during code review. This is normal and collaborative — don't hesitate to ask clarifying questions.

> **Stuck?** Drop a comment on your issue or open a [Question Discussion](https://github.com/lucavallin/verto/issues/new). We'd rather help you get unstuck than have you give up.

### Improving The Documentation

Documentation is a first-class contribution in this project — it helps every user and contributor that comes after you.

**Where documentation lives:**
- **README.md** — Project overview, setup instructions, and how verto.sh works.
- **CONTRIBUTING.md** (this file) — Contribution workflows, style guides, and team information.
- **CLAUDE.md** — AI coding assistant guidance for contributors using Claude Code.
- **Code comments and JSDoc** — Inline documentation for functions and components.

**How to contribute documentation changes:**

1. **Identify the gap:** Is something unclear, missing, outdated, or hard to follow? Check existing issues labeled ["documentation"](https://github.com/lucavallin/verto/issues?q=is%3Aissue+is%3Aopen+label%3Adocumentation) — there may already be a ticket for what you noticed.

2. **Make it better:** Fix typos, clarify ambiguous wording, add missing steps, write examples, or improve formatting. When adding new sections, follow the existing heading hierarchy and tone (conversational, beginner-friendly, and precise).

3. **Follow the same PR workflow:** Create a branch, make your changes, commit with a `docs:` prefix (e.g. `docs: add troubleshooting section to README`), and open a pull request.

4. **Keep it maintained:** If you notice documentation that references a feature you changed in code, update it in the same PR — don't leave docs for later.

## Styleguides

### Commit Messages

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message consists of a **type** and a **description**:

```
type: description

Longer explanation if needed. Wrap at 72 characters.
```

**Types:**
- `feat` — new feature
- `fix` — bug fix
- `refactor` — code restructuring
- `docs` — documentation changes
- `test` — adding or updating tests
- `ci` — CI/CD changes
- `chore` — maintenance tasks

**Examples:**
- `feat: add user authentication`
- `fix: correct redirect URL after login`
- `docs: update README with installation steps`

## Join The Project Team

We welcome contributors who want to take on a more active role in the project. Team members help triage issues, review pull requests, and guide new contributors.

**What team members do:**
- Review and triage incoming issues
- Provide code reviews on pull requests
- Help maintain documentation and contribution guides
- Participate in project planning discussions

**How to join:**

1. **Make consistent contributions:** Start by contributing regularly — code, documentation, issue triage, or helping answer questions. There is no minimum, but we look for a pattern of high-quality, collaborative contributions over time.

2. **Show ownership:** Take responsibility for specific areas: follow up on issues you're involved with, help other contributors, and ensure your contributions stay maintained.

3. **Express interest:** Open an issue or reach out to an existing team member. Tell us what area you'd like to focus on and what you've done so far.

4. **Get invited:** After discussion, existing team members will extend an invitation. Welcome aboard!

There is no fixed timeline — we value quality and collaboration over quantity. If you're interested but unsure, ask in an issue or discussion.
