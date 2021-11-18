import React from "react";
import Marquee from "react-fast-marquee";
export default function Banner() {
  return (
    <Marquee
      speed={120}
      pauseOnHover
      gradient={false}
      className="banner__container"
    >
      {/* <div className="banner__container__spacer"></div> */}
      امریکی تعلقات پر نظر رکھنے والے اکثر ماہرین امریکی تعلقات پر نظر رکھنے
      والے اکثر ماہرین امریکی تعلقات پر نظر رکھنے والے اکثر ماہرین امریکی تعلقات
      پر نظر رکھنے والے اکثر ماہرین امریکی تعلقات پر نظر رکھنے والے اکثر ماہرین
      امریکی تعلقات پر نظر رکھنے والے اکثر ماہرین امریکی تعلقات پر نظر رکھنے
      والے اکثر ماہرین
    </Marquee>
  );
}
