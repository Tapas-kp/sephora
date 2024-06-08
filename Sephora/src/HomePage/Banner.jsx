import { Link } from "react-router-dom";
import { PiCaretRightFill } from "react-icons/pi";
// react slider
import Slider from "react-slick";
// react slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        
        }
      },
    ]
  };

  return (
    <div id="bannercontainer">
      <div id="bannercontainerChild" className="mt-2 px-8 bg-white">
        <Slider{...settings}>
          {bannerData.map((ele) => (
            <div id="bannercontent" style={{border:"1px solid"}} key={ele.id} className="-ml-1 cursor-pointer">
              <div className="bannerImages">
                <img className="rounded-t-md  w-[595px] h-[363.33px] " src={ele.image} alt="image" />
              </div>
              <div
              id="textcontainer"
                className=" flex-col gap-3 h-[150px] pl-6 pt-6 rounded-b-md"
                style={{
                  backgroundColor:
                    ele.id === "1"
                      ? "#CE7183"
                      : ele.id === "2"
                      ? "#FF82A4"
                      : ele.id === "3"
                      ? "#F57F7D"
                      : ele.id === "4"
                      ? "#F2EEED"
                      : ele.id === "5"
                      ? "#F3E38E"
                      : ele.id === "6"
                      ? "#9F5E62"
                      : null,
                }}
              >
                <h1 className="text-xl font-bold">{ele.name}</h1>
                <p className="text-sm hover:underline">{ele.paragraph}</p>
                <div className="mt-3 text-sm font-bold flex items-center gap-2">
                  <Link id="linkShop" className="hover:underline">{ele.shop}</Link>
                  <PiCaretRightFill />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const bannerData = [
  {
    id: "1",
    image:
      "https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-mauve-image-only-us-3003-3079-release.jpg?imwidth=545",
    name: "Mauve on Mauve",
    paragraph: "Play uo your lips and cheeks with a wash of color.",
    shop: "SHOP NOW",
  },
  {
    id: "2",
    image:
      "https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-pink-us-can-2883-release.jpg?imwidth=545",
    name: "Pink on Pink",
    paragraph: "Make this lip-and-cheek look your whole personality.",
    shop: "SHOP NOW",
  },
  {
    id: "3",
    image:
      "https://www.sephora.com/contentimages/2024-02-19-slotting-bestsellers-v2-site-rwd-hp-hero-banner-US-CA_01.jpg?imwidth=545",
    name: "Bestselling Beauty",
    paragraph: "Thesee fan-favorites are worth the hype.",
    shop: "SHOP NOW",
  },
  {
    id: "4",
    image:
      "https://www.sephora.com/contentimages/2024-2-17-mufe-hd-skin-hydra-glow-skincare-foundation-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=545",
    name: "New MAKEUP FOR EVER",
    paragraph:
      "HD Skin Hydra Glow Foundation: 24 hours of hydrating, blurring coverage. Only t Sephora.",
    shop: "SHOP NOW",
  },
  {
    id: "5",
    image:
      "https://www.sephora.com/contentimages/2024-2-14-kosas-bb-burst-tinted-moisturizer-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=545",
    name: "New Kosas BB Burst Tinted Gel Cream",
    paragraph: "Hydrates, visibly smooths, and comes in 24 shades.",
    shop: "SHOP NOW",
  },
  {
    id: "6",
    image:
      "https://www.sephora.com/contentimages/2024-02-03-slotting-just-arrived-v3-site-rwd-home-page-hero-banner-english-US-CA-handoff-handoff_01.jpg?imwidth=545",
    name: "The Latest Lineup",
    paragraph: "New beauty from the hottest brands.",
    shop: "SHOP NOW",
  },
];

export default Banner
