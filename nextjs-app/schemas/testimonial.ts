import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'displayOnPages',
      title: 'Display on Pages',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Unemployment Appeals', value: 'unemployment-appeals'},
          {title: 'Other Areas', value: 'other-areas'},
        ],
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      quote: 'quote',
      author: 'author',
    },
    prepare(selection) {
      const {quote, author} = selection
      return {
        title: author,
        subtitle: quote.substring(0, 60) + '...',
      }
    },
  },
})
