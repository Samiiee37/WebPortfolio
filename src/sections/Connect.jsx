import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

export default function Connect() {
  const formRef = useRef();
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [loading, setloading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    // Clear the form as soon as the button is clicked
    setform({
      name: "",
      email: "",
      message: "",
    });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "SAMARVIR SINGH",
          from_email: form.email,
          to_email: "samarvirnitsri23@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setloading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
          }, [3000]);
        },
        (error) => {
          setloading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="connect">
      <h1 className="talk">Let's talk</h1>
      <p className="infointro">I am open for work</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          <span className="spann">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="ex., John Doe"
          />
        </label>

        <label>
          <span className="spann">Email address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="ex., johndoe@gmail.com"
          />
        </label>

        <label>
          <span className="spann">Your message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="field-input"
            placeholder="Share your thoughts or inquiries..."
          />
        </label>

        <button className="field-btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
