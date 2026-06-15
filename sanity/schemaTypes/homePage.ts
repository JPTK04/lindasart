import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Startseite',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Startseite',
      hidden: true, // Hide it since it's a singleton and the title is always the same
    }),
    defineField({
      name: 'modules',
      title: 'Page Modules',
      description: 'Add and arrange modules for the home page here.',
      type: 'array',
      of: [
        { type: 'editorialModule' },
        {
          type: 'reference',
          to: [{ type: 'series' }],
          title: 'Series Link',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Startseite',
      }
    },
  },
})
