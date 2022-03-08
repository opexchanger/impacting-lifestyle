export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('O nome é obrigatório'),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      validation: (Rule: any) =>
        Rule.required().error('O avatar é obrigatório'),
    },
  ],
};
