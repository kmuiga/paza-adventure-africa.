import type { NextConfig } from 'next';
const nextConfig: NextConfig = { reactStrictMode: true, async redirects() { return [
// Add existing live-site routes here before launch, e.g. { source: '/old-mara-tour', destination: '/safaris/masai-mara-3-days', permanent: true }
]; } };
export default nextConfig;
