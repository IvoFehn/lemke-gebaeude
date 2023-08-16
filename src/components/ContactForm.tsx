"use client";

import React, { FormEvent, useRef } from "react";
import isValidEmail from "@/utils/emailValidate";
import emailjs from "@emailjs/browser";
import { cookies } from "next/headers";

type Props = {};

const ContactForm = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [validations, setValidations] = React.useState({
    fullnameValidation: false,
    phone_noValidation: false,
    emailValidation: false,
    messageValidation: false,
  });
  const [buttonMessage, setButtonMessage] =
    React.useState<string>("Send Message");

  const allValid = () => {
    return (
      validations.fullnameValidation &&
      validations.phone_noValidation &&
      validations.emailValidation &&
      validations.messageValidation
    );
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const cookieStore = cookies();
    const blockCookie = cookieStore.get("message_already_sent");
    const fullname = formRef.current?.fullname.value;
    const phone_no = formRef.current?.phone_no.value;
    const email = formRef.current?.email.value;
    const message = formRef.current?.message.value;

    setValidations((prevState) => ({
      ...prevState,
      fullnameValidation: fullname.length < 100 && fullname.length > 3,
    }));
    setValidations((prevState) => ({
      ...prevState,
      phone_noValidation: phone_no.length < 13 && phone_no.length > 3,
    }));
    setValidations((prevState) => ({
      ...prevState,
      emailValidation: isValidEmail(email),
    }));
    setValidations((prevState) => ({
      ...prevState,
      messageValidation: message.length < 500 && message.length > 20,
    }));

    if (!allValid || blockCookie) {
      return;
    }
    if (!formRef.current) {
      return;
    }
    emailjs
      .sendForm(
        "service_ikxquun",
        "template_b3fmqwz",
        formRef.current,
        "TGE-_gU4y31-X3Quq"
      )
      .then(
        (result) => {
          const oneHour = 60 * 60 * 1000; // Eine Stunde in Millisekunden
          cookies().set("message_already_sent", "true", {
            expires: Date.now() + oneHour,
          });
          setButtonMessage("Message Sent");
        },
        (error) => {
          setButtonMessage("Error");
        }
      );
  };

  return (
    <form
      className="bg-colorSecondary flex flex-col rounded-2xl p-8 w-3/4 gap-2 justify-center items-center"
      onSubmit={(e) => {
        submitHandler(e);
      }}
      ref={formRef}
    >
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Fullname"
        maxLength={100}
        className={`text-colorText rounded-tl-2xl rounded-br-2xl p-3 w-full ${
          !validations.fullnameValidation && "border-2 border-red-500"
        }`}
      />
      <input
        type="number"
        name="phone_no"
        id="phone_no"
        placeholder="Phone No."
        maxLength={13}
        className={`text-colorText rounded-tl-2xl rounded-br-2xl p-3 w-full ${
          !validations.phone_noValidation && "border-2 border-red-500"
        }`}
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        maxLength={100}
        className={`text-colorText rounded-tl-2xl rounded-br-2xl p-3 w-full ${
          !validations.emailValidation && "border-2 border-red-500"
        }`}
      />
      <textarea
        id="message"
        name="message"
        rows={5}
        minLength={20}
        maxLength={500}
        placeholder="Message"
        className={`text-colorText rounded-tl-2xl rounded-br-2xl p-3 w-full ${
          !validations.messageValidation && "border-2 border-red-500"
        }`}
      ></textarea>
      <input
        type="submit"
        value={buttonMessage.toUpperCase()}
        className="bg-colorPrimary w-64 p-3 mt-3 rounded-2xl cursor-pointer hover:bg-white hover:text-colorPrimary font-semibold transition duration-500 ease-in-out"
      ></input>
    </form>
  );
};

export default ContactForm;
