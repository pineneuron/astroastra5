'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Roshni Thapa',
    role: 'Verified Customer',
    text: 'I truly believe the universe guided me here. The astrologer explained my kundali in a very calm and spiritual way. Predictions were surprisingly accurate. Thank you for the genuine guidance.',
    stars: 5,
  },
  {
    name: 'Anil Shrestha',
    role: 'Verified Customer',
    text: 'An amazing experience! The reading was incredibly detailed and resonated deeply with my life situation. I feel more clarity and direction after my session. Highly recommended.',
    stars: 5,
  },
  {
    name: 'Sita Gurung',
    role: 'Verified Customer',
    text: 'The gemstone recommendation was spot on. After wearing it for a month I noticed positive changes in my professional life. The team is very knowledgeable and professional.',
    stars: 5,
  },
  {
    name: 'Bikash Rai',
    role: 'Verified Customer',
    text: 'Very authentic and trustworthy service. The birth chart reading was thorough and the astrologer was patient in answering all my questions. Will definitely come back.',
    stars: 5,
  },
  {
    name: 'Priya Maharjan',
    role: 'Verified Customer',
    text: 'The marriage compatibility report was detailed and accurate. Both my partner and I were impressed. The guidance helped us understand each other on a deeper level.',
    stars: 5,
  },
  {
    name: 'Roshan KC',
    role: 'Verified Customer',
    text: 'Excellent service! The numerology session was eye-opening. I understood patterns in my life I had never noticed before. Very professional and spiritually aligned team.',
    stars: 5,
  },
];

export default function ReviewsSlider() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2 className="tsf-font-larken text-black text-[36px] text-center mb-10">
          Some of our Best Google Reviews
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'review-bullet',
            bulletActiveClass: 'review-bullet-active',
          }}
          loop
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          centeredSlides
          className="reviews-swiper !pb-12"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i} className="reviews-slide">
              {({ isActive }) => (
                <div
                  className={`h-full rounded-[10px] p-6 flex flex-col gap-5 border transition-colors duration-300 ${
                    isActive ? 'border-[#f37335]' : 'border-[#b4b9c9]'
                  }`}
                >
                  {/* Reviewer info */}
                  <div className="flex flex-col">
                    <span className="tsf-font-larken text-[#353e5c] text-[16px] leading-[24px]">
                      {review.name}
                    </span>
                    <span className="tsf-font-larken text-[#9094a1] text-[14px] leading-[24px]">
                      {review.role}
                    </span>
                  </div>

                  {/* Stars */}
                  <Image
                    src="/images/icon-stars-sm.svg"
                    alt={`${review.stars} stars`}
                    width={112}
                    height={15}
                  />

                  {/* Review text */}
                  <p className="tsf-font-larken text-[#575d73] text-[16px] leading-[30px] flex-1">
                    {review.text}
                  </p>

                  {/* Google attribution */}
                  <div className="flex items-center gap-3">
                    <Image src="/images/icon-google.png" alt="Google" width={24} height={24} />
                    <span className="tsf-font-public-sans text-[#575d73] text-[16px]">Google</span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .reviews-swiper .swiper-pagination {
          bottom: 0;
        }
        .review-bullet {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(243,115,53,0.35);
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .review-bullet-active {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: transparent;
          border: 3px solid rgba(244,170,54,0.9);
          vertical-align: middle;
        }
      `}</style>
    </section>
  );
}
