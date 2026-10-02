# Alex Project

A five-page creative studio website: Home, Services, Contact, Community, Account.

## Run and edit
Requires Node.js 22.13+ and npm. Run `npm ci`, then `npm run dev`. Edit pages in app/ and styling in app/globals.css. The custom image is public/studio.png.

## Verified
Production build and TypeScript checks pass. Application integration tests verified all routes/assets, anonymous post rejection, local ChatGPT sign-in, invalid-message rejection, cross-origin protection, persisted message create/read/delete, account identity, and logout. Local sign-in is a development simulation; hosted ChatGPT authentication still needs production verification.

## Contact delivery
FormSubmit sends inquiries to alexchoi20219@gmail.com. The test returned an activation-required response and sent an activation email. Click Activate Form in that inbox. Actual email receipt is not yet verified. The UI reports delivery failures and preserves entered text.

## Persistence
D1 holds member and message records. Apply drizzle/0000_crazy_rhodey.sql once to the local database before testing the board. Sites applies production migrations during publishing.

## Publishing status
Site registered but not published. The source credential handoff to Sites publishing was rejected by automatic approval policy. No live URL is confirmed. Resume the standard Sites workflow using the project ID already saved in .openai/hosting.json; do not register a replacement.

## Limitations
Browser permission was declined; visual mobile checks and WebMCP browser validation were unavailable. Responsive CSS is implemented. The homepage company description assumes a creative studio. The footer reports approximate build time and the two user messages used to guide creation; one separate image-generation prompt produced the artwork.
