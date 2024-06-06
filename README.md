# LinkedIn Resume PDF Generator

A React/Typescript web app that takes a LinkedIn URL and spits out a
personalized PDF resume.

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Node Version

Running `nvm use` will automatically switch you to the version of node being
used by this project. This value is saved in the `.nvmrc` file.

## Environment Variables

Copy the contents of `.example.env` into a new `.env.local` file.

```bash
cp .example.env .env.local
```

`.env.local` contains two variables that need to be set before running locally.

```
# Create an account here: https://rapidapi.com/auth/sign-up
RAPIDAPI_KEY=<YOUR_API_KEY_HERE>

# Create an account here: https://console.upstash.com/login
REDIS_URL=<YOUR_URL_KEY_HERE>
```

## Getting Started

First, install the dependencies:

```javascript
npm i
```

Running the development server:

```javascript
npm run dev
```

Previewing a production build:

```javascript
// This will build and start the app on port 3000
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.
