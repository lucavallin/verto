---
mode: testing
url: http://localhost:3000
max_steps: 20
tags: [smoke]
---

# Home page lists repositories

## Open the home page
Open http://localhost:3000.
Verify the page contains the text "Browse by Language" and the text "Browse by tag".

## Check a repository entry
Store the href of the first repository title link as 'first_repo_url'.
Verify {{first_repo_url}} starts with "https://github.com/" or "https://gitlab.com/".
