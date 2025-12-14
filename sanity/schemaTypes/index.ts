import { type SchemaTypeDefinition } from 'sanity'
import { testPage } from './testPage'
import { homepage } from './homepage' // <--- NEU: Importieren

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [testPage, homepage], // <--- NEU: Beides in die Liste eintragen (mit Komma getrennt)
}