import React, { useState } from "react";
import "./Faq.styles.css";
import faqData from "./faqData";
import FaqItem from "./Faq-item";

const FAQ = () => {
    const [dataItem, setDataItem] = useState(faqData)
  return (
    <div className="faq">
      <div
        className="faq-bgImage"
        style={{
          backgroundImage: `url(/images/FAQ-img.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="faq-content">
            <h2>F.A.Qs</h2>
            {dataItem.map(({id, ...item})=> (
        <FaqItem key={id} {...item} />
      ))}       
      </div>
    </div>
  );
};

export default FAQ;
