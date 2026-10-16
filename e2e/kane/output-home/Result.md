---
test: ../home_test.md
status: passed
started: 2026-10-13T12:37:18.927Z
duration_s: 71
session_id: 95aa0b4e-3fbd-4691-b86a-d35b528e9997
---

# Home page lists repositories — Result

## Open the home page ✓ passed (18.1s)
md5: 8d9bebbf205ab2abeb758ec66b070528
Open http://localhost:3000.
Verify the page contains the text "Browse by Language" and the text "Browse by tag".

## Check a repository entry ✓ passed (48s)
md5: 15c7cecd1de41007b0cba80d77fde05c
Store the href of the first repository title link as 'first_repo_url'.
Verify {{first_repo_url}} starts with "https://github.com/" or "https://gitlab.com/".
