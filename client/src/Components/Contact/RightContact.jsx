import React, { useState } from "react";
import axios from "axios";

function RightContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const server_link = "https://my-portfolio-2w8t.onrender.com";
  // const server_link = "http://localhost:4000";

  const sendHandler = async (e) => {
    e.preventDefault();

    setErrMessage("");
    setSuccessMessage("");

    if (!name.trim()) {
      return setErrMessage("Name is Required!");
    }

    if (!phone.trim()) {
      return setErrMessage("Phone is Required!");
    }

    if (!email.trim()) {
      return setErrMessage("Email is Required!");
    }

    if (!subject.trim()) {
      return setErrMessage("Subject is Required!");
    }

    if (!message.trim()) {
      return setErrMessage("Message is Required!");
    }

    try {
      setLoading(true)
      const response = await axios.post(`${server_link}/send-email`, {
        name,
        phone,
        email,
        subject,
        message,
      });

      if (response.data.success) {
        setSuccessMessage(response.data.message);

        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setErrMessage(response.data.message || "Something happened on the server.");
      }
    } catch (error) {
      setErrMessage(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong."
      );
      setLoading(false)
    } finally {
      setLoading(false)
      setTimeout(() => {
        setErrMessage("");
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <div className="md:w-[65%] py-10 gap-8 p-8 rounded-lg flex flex-wrap-reverse md:flex-col shadow-lg shadow-black">
      <form
        onSubmit={sendHandler}
        className="w-[96%] shadow-lg shadow-black p-4"
      >
        <div className="flex justify-between flex-wrap gap-10">
          <div className="md:w-[45%] flex justify-start items-start gap-3 flex-col">
            <p className="text-gray-400 text-xl">YOUR NAME</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`contactInput ${
                errMessage === "Name is Required!"
                  ? "border border-red-900"
                  : ""
              }`}
              type="text"
            />
          </div>

          <div className="md:w-[45%] flex justify-start items-start gap-3 flex-col">
            <p className="text-gray-400 text-xl">YOUR PHONE</p>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="contactInput"
              type="text"
            />
          </div>
        </div>

        <div className="flex justify-start items-start gap-3 flex-col mt-5">
          <p className="text-gray-400 text-xl">Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contactInput"
            type="email"
          />
        </div>

        <div className="flex justify-start items-start gap-3 flex-col mt-5">
          <p className="text-gray-400 text-xl">Subject</p>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="contactInput"
            type="text"
          />
        </div>

        <div className="flex justify-start items-start gap-3 flex-col mt-5">
          <p className="text-gray-400 text-xl">Message</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textareaInput"
            cols={30}
            rows={10}
          ></textarea>
        </div>

        <div className="mt-3">
          <button
            type="submit"
            className="w-full h-12 rounded-lg border-b border-b-gray-600 bg-stone-900 active:outline-none text-neutral-300 hover:bg-indigo-950 focus-visible:outline-red-950 outline-none focus-visible:border-b-transparent duration-300"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      {errMessage && (
          <p
            className={`py-3 bg-neutral-900 shadow-lg shadow-slate-700 text-center animate-bounce text-base mt-4 ${
              errMessage === "Your message has been sent successfully"
                ? "text-green-500"
                : "text-orange-700"
            }`}
          >
            {errMessage}
          </p>
        )}
        {successMessage && (
          <p className="py-3 bg-neutral-300 shadow-lg shadow-slate-700 text-center animate-bounce text-green-500 text-base mt-4">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default RightContact;
