"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import isValidEmail from "@/utils/emailValidate";
import emailjs from "@emailjs/browser";
import { useConsentCookie } from "@/context/ConsentCookieContext";

const checkLocalStorage = (blockMessage: string | null = null) => {
  if (blockMessage) {
    try {
      const parsedItem = JSON.parse(blockMessage);
      const expires = parsedItem.expires;

      if (typeof expires === "number" && Date.now() > expires) {
        localStorage.removeItem("blockMessage");
      }
    } catch (error) {
      console.error("Error parsing or processing blockMessage:", error);
    }
  }
};

type Props = {
  consent: boolean;
};

const ContactForm = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { state, dispatch } = useConsentCookie();

  const [validations, setValidations] = React.useState({
    fullnameValidation: false,
    phone_noValidation: false,
    emailValidation: false,
    messageValidation: false,
  });
  const [buttonMessage, setButtonMessage] =
    React.useState<string>("Nachricht senden");
  const [showErrorMessage, setShowErrorMessag] = useState<string>("");

  const allValid = () => {
    return (
      validations.fullnameValidation &&
      validations.phone_noValidation &&
      validations.emailValidation &&
      validations.messageValidation
    );
  };

  useEffect(() => {
    checkLocalStorage();
    const intervalId = setInterval(() => {
      checkLocalStorage();
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const blockMessage = localStorage.getItem("blockMessage");
    const expires = JSON.parse(blockMessage || "{}").expires;

    const expirationDate = new Date(expires);
    expirationDate.setMinutes(expirationDate.getMinutes() + 1);
    const localExpirationDate = expirationDate.toLocaleString();
    checkLocalStorage(blockMessage);
    if (blockMessage) {
      setShowErrorMessag(
        `Es wurde bereits eine Nachricht vor kurzem versendet. Bitte warten sie bis ${localExpirationDate} bis Sie die nächste Nachricht versenden können. `
      );
      return;
    }

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

    if (!allValid()) {
      setShowErrorMessag(
        `Nicht alle Felder korrekt ausgefüllt. Bitte ändern Sie die Eingaben und versuchen Sie es erneut. `
      );
      return;
    }
    if (!formRef.current) {
      return;
    }
    emailjs
      .sendForm(
        "service_69d6mdd",
        "template_1koqmbd",
        formRef.current,
        "j9j2jl6meqprpx-7b"
      )
      .then(
        (result) => {
          const oneHour = 60 * 60 * 1000;
          const storageStingifyItem = JSON.stringify({
            type: "message_already_sent",
            expires: Date.now() + oneHour,
          });
          localStorage.setItem("blockMessage", storageStingifyItem);
          setButtonMessage("Nachricht versendet");
          setShowErrorMessag(`Nachricht wurde erfolgreich versendet `);
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
      aria-label="Kontaktformular"
    >
      <label htmlFor="fullname" className="w-full text-left text-colorText">
        Name
      </label>
      <input
        disabled={state.showBanner}
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Name"
        maxLength={100}
        aria-required="true"
        className={`text-colorText rounded-tl-2xl ${
          !state.showBanner ? "" : "bg-colorDisabledLightGrey"
        } rounded-br-2xl p-3 w-full ${
          !validations.fullnameValidation && "border-2 border-red-500"
        }`}
      />
      <label htmlFor="phone_no" className="w-full text-left text-colorText">
        Telefonnummer
      </label>
      <input
        disabled={state.showBanner}
        type="tel"
        name="phone_no"
        id="phone_no"
        placeholder="Telefonnummer"
        maxLength={13}
        aria-required="true"
        className={`text-colorText rounded-tl-2xl ${
          !state.showBanner ? "" : "bg-colorDisabledLightGrey"
        } rounded-br-2xl p-3 w-full ${
          !validations.phone_noValidation && "border-2 border-red-500"
        }`}
      />
      <label htmlFor="email" className="w-full text-left text-colorText">
        E-Mail
      </label>
      <input
        disabled={state.showBanner}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        maxLength={100}
        aria-required="true"
        className={`text-colorText rounded-tl-2xl ${
          !state.showBanner ? "" : "bg-colorDisabledLightGrey"
        } rounded-br-2xl p-3 w-full ${
          !validations.emailValidation && "border-2 border-red-500"
        }`}
      />
      <label htmlFor="message" className="w-full text-left text-colorText">
        Nachricht
      </label>
      <textarea
        disabled={state.showBanner}
        id="message"
        name="message"
        rows={5}
        minLength={20}
        maxLength={500}
        placeholder="Nachricht"
        aria-required="true"
        className={`text-colorText rounded-tl-2xl ${
          !state.showBanner ? "" : "bg-colorDisabledLightGrey"
        } rounded-br-2xl p-3 w-full ${
          !validations.messageValidation && "border-2 border-red-500"
        }`}
      ></textarea>
      <input
        disabled={state.showBanner}
        type="submit"
        value={buttonMessage.toUpperCase()}
        className={`bg-colorPrimary w-64 p-3 mt-3 rounded-2xl font-semibold  ${
          !state.showBanner
            ? "cursor-pointer hover:bg-white hover:text-colorPrimary  transition duration-500 ease-in-out"
            : "bg-colorDisabledLightGrey"
        } `}
      ></input>
      {showErrorMessage && (
        <span className="text-white text-sm">{showErrorMessage}</span>
      )}
      {state.showBanner && (
        <span className="text-white text-sm">
          Das Formular steht zur Nutzung erst zur Verfügung, nachdem die Cookies
          akzeptiert worden sind.
        </span>
      )}
    </form>
  );
};

export default ContactForm;
