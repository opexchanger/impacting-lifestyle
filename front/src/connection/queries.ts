import groq from 'groq';

export const articlesPathsQuery = groq`
  *[_type == 'post'] {
    'slug': slug.current
  }
`;

export const allArticlesQuery = groq`
  *[_type == 'post'] | order(date desc, title asc) {
    'slug': slug.current,
    title,
    description,
    date,
    coverImage,
    'author': author-> {
      name,
      avatar
    }
  }
`;

export const articleQuery = groq`
  *[_type == 'post' && slug.current == $slug] {
    'slug': slug.current,
    title,
    description,
    date,
    coverImage,
    content,
    'author': author-> {
      name,
      avatar
    }
  }
`;
