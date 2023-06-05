import React from "react";
import { styled } from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.32865359996!2d74.74180477592763!3d13.329820687019444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb6ebd9b2409%3A0x6e35f909cbdb49ed!2sNiveus%20Solutions%20Pvt.%20Ltd.%20%7C%20Google%20Cloud%20Partner!5e0!3m2!1sen!2sin!4v1685355263494!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/moqzzrzn" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            />
            <textarea
              name="Enter Your Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter Your Message"
            /> 
            
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
