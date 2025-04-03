import { MetadataRoute } from 'next';

const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Roy';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${ownerName}'s Portfolio`,
    short_name: 'Portfolio',
    description: 'A portfolio showcasing my skills and projects',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
} 