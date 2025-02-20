import React from 'react'



const FaqItem = ({ image, text}) => {

const highlightText = (text, words) => {
    const regex = new RegExp(`(${words.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
        words.includes(part) ? <span key={index} className="highlight">{part}</span> : part
    );
};

  return (
    <div>
        <p className="faq-text">
          <img src={image} alt="drop-down" className="circle" />
         {highlightText(text,['Excel'])}
         </p>        
      </div>
  )
}

export default FaqItem