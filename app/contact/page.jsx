"use client";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_ID,
        process.env.NEXT_PUBLIC_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="row gy-3">
        <h1 className="header">
          contact <span>me</span>
        </h1>
        <div className="col-md-6">
          <div className="left_col">
            <Image
              src={"./assets/contact.svg"}
              width={1000}
              height={1000}
              className="img-fluid"
              priority
              alt=""
            />
            <div className="details">
              <div className="icon_details">
                <FaMapMarker className="fa_icon" />
                <Link
                  href="https://maps.app.goo.gl/T9GSDH4PvBKXJ8PfA"
                  target="_blank"
                  className="link"
                >
                  Poblacion, Balete, Batangas
                </Link>
              </div>
              <div className="icon_details">
                <FaPhoneAlt className="fa_icon" />
                <Link href={`tel:09309858393`} className="link">
                  0930 985 8393
                </Link>
              </div>
              <div className="icon_details">
                <FaEnvelope className="fa_icon" />
                <Link href={`mailto: ybon.dev@gmail.com`} className="link">
                  ybon.dev@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right_col">
            <form action="#" ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="user_name"
                  required
                />
              </div>
              <div className="mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="user_email"
                  required
                />
              </div>
              <div className="mt-3">
                <textarea
                  cols="30"
                  rows="10"
                  className="form-control"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="btn_send mt-3">
                <button>{loading ? "sending..." : "send message"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
