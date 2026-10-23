import ChunkLoadNoThrowPlugin from './chunk-load-no-throw.mjs'
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Retry, then wait (never throw) on a failed JS chunk, so a resource that
  // Google's renderer skips can't blank the page. See chunk-load-no-throw.mjs.
  webpack(config, { isServer, webpack }) {
    if (!isServer) config.plugins.push(new ChunkLoadNoThrowPlugin(webpack))
    return config
  },
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
