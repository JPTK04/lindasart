import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // 1. Verhindert, dass Vercel versucht, jsdom/canvas zu tracen
    experimental: {
        serverComponentsExternalPackages: ['jsdom', 'isomorphic-dompurify'],
    },
    webpack: (config) => {
        // 2. Ersetzt jsdom durch ein leeres Modul, falls es client-seitig oder im SSR-Bundle auftaucht
        config.resolve.alias = {
            ...config.resolve.alias,
            "jsdom": false,
            "isomorphic-dompurify": false, // Optional, falls jsdom allein nicht reicht
        };
        return config;
    },
};

export default nextConfig;