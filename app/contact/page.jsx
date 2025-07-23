"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw6ntIdwk4MR501fyQ5B415aFwgqIWfSUm5r-dv6h_k3SfXDHMMRSVkuOVtQGIqHqGe/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.current.reset();
      } else {
        toast.error("Failed to send message!");
      }
    } catch (error) {
      alert("An error occurred while sending the message.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row gy-3">
      <h1 className="header">
        Contact <span>Me</span>
      </h1>
      <div className="col-md-6">
        <div className="left_col">
          <Image
            src="/assets/contact.svg"
            width={1000}
            height={1000}
            className="img img-fluid"
            priority
            alt="Contact Illustration"
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
              <Link href="tel:09309858393" className="link">
                0930 985 8393
              </Link>
            </div>
            <div className="icon_details">
              <FaEnvelope className="fa_icon" />
              <Link href="mailto:ybon.dev@gmail.com" className="link">
                ybon.dev@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="right_col">
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              type="email"
              className="form-control mt-3"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              cols="30"
              rows="10"
              className="form-control mt-3"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <div className="btn_send d-flex justify-content-end mt-3">
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
