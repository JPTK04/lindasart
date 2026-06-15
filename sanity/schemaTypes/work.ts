import { defineType, defineField } from 'sanity'

export const work = defineType({
  name: 'work',
  title: 'Work (Websites List)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Client / Website Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Preview Image / Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
