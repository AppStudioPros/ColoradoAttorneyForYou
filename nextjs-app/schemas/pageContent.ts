import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Unemployment Appeals', value: 'unemployment-appeals'},
          {title: 'Other Areas', value: 'other-areas'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
})
