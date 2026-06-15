import { type SchemaTypeDefinition } from 'sanity'
import { series } from './series'
import { about } from './about'
import { work } from './work'
import { settings } from './settings'
import { editorialModule } from './editorialModule'
import { homePage } from './homePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [series, about, work, settings, editorialModule, homePage],
}