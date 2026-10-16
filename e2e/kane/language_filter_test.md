---
mode: testing
url: http://localhost:3000
max_steps: 20
tags: [smoke, filters]
---

# Filter repositories by language

## Open the home page
Open http://localhost:3000.
Verify the page contains the text "Browse by Language".

## Pick a language
Click the "JavaScript" link under "Browse by Language".
Wait for the page to finish loading.
Verify the URL contains "/language/javascript" and at least one repository title link is on the page.
