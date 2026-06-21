import { defineType, defineField } from 'sanity'

export const editorialModule = defineType({
  name: 'editorialModule',
  title: 'Editorial Module (Double Image)',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Signature',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (for subpage URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Left (Portrait Left, Landscape Right)', value: 'left' },
          { title: 'Right (Landscape Left, Portrait Right)', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'imageLeft',
      title: 'Left Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'imageRight',
      title: 'Right Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'masonryImages',
      title: 'Subpage Masonry Images',
      description: 'TIPP: Du kannst hier mehrere Bilder auf einmal per Drag & Drop von deinem Computer reinziehen, um sie alle gleichzeitig hochzuladen!',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'personalInfo',
      title: 'Persönliche Info unter der Galerie',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'reviews',
      title: 'Rezensionen unter der Galerie',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'variant',
      media: 'imageLeft',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Variant: ${subtitle}`,
        media,
      }
    },
  },
})
