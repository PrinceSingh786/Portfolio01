import React from "react";

const Contact = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">CONTACT</h1>
        <p className="text-xl mt-4">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
      </div>
      <form className="max-w-lg mx-auto p-6 border-2 border-gray-300 rounded-lg">
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg h-32"
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="px-8 py-4 text-lg font-bold bg-blue-500 text-white rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
