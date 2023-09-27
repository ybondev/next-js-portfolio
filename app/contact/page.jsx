import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
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
            <form action="#">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mt-3">
                <textarea
                  cols="30"
                  rows="10"
                  className="form-control"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="btn_send mt-3">
                <button>send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
