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
        "https://cdn.prod.website-files.com/66d39c6cae70a65d79022713/66eb8ad17d1501ae0e31ad4d_case-img-02-p-1600.webp",
    },
    {
      id: 2,
      title: "02",
      heading: "Meta",
      description:
        "@DV-LLC, we recognize the importance of tailoring content for each platform to maximize results. We unlock new revenue streams by adapting your content specifically for Facebook's unique environment. Your short-form content holds significant value on Facebook Reels and other lesser-known bonus features, which we leverage to your advantage.",
      imageUrl:
        "https://cdn.prod.website-files.com/66d39c6cae70a65d79022713/66eb8ae9e0fae570092bf87e_case-img-04.webp",
    },
    {
      id: 3,
      title: "03",
      heading: "Tiktok",
      description:
        "Short-form content is here to stay, but monetizing it can be challenging. At Daily Vertex LLC, we help you localize and monetize your short-form content by repurposing it for YouTube Shorts, Snap, and Facebook Reels, turning your passion into a profitable venture.",
      imageUrl:
        "https://cdn.prod.website-files.com/66d39c6cae70a65d79022713/66eb8adcdd7f69dee0ca62cc_case-img-03.webp",
    },
    {
      id: 4,
      title: "04",
      heading: "Youtube",
      description:
        "Daily Vertex LLC offers specialized YouTube Shorts Management services. Our expert team excels in transforming your existing content into engaging short-form videos tailored for YouTube Shorts. Leveraging our extensive knowledge and skills, we craft captivating Shorts optimized for the platform's unique format. With our proven track record of generating millions of views, we can elevate your brand's presence on YouTube Shorts, expanding your reach and enhancing your online visibility.",
      imageUrl:
        "https://cdn.prod.website-files.com/66d39c6cae70a65d79022713/66eb8ad17d1501ae0e31ad4d_case-img-02-p-1600.webp",
    },
  ];

  return (
    <div className="py-32">
      <div className="mx-auto">
        <div
          id="card-slider"
          className="max-w-7xl mx-8 relative"
          style={{ height: "350vh" }}
        >
          {cards.map((card, index) => {
            // Calculate scale and opacity
            const cardOffset = index * 500; // Adjust based on spacing
            const distance = Math.abs(scrollPosition - cardOffset);
            const opacity = Math.max(0.1, 1 - distance / 700);
            const scale = Math.max(0.7, 1 - distance / 1000); // Scale down when farther

            return (
              <div
                key={card.id}
                className="bg-cover bg-center p-5 md:p-10 h-[550px] mb-[-35px] transition-all duration-500 origin-center flex flex-col items-center justify-center rounded-2xl"
                style={{
                  backgroundImage: `url('${card.imageUrl}')`,
                  position: "sticky",
                  top: "20%",
                  zIndex: 1,
                  opacity,
                  transform: `scale(${scale})`,
                  transition: "all 0.5s ease-out",
                }}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                  {card.title}
                </h2>
                <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                  {card.heading}
                </h1>
                <p className="text-white text-sm md:text-lg leading-relaxed mb-8 max-w-xl text-center">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardVerticalSlider;
