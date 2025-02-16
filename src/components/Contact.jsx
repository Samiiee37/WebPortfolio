import React, { useState } from "react";

export default function Contact() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("samarvirnitsri23@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="contact-container space-y-2">
      <p className="grid-subtext text-center">CONTACT ME</p>
      <div className="copy-container" onClick={handleCopy}>
        <img
          src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
          alt="copy"
          className="copy-icon"
        />
        <p className="email lg:text-2xl md:text-xl font-medium text-white">
          samarvirnitsri23@gmail.com
        </p>
      </div>
    </div>
  );
}
