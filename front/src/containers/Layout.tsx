import NewsletterSubscribe from '../components/NewsletterSubscribe';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <NewsletterSubscribe />
      <Footer />
    </>
  );
};

export default Layout;
