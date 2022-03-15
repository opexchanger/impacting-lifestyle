import groq from 'groq';

export const getArticlesPaths = groq`
  *[_type == 'post'] {
    'slug': slug.current
  }
`;

export const getAllArticlesByLocale = groq`
  *[_type == 'post'] | order(date desc, title asc) {
    'slug': slug.current,
    title,
    description,
    date,
    tags,
    coverImage,
    'author': author-> {
      name,
      avatar
    }
  }
`;

export const getAllArticles = groq`
  *[_type == 'post'] | order(date desc, title asc) {
    'slug': slug.current,
    title,
    description,
    date,
    tags,
    coverImage,
    'author': author-> {
      name,
      avatar
    }
  }
`;

export const getArticleBySlug = groq`
  *[_type == 'post' && slug.current == $slug] {
    'slug': slug.current,
    title,
    description,
    date,
    tags,
    coverImage,
    content,
    'author': author-> {
      name,
      avatar
    }
  }
`;
