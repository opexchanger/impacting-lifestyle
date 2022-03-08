import Footer from './Footer';
import Navigation from './Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
