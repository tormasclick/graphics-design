// app/components/Footer.tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Martin Ngungu Kioko. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/tormasclick" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/martin-ngungu-a120b5275/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href="mailto:ngushdare@gmail.com" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;