import React, { useEffect, useState } from "react";

const CardVerticalSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById("card-slider");
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        if (scrollY >= offsetTop && scrollY <= offsetTop + rect.height) {
          setScrollPosition(scrollY - offsetTop);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: "01",
      heading: "SnapChat",
      description:
        "We collaborate closely with Snap to identify and pitch top-tier talent for Discover Shows. Once approved, we manage the entire process of running the show optimally, including re-editing and optimizing your existing (YouTube) content, conducting A/B tests on thumbnails, and analyzing performance data. This service requires no additional work from you, and you retain 100% ownership of the channel we help establish.",
      imageUrl:
        "https://cdn.prod.website-files.com/66964d12f0212962622e6bf1/66a0f357df090a9fae0434ce_big-event-01.jpg",
    },
    {
      id: 2,
      title: "02",
      heading: "Meta",
      description:
        "@DV-LLC, we recognize the importance of tailoring content for each platform to maximize results. We unlock new revenue streams by adapting your content specifically for Facebook's unique environment. Your short-form content holds significant value on Facebook Reels and other lesser-known bonus features, which we leverage to your advantage.",
      imageUrl:
        "https://cdn.prod.website-files.com/66964d12f0212962622e6bf1/66a0f6b9de34b4135d84d9a4_big-event-04.jpg",
    },
    {
      id: 3,
      title: "03",
      heading: "Tiktok",
      description:
        "Short-form content is here to stay, but monetizing it can be challenging. At Daily Vertex LLC, we help you localize and monetize your short-form content by repurposing it for YouTube Shorts, Snap, and Facebook Reels, turning your passion into a profitable venture.",
      imageUrl:
        "https://cdn.prod.website-files.com/66964d12f0212962622e6bf1/66a0f53f450aa349402b0468_big-event-02.jpg",
    },
    {
      id: 4,
      title: "04",
      heading: "Youtube",
      description:
        "Daily Vertex LLC offers specialized YouTube Shorts Management services. Our expert team excels in transforming your existing content into engaging short-form videos tailored for YouTube Shorts. Leveraging our extensive knowledge and skills, we craft captivating Shorts optimized for the platform's unique format. With our proven track record of generating millions of views, we can elevate your brand's presence on YouTube Shorts, expanding your reach and enhancing your online visibility.",
      imageUrl:
        "https://cdn.prod.website-files.com/66964d12f0212962622e6bf1/66a0f53f450aa349402b0468_big-event-02.jpg",
    },
  ];

  return (
    <>
      <div className="py-10 bg-[#141412]">
        <h1 className="text-6xl font-bold text-center p-4 mb-8">Services</h1>
        <div className="mx-auto">
          <div
            id="card-slider"
            className="max-w-7xl mx-8 relative "
            style={{ height: "350vh" }}
          >
            {cards.map((card, index) => {
              // Calculate scale and opacity
              const cardOffset = index * 500; // Adjust based on spacing
              const distance = Math.abs(scrollPosition - cardOffset);
              {
                /* const opacity = Math.max(0.1, 1 - distance / 700); */
              }
              const scale = Math.max(0.7, 1 - distance / 1000); // Scale down when farther

              return (
                <div
                  key={card.id}
                  className="bg-cover bg-center p-5 md:p-10 h-[550px] mb-[-35px] transition-all duration-500 origin-center flex flex-col items-center justify-center rounded-2xl border-2"
                  style={{
                    backgroundImage: `url('${card.imageUrl}')`,
                    position: "sticky",
                    top: "20%",
                    zIndex: 1,
                    // opacity,
                    transform: `scale(${scale})`,
                    transition: "all 0.5s ease-out",
                  }}
                >
                  <div className="absolute rounded-t-2xl top-0 left-0 w-full h-[15%] bg-blue-500 flex items-center justify-center">
                    <h1 className="text-lg md:text-2xl font-bold text-white">
                      {card.heading}
                    </h1>
                  </div>
                  {/* Content Section */}
                  <div className="flex flex-col items-center justify-center flex-grow">
                    <p className="text-white text-sm md:text-lg leading-relaxed mb-8 max-w-xl text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVerticalSlider;
