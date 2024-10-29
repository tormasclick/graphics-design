// app/page.tsx
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery'; // Keep the original import
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Gallery /> {/* Using the Gallery component directly */}
      <Footer />
    </div>
  );
};

export default Home;