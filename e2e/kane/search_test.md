---
mode: testing
url: http://localhost:3000
max_steps: 20
tags: [smoke, search]
---

# Search repositories

## Open the home page
Open http://localhost:3000.
Verify an input with placeholder "Search in name, description, tags..." exists on the page.

## Search for a known repository
Type "react-admin" into the input with placeholder "Search in name, description, tags...".
Wait 2 seconds.
Verify the page contains a link with the text "marmelab / react-admin".

## Search with no matches
Clear the search input and type "zzqxnotarealrepo".
Wait 2 seconds.
Verify the page does not contain a link with the text "marmelab / react-admin".
