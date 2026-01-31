import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Unemployment Appeals', value: 'unemployment'},
          {title: 'Family Law', value: 'family-law'},
          {title: 'Criminal Defense', value: 'criminal-defense'},
          {title: 'General', value: 'general'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      question: 'question',
      category: 'category',
    },
    prepare(selection) {
      const {question, category} = selection
      return {
        title: question,
        subtitle: category,
      }
    },
  },
})
