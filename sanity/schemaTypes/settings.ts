import { defineType, defineField } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings (Footer/Impressum)',
  type: 'document',
  fields: [
    defineField({
      name: 'impressum',
      title: 'Impressum Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'address',
      title: 'Studio Address',
      type: 'text',
      description: 'The studio address displayed in the footer. You can use multiple lines.',
    }),
  ],
})
