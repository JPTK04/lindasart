import { defineType, defineField } from 'sanity'

export const workPage = defineType({
  name: 'workPage',
  title: 'Websites (Work)',
  type: 'document',
  fields: [
    defineField({
      name: 'sliderImages',
      title: 'Slider Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Add images here for the slider at the top of the Work page.',
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
