import { type SchemaTypeDefinition } from 'sanity'
import { testPage } from './testPage' // <--- Importieren

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [testPage], // <--- Hier in die Liste eintragen
}