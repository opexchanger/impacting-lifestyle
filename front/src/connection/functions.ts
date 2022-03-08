import imageUrlBuilder from '@sanity/image-url';
import client from './client';
import {
  blogPostPathsQuery,
  blogPostSlugsQuery,
  blogPostsQuery,
  blogPostQuery,
} from './queries';
import { Article, Asset, ImageReference } from '../types/sanity';

export type GetBlogPostPaths = () => Promise<Article[]>;

export const getBlogPostPaths: GetBlogPostPaths = async () => {
  const blogPostPaths = await client.fetch(blogPostPathsQuery);

  return blogPostPaths;
};

export type GetBlogPostSlugs = () => Promise<Article[]>;

export const getBlogPostSlugs: GetBlogPostSlugs = async () => {
  const blogPostSlugs = await client.fetch(blogPostSlugsQuery);

  return blogPostSlugs;
};

// export type GetBlogPosts = (
//   page: number,
//   postsPerPage: number
// ) => Promise<BlogPost[]>;
export type GetBlogPosts = () => Promise<Article[]>;

// export const getBlogPosts: GetBlogPosts = async (page, postsPerPage) => {
//   const start = (page - 1) * postsPerPage;
//   const end = page * postsPerPage;
//   const blogPosts = await client.fetch(blogPostsQuery, { start, end });

//   return blogPosts;
// };
export const getBlogPosts: GetBlogPosts = async () => {
  const blogPosts = await client.fetch(blogPostsQuery);

  return blogPosts;
};

export type GetBlogPost = (slug: string) => Promise<Article>;

export const getBlogPost: GetBlogPost = async (slug) => {
  const blogPost = await client
    .fetch(blogPostQuery, { slug })
    .then((res) => res[0]);

  return blogPost;
};

const builder = imageUrlBuilder(client);

export function urlFor(src: Asset | ImageReference) {
  return builder.image(src);
}
