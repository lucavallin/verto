---
test: ../language_filter_test.md
status: passed
started: 2026-10-13T12:38:50.376Z
duration_s: 59
session_id: d4f34ea3-393d-411a-b12e-a518b1f6e6a0
---

# Filter repositories by language — Result

## Open the home page ✓ passed (16.4s)
md5: 600540c710936d914652d04e389bda87
Open http://localhost:3000.
Verify the page contains the text "Browse by Language".

## Pick a language ✓ passed (39.9s)
md5: e60dc32a2ef01615e6856b4beb6ddea7
Click the "JavaScript" link under "Browse by Language".
Wait for the page to finish loading.
Verify the URL contains "/language/javascript" and at least one repository title link is on the page.
