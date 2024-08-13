import React, { useState } from "react";
import "./QuestionBanner.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h6>{title}</h6>
        <img src="/assets/elements/questionbanner.png" alt="" />
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default function QuestionBanner() {
  return (
    <div className="container-quesbanner">
      <div className="question-banner">
        <div className="content-question">
          <h3>You've Got Any Questions?</h3>
          <div className="question-answer">
            <div className="answer">
              <Accordion
                title={"How to chat with courier?"}
                content={
                  "Communicating with the courier is typically facilitated through the platform's messaging system or customer support channels. Customers can inquire about the status of their delivery, provide specific delivery instructions, or address any concerns they may have regarding the shipment. "
                }
              />
            </div>
            <div className="answer">
              <Accordion
                title={"How to buy?"}
                content={
                  "At EcoSen, shopping becomes easy and healthy. Customers can discover high-quality healthy food products from various categories. Choose your products, add them to the cart, review in the cart, and proceed to checkout."
                }
              />
            </div>
            <div className="answer">
              <Accordion
                title={"How can I return the product if I am not satisfied?"}
                content={
                  "If the received product does not meet your expectations, you can initiate a return by following the return process outlined by the eCommerce platform. Typically, this involves accessing your order history, selecting the item you wish to return, and providing a reason for the return. "
                }
              />
            </div>
          </div>
        </div>
        <div className="banner-sale">
          <div className="content-sale">
            <div className="contentsale">
              <div className="title-sale">
                <h4>Summer Sale</h4>
                <h1>35% OFF</h1>
              </div>
              <h6>
                Free on all your orders, free shipping and 30-day money-back
                guarantee
              </h6>
            </div>
            <button className="button-banner">
              <img src="/assets/elements/arrow-buttonbanner.png" alt="" />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
