/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: { swcPlugins: [["next-superjson-plugin", {}]] },
   images: {
      remotePatterns: [
         { protocol: "https", hostname: "lh3.googleusercontent.com", path: "" },
         { protocol: "https", hostname: "res.cloudinary.com", path: "" },
         { protocol: "https", hostname: "avatars.githubusercontent.com", path: "" },
      ],
   },
}

module.exports = nextConfig
