import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const repo = 'dh1542.github.io'

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
}

export default nextConfig

