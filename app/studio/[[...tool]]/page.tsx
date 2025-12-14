import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config'; // Pfad anpassen!
import type { Metadata, Viewport } from 'next';

// WICHTIG: Verhindert Static Generation / SSR Versuche für diese Route
export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Lindas Art Studio',
    robots: { index: false, follow: false }, // Studio nicht indexieren
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export default function StudioPage() {
    return <NextStudio config={config} />;
}