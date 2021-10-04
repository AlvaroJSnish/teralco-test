## Getting Started

Installing dependencies:
  - Run on your terminal `yarn` or `npm install`

Starting the project:
  - `yarn dev` or `npm run dev`
  - Github offers a limited API calls rate without an access token, and that's fine, but if you reach the limit, you can create a `.env` file on the root dir with the variable `GITHUB_TOKEN=XXXX`, a template is given.

Starting the tests:
  - `yarn dev` or `npm run dev` (you need to start the app first)
  - `yarn cypress` or `npm run cypress`
  - Select one of the four specs that exists, then hit play.
  - A test battery will be run automated on your browser for every spec required on the project.
