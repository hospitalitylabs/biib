import matter from "gray-matter";
import type { GetStaticProps } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CardComponent from 'src/components/CardComponent'; 
import cardData from 'data/cardData';
import { NextSeo } from "next-seo";

import seo from "data/seo.json";
import Credits from "src/components/Credits";
import RendererListings from "src/components/RendererListings";
import RendererContent from "src/components/RendererContent";
import { FaLaptopHouse } from "react-icons/fa";

interface _Props {
  contentSource: MDXRemoteSerializeResult;
  listingsSource: MDXRemoteSerializeResult;
}

export const getStaticProps: GetStaticProps = async () => {
  // Import and deserialize content.mdx
  const contentMDX = (await import("data/content.mdx")).default as string;
  const { content: contentMDXContent, data: contentMDXData } = matter(contentMDX);
  const contentSource = await serialize(contentMDXContent, {
    scope: contentMDXData,
  });

  // Import and deserialize listings.mdx
  const listingsMDX = (await import("data/listings.mdx")).default as string;
  const { content: listingsMDXContent, data: listingsMDXData } = matter(listingsMDX);
  const listingsSource = await serialize(listingsMDXContent, {
    scope: listingsMDXData,
  });

  return {
    props: {
      contentSource,
      listingsSource,
    },
  };
};

export default function Home({ contentSource, listingsSource }: _Props) {
  return (
    <>
      <NextSeo {...seo} />
      <div className="wrapper">
        <div id="pmc-listing">
          <RendererContent>{contentSource}</RendererContent>
          <span style={{ color: 'white', display: 'block', textAlign: 'center', fontSize: '24px', marginTop: '20px', marginBottom: '20px' }}>Featured Properties</span>
          <Splide aria-label="Listing Slides" options={{
              type: 'loop',
              autoWidth: true,
              autoplay: false,
              perPage: 3,
              focus: 'center',
              breakpoints: {
                768: {
                  perPage: 1,
                  arrows: false, // Hides arrows on screens narrower than 768px
                },
              },
            }}>
          {cardData.map((card, index) => (
            <SplideSlide key={index}>
          <CardComponent
            key={index}
            imageUrl={card.imageUrl}
            name={card.name}
            location={card.location}
            bedrooms={card.bedrooms}
            bathrooms={card.bathrooms}
            occupancy={card.occupancy}
            url={card.url}
          />
          </SplideSlide>
        ))}
</Splide>
        </div>
        <style jsx global>{``}</style>
      </div>
    </>
  );
}
