import imageUrlBuilder from '@sanity/image-url';
import client from './client';
import { IArticle, Asset, ImageReference } from '../types/sanity';
import groq from 'groq';

export type GetAllArticlePaths = () => Promise<IArticle[]>;

export const getAllArticlesPaths: GetAllArticlePaths = async () => {
  const articlePaths = await client.fetch(groq`
    *[_type == 'post'] {
      'slug': slug.current,
      locale
    }
  `);

  return articlePaths;
};

export type GetAllArticlesByLocale = (locale: string) => Promise<IArticle[]>;

export const getAllArticlesByLocale: GetAllArticlesByLocale = async (
  locale
) => {
  const articles = await client.fetch(
    groq`
    *[_type == 'post' && locale == $locale] | order(date desc, title asc) {
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
  `,
    { locale }
  );

  return articles;
};

export type GetArticleBySlug = (slug: string) => Promise<IArticle>;

export const getArticleBySlug: GetArticleBySlug = async (slug) => {
  const article = await client
    .fetch(
      groq`
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
    `,
      { slug }
    )
    .then((res) => res[0]);

  return article;
};

const builder = imageUrlBuilder(client);

export function urlFor(src: Asset | ImageReference) {
  return builder.image(src);
}
