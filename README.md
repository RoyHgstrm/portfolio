# Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## Features

- Responsive design that looks great on all devices
- Dark mode support
- Smooth animations and transitions
- Modern UI with glassmorphism effects
- Interactive skill progress visualization
- Video to Text Converter demo integration

## Demo Features

The portfolio includes a demo section for the Video to Text Converter application. This demo is:

- **Optional**: You don't need the actual application to run the portfolio
- **Local**: It only runs if you have the application running locally
- **Self-contained**: The demo is embedded directly in the portfolio

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/RoyHgstrm/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Configure environment variables (copy from example file)
```bash
cp .env.example .env.local
```
Then edit `.env.local` to add your personal information.

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

The following environment variables can be set in your `.env.local` file:

- `NEXT_PUBLIC_OWNER_NAME` - Your name
- `NEXT_PUBLIC_OWNER_ROLE` - Your professional role
- `NEXT_PUBLIC_OWNER_LOCATION` - Your location
- `NEXT_PUBLIC_GITHUB_URL` - Your GitHub profile URL

### Optional Demo Configuration

If you have the Video to Text Converter application running locally, you can set:

- `NEXT_PUBLIC_VIDEO_TO_TEXT_APP_URL` - URL to your locally running Video to Text app

This is completely optional and the portfolio will work fine without it.

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Animations**: Custom CSS animations
- **Deployment**: Vercel (recommended)

## Project Structure

- `app/` - Next.js App Router pages and components
- `app/components/` - Reusable UI components
- `app/demo/` - Video to Text Converter demo page
- `public/` - Static assets
- `.env.example` - Example environment configuration

## Deployment

The easiest way to deploy the portfolio is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

```bash
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).
