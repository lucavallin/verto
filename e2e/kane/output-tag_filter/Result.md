---
test: ../tag_filter_test.md
status: passed
started: 2026-10-13T12:40:09.726Z
duration_s: 59
session_id: f036a862-5bbf-4135-8744-70f63e9ab615
---

# Filter repositories by tag — Result

## Open the home page ✓ passed (18.4s)
md5: 4928ab3912b9997363c11ba577ea6e50
Open http://localhost:3000.
Verify the page contains the text "Browse by tag".

## Pick a tag ✓ passed (37s)
md5: b54c990583f80862cef72c7456ebeb83
Click the first tag link under "Browse by tag".
Wait for the page to finish loading.
Verify the URL contains "/tag/" and at least one repository title link is on the page.
