'use client'

import { type NextStudio } from 'next-sanity/studio'
import dynamic from 'next/dynamic'
import config from '../../../sanity.config'

// Lade das Studio-Modul erst im Browser.
// Der Server sieht nur "Loading..." und fasst jsdom/parse5 gar nicht an.
const Studio = dynamic(
    () => import('next-sanity/studio').then((mod) => mod.NextStudio),
    {
        ssr: false,
        loading: () => <div>Studio wird geladen...</div>
    }
)

export default function StudioPage() {
    return <Studio config={config} />
}