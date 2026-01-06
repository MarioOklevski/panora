# Restaurant Menu Template

A modern, responsive restaurant menu template built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- Responsive design that works on all devices
- Modern UI with shadcn/ui components
- Docker support for easy deployment
- TypeScript for type safety
- Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ or Docker

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Development

Run with hot reload:
```bash
docker-compose up dev
```

### Docker Production

Build and run the production image:
```bash
# Using docker-compose
docker-compose up app

# Or using Docker directly
docker build -t restaurant-menu .
docker run -p 3000:3000 restaurant-menu
```

## Project Structure

```
├── app/                  # Next.js app directory
├── components/           # React components
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
└── scripts/             # Build and utility scripts
```

## Built With

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)

## License

MIT
