import React from "react";


const wedding = [
  {
    id: 1,
    Image: "https://www.v3events.in/images/color-icon/guests.png",
    title: "Entertainment",
    description: "Event is the most efficient & direct tool for any communication. Entertainment in an event helps to leave a better .",
    // price: 500,
  },
  {
    id: 2,
    Image: "https://www.v3events.in/images/color-icon/wedding-rings.png",
    title: "Events",
    description: "We know how important any event that you do is to you whether in the corporate field or personally.",
    // price: 1000,
  },
  {
    id: 3,
    Image: "https://www.v3events.in/images/color-icon/wedding.png",
    title: "Wedding Venues",
    description: "The Wedding is a once-in-lifetime event and everyone wants a ravishing venue for that moment.",
    // price: 1000,
  },
  {
    id: 4,
    Image: "https://www.v3events.in/images/color-icon/location.png",
    title: "Hospitality",
    description: "Travel and Hotel arrangement is one of the major tensions while hosting any event. Therefore, to relieve you so that .",
    // price: 1500,
  },
  {
    id: 5,
    Image: "https://www.v3events.in/images/color-icon/cocktail.png",
    title: "Choreographers",
    description: "The V3 Events & Entertainments is a leading event management company in India, catering to the needs..",
    // price: 800,

  },
  {
    id: 6,
    Image: "https://www.v3events.in/images/color-icon/garlands.png",
    title: "Bollywood Singers",
    description: "If you are planning to hold an event for your company or in your city with Bollywood Singers, then V3 Events ...",
    // price: 800,

  },
  {
    id: 7,
    Image: "https://www.v3events.in/images/color-icon/curtains.png",
    title: "International Artists",
    description: "V3 Events & Entertainments is a well-reputed company which specializes in event management ...",
    // price: 800,

  },
  {
    id: 8,
    Image: "https://www.v3events.in/images/color-icon/balloons.png",
    title: "Anchors",
    description: "V3Events & Entertainments is having a dynamic and vibrant group of young professionals as Anchors who...",
    // price: 800,

  },
];

const WeddingCard = () => {

  console.log(wedding);

  return (
    <>
      <div >
        <ul className="Card" >
          {wedding.map((service) => (
            <div key={service.title} className="wedding-service-card" >
              <img src={service.Image} alt={service.title} className="image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {/* <span>${service.price}/hr</span> */}
            </div>
          ))}
        </ul>
      </div >
    </>
  );
};

export default WeddingCard;
