# PK LIGHTS QA fixes - 12 September 2026

## Completed

- Downloads now renders a bundled six-file snapshot immediately.
- External file updates run in the background without hiding the saved list.
- Delayed refreshes keep the saved list and show a clear status message.
- Successful file responses are cached in the browser for later visits.
- Mobile previews no longer load the full 12.9 MB PDF viewer automatically.
- Remaining mobile download, preview, footer and quote-form touch targets were increased.
- Product and language tabs now support roving focus and arrow/Home/End keys.
- Spinner and pulse animations stop when reduced motion is enabled.
- Google Fonts moved from CSS `@import` to preconnected stylesheet links.
- Mobile menus close with Escape and restore focus to the Menu button.
- Unused legacy image assets were removed from the deployable project.

## Verification

- GitHub Pages production build: passed.
- Routes prerendered: Home, Contact, Downloads, Help and Quote.
- Internal links/assets checked: 137.
- Missing internal references: 0.
- Initial Downloads HTML contains the file list and real counts.
- Server-rendered timestamps are avoided to prevent hydration/timezone mismatches.
