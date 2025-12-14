import {defineField, defineType} from 'sanity'

export const testPage = defineType({
    name: 'testPage', // Die interne ID für die Datenbank
    title: 'Test Seite', // Das Label, das du im Studio siehst
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Seiten Titel',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Beschreibung',
            type: 'text',
        }),
        defineField({
            name: 'mainImage',
            title: 'Hauptbild',
            type: 'image',
            options: {
                hotspot: true, // Wichtig: Damit kannst du im Studio den Bildausschnitt wählen
            },
        }),
    ],
})