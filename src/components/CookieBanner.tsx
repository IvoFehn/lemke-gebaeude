import React, { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import { useConsentCookie } from "@/context/ConsentCookieContext";

const CookieConsentBanner = () => {
  const { state, dispatch } = useConsentCookie();

  useEffect(() => {
    const consent = getCookie("userConsent");
    if (!consent) {
      dispatch({ type: "SHOW_BANNER" });
    } else {
      // Verstecke das Banner, da die Zustimmung bereits erteilt wurde
      dispatch({ type: "HIDE_BANNER" });
    }
  }, [dispatch]);

  const handleAccept = () => {
    setCookie("userConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    dispatch({ type: "HIDE_BANNER" });
  };

  return (
    state.showBanner && (
      <div className="fixed bottom-0 left-0 right-0 bg-white py-4 px-6 text-center shadow-md flex justify-center items-center flex-col ">
        <p className="text-sm text-colorText">
          Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern.
          Wenn Sie die Cookies nicht akzeptieren können bestimmte Dinge auf der
          Website nur eingeschränkt dargestellt werden oder nutzbar gemacht
          werden.
        </p>
        <button
          onClick={handleAccept}
          className="mt-3 bg-blue-500 text-colorText active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer"
        >
          Akzeptieren
        </button>
      </div>
    )
  );
};

export default CookieConsentBanner;
