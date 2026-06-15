import { type SchemaTypeDefinition } from 'sanity'
import { about } from './about'
import { settings } from './settings'
import { editorialModule } from './editorialModule'
import { homePage } from './homePage'
import { workPage } from './workPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, settings, editorialModule, homePage, workPage],
}