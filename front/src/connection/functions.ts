import imageUrlBuilder from '@sanity/image-url';
import client from './client';
import { articlesPathsQuery, allArticlesQuery, articleQuery } from './queries';
import { IArticle, Asset, ImageReference } from '../types/sanity';

export type GetAllArticlePaths = () => Promise<IArticle[]>;

export const getAllArticlesPaths: GetAllArticlePaths = async () => {
  const articlePaths = await client.fetch(articlesPathsQuery);

  return articlePaths;
};

// export type Getarticles = (
//   page: number,
//   postsPerPage: number
// ) => Promise<article[]>;
export type GetAllArticles = () => Promise<IArticle[]>;

// export const getarticles: Getarticles = async (page, postsPerPage) => {
//   const start = (page - 1) * postsPerPage;
//   const end = page * postsPerPage;
//   const articles = await client.fetch(articlesQuery, { start, end });

//   return articles;
// };
export const getAllArticles: GetAllArticles = async () => {
  const articles = await client.fetch(allArticlesQuery);

  return articles;
};

export type GetArticle = (slug: string) => Promise<IArticle>;

export const getArticle: GetArticle = async (slug) => {
  const article = await client
    .fetch(articleQuery, { slug })
    .then((res) => res[0]);

  return article;
};

const builder = imageUrlBuilder(client);

export function urlFor(src: Asset | ImageReference) {
  return builder.image(src);
}
