import { GetStaticProps } from 'next';
import { isBefore, parseISO } from 'date-fns';

import ArticlesFeed from '../containers/ArticlesFeed';
import Layout from '../containers/Layout';
import CardArticle from '../components/CardArticle';
import EmptyPosts from '../components/EmptyPosts';

import { getAllArticlesByLocale } from '../connection/functions';
import { IArticle } from '../types/sanity';
import { LocaleProvider } from '../context/useLocaleContext';

const filterListedAndOnDateArticles = (articles: IArticle[]): IArticle[] =>
  articles
    .filter(({ date }) => isBefore(parseISO(date), Date.now()))
    .filter(({ listed }) => listed);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles = await getAllArticlesByLocale(locale);

  return {
    props: {
      articles,
      locale,
    },
  };
};

export interface ArticleProps {
  articles: IArticle[];
}

// aí agora ele ta aqui fora e n tem mais acsso ao valor inicial rs
// export const LocaleContext = createContext<string>(undefined);
// e agora ele virou custom hook o/

const Index = ({ articles }: ArticleProps) => {
  // createcontext tava aqui dentro, mas aí n posso exportar ele pros outros usarem com o useContext
  const filteredArticles = filterListedAndOnDateArticles(articles);

  return (
    // <LocaleProvider value={locale}>
    <Layout>
      {articles && articles.length ? (
        <ArticlesFeed featured={filteredArticles[0]}>
          {filteredArticles.map((article) => (
            <CardArticle article={article} key={article.slug} />
          ))}
        </ArticlesFeed>
      ) : (
        <EmptyPosts />
      )}
    </Layout>
    // </LocaleProvider>
  );
};

export default Index;
