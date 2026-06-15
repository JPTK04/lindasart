import { defineType, defineField } from 'sanity'

export const series = defineType({
  name: 'series',
  title: 'Photo Series (Home)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (Shown on Home)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images (Shown on Detail Page)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})
