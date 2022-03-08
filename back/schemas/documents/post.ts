export default {
  name: 'post',
  title: 'Postagem',
  type: 'document',
  fields: [
    {
      name: 'locale',
      title: 'Localidade',
      type: 'string',
      options: {
        list: [
          { title: 'Português', value: 'pt-BR' },
          { title: 'Inglês', value: 'en-US' },
          { title: 'Espanhol', value: 'es-ES' },
        ],
      },
      validation: (Rule: any) =>
        Rule.required().error('A localidade é obrigatória'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[@#$%&*,.:;!?'"|(){}<>]/g, '')
            .replace(/\s+/g, '-'),
      },
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('O título é obrigatório'),
        Rule.max(60).warning(
          'O título ideal deve conter no máximo 60 caracteres'
        ),
      ],
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
      validation: (Rule: any) => [
        Rule.required().error('A descrição é obrigatória'),
        Rule.min(50).warning(
          'A descrição ideal deve conter no mínimo 50 caracteres'
        ),
        Rule.max(160).warning(
          'A descrição ideal deve conter no máximo 160 caracteres'
        ),
      ],
    },
    {
      name: 'date',
      title: 'Data',
      type: 'date',
      validation: (Rule: any) => Rule.required().error('A data é obrigatória'),
    },
    {
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      validation: (Rule: any) =>
        Rule.required().error('A imagem de capa é obrigatória'),
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Título 2', value: 'h2' },
            { title: 'Título 3', value: 'h3' },
            { title: 'Título 4', value: 'h4' },
            { title: 'Título 5', value: 'h5' },
            { title: 'Título 6', value: 'h6' },
            { title: 'Citação', value: 'blockquote' },
          ],
        },
        {
          title: 'Imagem',
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Legenda',
              type: 'string',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {
          name: 'code',
          title: 'Código',
          type: 'code',
          options: {
            withFilename: true,
          },
        },
      ],
      validation: (Rule: any) =>
        Rule.required().error('O conteúdo é obrigatório'),
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [
        {
          type: 'author',
        },
      ],
      validation: (Rule: any) => Rule.required().error('O autor é obrigatório'),
    },
  ],
};
