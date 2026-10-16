---
test: ../search_test.md
status: passed
started: 2026-10-13T12:41:31.750Z
duration_s: 100
session_id: e8fb7cd6-6b22-4b18-80c6-9ca24e0e8df3
---

# Search repositories — Result

## Open the home page ✓ passed (22.3s)
md5: 0a6ad9d648012dc6233e70a461a25645
Open http://localhost:3000.
Verify an input with placeholder "Search in name, description, tags..." exists on the page.

## Search for a known repository ✓ passed (34.3s)
md5: a9e575067ffe9c7e2fb1d625ef5e16ca
Type "react-admin" into the input with placeholder "Search in name, description, tags...".
Wait 2 seconds.
Verify the page contains a link with the text "marmelab / react-admin".

## Search with no matches ✓ passed (35.1s)
md5: 85bceef052780ffe88fcfe500e35293e
Clear the search input and type "zzqxnotarealrepo".
Wait 2 seconds.
Verify the page does not contain a link with the text "marmelab / react-admin".
