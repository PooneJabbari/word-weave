## Description:

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Technologies Used:

Frontend: React, TypeScript, React Hook Forms, React Query
Styling: Tailwind CSS, cva
Backend: Axios
functionality provided by Deepseek API(https://platform.deepseek.com/usage).

## Installation:

Clone the repository from provided GitHub Repository URL.
`Run pnpm` install to install the necessary dependencies.
Configure the necessary environment variables for the backend.

## Getting Started:

Start the development server by running
`pnpm start`.

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

Access the extension through the Google Side Panel to interact with the AI

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
