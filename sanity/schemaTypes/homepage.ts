import {defineField, defineType} from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Startseite',
    type: 'document',
    fields: [
        // 1. Der obere Bereich (Hero)
        defineField({
            name: 'headline',
            title: 'Große Überschrift (Name)',
            type: 'string',
        }),
        defineField({
            name: 'subline',
            title: 'Untertitel (z.B. "Photography")',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Bild (Ganz oben)',
            type: 'image',
            options: { hotspot: true },
            fields: [{name: 'alt', title: 'Alt Text', type: 'string'}]
        }),

        // 2. Die Galerie (Array von Bildern)
        defineField({
            name: 'gallery',
            title: 'Portfolio Auswahl',
            type: 'array', // Ein Array = Liste von Dingen
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [{name: 'alt', title: 'Alt Text', type: 'string'}]
                }
            ],
            options: {
                layout: 'grid' // Zeigt die Bilder im Studio schön nebeneinander an
            }
        }),

        // 3. Footer
        defineField({
            name: 'footerText',
            title: 'Footer Text (z.B. Kontakt / Impressum Link)',
            type: 'string',
        }),
    ],
})