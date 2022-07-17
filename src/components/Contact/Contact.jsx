import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2n354wp",
        "template_wqad59l",
        formRef.current,
        "user_OZNstPzANkZiv3FV6XfsT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div name="contact" className="c">
      <div className="sm:text-center pb-8 pl-4">
        <p className="contact text-4xl font-bold inline text-white">Contact</p>
      </div>

      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Connect with me here</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +917021485130
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              prakhars76@gmail.com
            </div>
            <div className="c-info-item"></div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to talk?</b> Send your queries in the form below
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: "white" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: "antiquewhite" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: "white" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: "white" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && <span style={{ color: "white" }}>"Thank you..."</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
