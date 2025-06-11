// import "../css/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
          <textarea placeholder="Message" className="w-full border px-4 py-2 rounded h-32"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
