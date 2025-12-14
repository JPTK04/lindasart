import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // WICHTIG: Webpack nutzen, wie du es wolltest
    // (wird über dein script "next build --webpack" sowieso forciert, aber hier zur Sicherheit)

    // 1. Zwinge Next.js, diese Pakete neu zu bündeln, um ESM/CJS Konflikte zu lösen
    transpilePackages: ['next-sanity', 'isomorphic-dompurify', 'jsdom', 'parse5'],

    // 2. Falls du vorher 'serverComponentsExternalPackages' gesetzt hast:
    // PROBIERE ES BITTE ERST OHNE. Wenn diese Option aktiv ist, verursacht sie oft genau diesen ESM-Fehler.
    experimental: {
        // serverComponentsExternalPackages: ['jsdom'], // <-- Auskommentieren oder löschen!
    },

    webpack: (config) => {
        // Verhindert, dass Webpack versucht, diese Pakete für den Browser zu bündeln,
        // falls sie versehentlich dort landen.
        config.resolve.alias = {
            ...config.resolve.alias,
            "isomorphic-dompurify": false,
            // jsdom NICHT hier false setzen, wenn transpilePackages genutzt wird,
            // sonst beißt sich das eventuell.
        };
        return config;
    },
};

export default nextConfig;