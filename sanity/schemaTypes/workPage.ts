import { defineType, defineField } from 'sanity'

export const workPage = defineType({
  name: 'workPage',
  title: 'Websites (Work)',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredWorks',
      title: 'Slider / Featured Works',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title / Client Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'url',
              title: 'Website URL',
              type: 'url',
            },
            {
              name: 'image',
              title: 'Preview Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
      description: 'These works will be displayed in the large slider at the top of the page with text and links.',
    }),
    defineField({
      name: 'references',
      title: 'References List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Client / Website Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description (e.g., Interieur | Portraits)',
              type: 'string',
            },
            {
              name: 'url',
              title: 'Website URL',
              type: 'url',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      description: 'The list of references shown below the slider.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Websites (Work) Page',
      }
    },
  },
})
