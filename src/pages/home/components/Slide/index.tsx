import { Pagination } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import { Product, ProductProps } from "@src/components/Product";
import { useQuery } from "react-query";
import { api } from "@src/services/api-client";

import "swiper/css";
import "swiper/css/pagination";
import { SlideForYouProducts } from "../../styles.css";

interface SliderContainerProps {
  slug: string;
}

export function SliderContainer({ slug }: SliderContainerProps) {
  const { data: products } = useQuery<ProductProps[]>(
    `products-for-you`,
    async () => {
      const { data } = await api.get("products-for-you/" + slug);
      return data;
    }
  );

  const settings: SwiperProps = {
    draggable: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  };

  return (
    <SlideForYouProducts>
      <Swiper {...settings} modules={[Pagination]}>
        {products &&
          products.map((product, key) => (
            <SwiperSlide>
              <Product {...product} key={key} />
            </SwiperSlide>
          ))}
      </Swiper>
    </SlideForYouProducts>
  );
}
