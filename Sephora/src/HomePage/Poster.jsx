
import { Link } from "react-router-dom";

import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

// Poster
import { AiOutlineCaretRight } from "react-icons/ai";
const posterData = [
  {
    id: 1,
    image:
      "https://www.sephora.com/contentimages/2024-3-1-kerastase-premiere-collection-site-desktop-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=400",
    title: "Fight Damage with New Kérastase Première",
    paragraph: "Visibly restore 99% of hair's original strength.*",
    link: "SHOP NOW",
  },
  {
    id: 2,
    image:
      "https://www.sephora.com/contentimages/2024-2-29-black-owned-brands-site-desktop-mobile-app-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=400",
    title: "The Need-to-Know",
    paragraph: "Discover new and exclusive hair care from PATTERN.",
    link: "SNAP IT UP",
  },
  {
    id: 3,
    image:
      "https://www.sephora.com/contentimages/2024-02-19-digital-personalization-bundle-b-site-desktop-home-page-rwd-marketing-banner-february-skincare-trending-on-social-us-final.jpg?imwidth=400",
    title: "Hot on Social",
    paragraph: "On-trend skincare picks all over your #FYP.",
    link: "SHOP NOW",
  },
];
export const Poster = () => {
  return (
    <>
      <SimpleGrid
        display="flex"
        justifyContent="space-between"
        px={32}
        pt={12}
        m="auto"
        id="postercontainer"
      >
        {posterData.map((ele) => (
          <Box id="singlePosterContent" key={ele.id} borderRadius="5px">
            <Box id="posterImageContainer" w="fit-content">
              <Image className="rounded-t-md" m="auto" src={ele.image} />
            </Box>
            <Box
            id="posterContenttextDiv"
              pt={6}
              pb={6}
              px={3}
              style={{
                background:
                  ele.id === 1
                    ? "#FF7379"
                    : ele.id === 2
                    ? "#97B9AB"
                    : ele.id === 3
                    ? "#D13D3D"
                    : null,
                color: ele.id === 3 && "white",
              }}
            >
              <Text fontSize={18} fontWeight={700}>
                {ele.title}
              </Text>
              <Text className="hover:underline" fontSize={14} fontWeight={400}>
                {ele.paragraph}
              </Text>
              <Box mt={5} display="flex" alignItems="center" gap={2}>
                <Link
                  className="font-bold text-xs hover:underline"
                  mt={5}
                  to={ele.id}
                >
                  {ele.link}{" "}
                </Link>
                <AiOutlineCaretRight className="font-bold text-xs" />
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};


