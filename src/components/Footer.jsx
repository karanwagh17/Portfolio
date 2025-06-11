import "../css/footer.css"
const Footer = () => {
  return (
    <footer className="py-6 text-center bg-gray-100 text-sm">
      © {new Date().getFullYear()} Alex Dev. All rights reserved.
    </footer>
  );
};

export default Footer;
