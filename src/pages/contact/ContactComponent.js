import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const formId = process.env.REACT_APP_FORMSPREE_ID;
const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              {/* <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div> */}
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          {/* <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                <img
											src={require(`../../assets/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/>
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade> */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault(); // prevent redirect
                    const form = e.target;
                    const data = new FormData(form);

                    const res = await fetch(
                      `https://formspree.io/f/${formId}`,
                      {
                        method: "POST",
                        body: data,
                        headers: { Accept: "application/json" },
                      }
                    );

                    if (res.ok) {
                      alert("Thanks for your message!");
                      form.reset();
                    } else {
                      alert("There was a problem submitting the form.");
                    }
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    marginTop: "2rem",
                  }}
                >
                  {/* Row: Name + Email */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      style={{
                        flex: "1",
                        padding: "0.6rem 1rem",
                        borderRadius: "8px",
                        border: `1px solid ${theme.text}`,
                        backgroundColor: theme.body,
                        color: theme.text,
                        minWidth: "180px",
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      style={{
                        flex: "1",
                        padding: "0.6rem 1rem",
                        borderRadius: "8px",
                        border: `1px solid ${theme.text}`,
                        backgroundColor: theme.body,
                        color: theme.text,
                        minWidth: "180px",
                      }}
                    />
                  </div>

                  {/* Message Field */}
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    style={{
                      padding: "0.8rem 1rem",
                      borderRadius: "8px",
                      border: `1px solid ${theme.text}`,
                      backgroundColor: theme.body,
                      color: theme.text,
                      resize: "none",
                    }}
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{
                      padding: "0.75rem 1.5rem",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: theme.text,
                      color: "#fff",
                      fontWeight: "bold",
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                  >
                    Send Message
                  </button>
                </form>

                {/* <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p> */}
              </div>
              <div className="contact-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <AddressImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
