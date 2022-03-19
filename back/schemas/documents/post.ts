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
          { title: 'Português', value: 'br' },
          { title: 'Inglês', value: 'en' },
        ],
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[@#$%&*,.:;!?'"|(){}<>]/g, '')
            .replace(/\s+/g, '-'),
      },
      validation: (Rule: any) => Rule.required().error('O slug é obrigatório'),
    },
    {
      name: 'listed',
      title: 'Listado',
      type: 'boolean',
      initialValue: () => true,
      validation: (Rule: any) => Rule.required().error('Escolha uma opção'),
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
        Rule.max(180).warning(
          'A descrição ideal deve conter no máximo 180 caracteres'
        ),
      ],
    },
    // TODO usar como opção pra agendar a publicação
    {
      name: 'date',
      title: 'Data de publicação',
      type: 'date',
      validation: (Rule: any) => Rule.required().error('A data é obrigatória'),
      initialValue: new Date().toISOString().split('T')[0],
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
      name: 'tags',
      title: 'Tags',
      type: 'tags',
      options: {
        //Locks menu from creating new tags (defaults to false)
        // frozen: true,
        // preload: [{label: "Oranges", value: "oranges"}, {label: "Apples", value: "apples"}],
        closeMenuOnSelect: true,
      },
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
      initialValue: {
        _type: 'reference',
        _ref: '69573d76-f6bd-4b69-9a67-1c9da91cbe75',
      },
    },
  ],
};
