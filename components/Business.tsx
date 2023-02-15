import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Business = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationX = useAnimation();
  const animationY = useAnimation();
  const animationZ = useAnimation();
  const pathAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animationX.start({
        x: 0,
        opacity: 1,
        transition: { type: "fade", duration: 1 },
      });
      animationY.start({
        x: 0,
        opacity: 1,
        transition: { type: "fade", duration: 1 },
      });
      animationZ.start({
        y: 0,
        opacity: 1,
        transition: { type: "ease-out", duration: 1 },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: { ease: "easeInOut", duration: 2 },
      });
    }
    if (!inView) {
      animationX.start({ opacity: 0, x: "-30px" });
      animationY.start({ opacity: 0, x: "30px" });
      animationZ.start({ opacity: 0, y: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);

  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-full bg-[#f9f9fc]rounded-tl-[100px] relative">
        <div className="pt-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="pb-2 text-3xl left-[5%]">
              <h2>Our Business</h2>
            </div>
            <p className="py-2">The NMG Group is made up of 3 core business.</p>
          </div>
          <div className="w-[90%] md:w-[70%] md:mx-auto flex justify-between items-center gap-2 md:gap-4 pt-6">
            <div className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104.289"
                  height="92.851"
                  viewBox="0 0 104.289 92.851"
                >
                  <g
                    id="Group_20"
                    data-name="Group 20"
                    transform="translate(-209.5 -1131)"
                  >
                    <rect
                      id="Rectangle_24"
                      data-name="Rectangle 24"
                      width="75"
                      height="75"
                      rx="12"
                      transform="translate(238.789 1131)"
                      fill="#f6ebec"
                    />
                    <g
                      id="Group_16"
                      data-name="Group 16"
                      transform="translate(-196.524 751.925)"
                    >
                      <path
                        id="Path_33"
                        data-name="Path 33"
                        d="M417.891,494.208v-2.757a13.962,13.962,0,0,1,13.962-13.962h7.366a14.078,14.078,0,0,1,11.957,6.75"
                        transform="translate(-3.81 -33.838)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        id="Path_34"
                        data-name="Path 34"
                        d="M436.55,477.489l5.844,10.505,5.844-10.505"
                        transform="translate(-10.668 -33.837)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <rect
                        id="Rectangle_30"
                        data-name="Rectangle 30"
                        width="16.955"
                        height="20.669"
                        rx="8.478"
                        transform="translate(423.248 422.982)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        id="Path_35"
                        data-name="Path 35"
                        d="M432.489,455.675s3.23.454,5.329-1.484c0,0,1.94,2.07,6.475,2.533"
                        transform="translate(-9.176 -25.274)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_36"
                        data-name="Path 36"
                        d="M466.306,509.547v-2.756a13.962,13.962,0,0,1,13.962-13.962h7.366A13.962,13.962,0,0,1,501.6,506.791v2.756"
                        transform="translate(-21.605 -39.476)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        id="Path_37"
                        data-name="Path 37"
                        d="M484.965,492.828l5.844,10.505,5.844-10.505"
                        transform="translate(-28.463 -39.475)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <rect
                        id="Rectangle_31"
                        data-name="Rectangle 31"
                        width="16.955"
                        height="20.669"
                        rx="8.478"
                        transform="translate(453.868 432.684)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        id="Path_38"
                        data-name="Path 38"
                        d="M480.9,471.014s3.23.455,5.329-1.483c0,0,1.94,2.069,6.475,2.532"
                        transform="translate(-26.971 -30.913)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_39"
                        data-name="Path 39"
                        d="M444.15,513.979H407.524V503.924h31.935"
                        transform="translate(0 -43.553)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <motion.path
                        animate={pathAnimation}
                        id="Path_40"
                        data-name="Path 40"
                        d="M439.429,410.939h-7.942v6.054l-7.98-6.054h-2.395a5.083,5.083,0,0,1-5.084-5.084V390.509a5.083,5.083,0,0,1,5.084-5.083h33.432a5.083,5.083,0,0,1,5.084,5.083v.07"
                        transform="translate(-3.126)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <motion.path
                        animate={pathAnimation}
                        id="Path_41"
                        data-name="Path 41"
                        d="M500.161,425.919H477.1v6.055l-7.98-6.055H466.73a5.083,5.083,0,0,1-5.084-5.084V405.489a5.083,5.083,0,0,1,5.084-5.083h33.431a5.083,5.083,0,0,1,5.084,5.083v15.346A5.084,5.084,0,0,1,500.161,425.919Z"
                        transform="translate(-19.892 -5.506)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_42"
                        data-name="Path 42"
                        d="M475.814,421.766l8.9-5.743,5.743,2.641,8.874-6.678"
                        transform="translate(-25.1 -9.173)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-center md:text-xl text-sm">
                  NMG Consulting
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center">
                  A specialist consultency focused on the insurance.
                </p>
              </div>
              <div>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="93.077"
                  height="80"
                  viewBox="0 0 93.077 80"
                >
                  <g
                    id="Group_18"
                    data-name="Group 18"
                    transform="translate(-593.711 -1126)"
                  >
                    <rect
                      id="Rectangle_24"
                      data-name="Rectangle 24"
                      width="80"
                      height="80"
                      rx="38"
                      transform="translate(606.789 1126)"
                      fill="#f6ebec"
                    />
                    <g
                      id="Group_17"
                      data-name="Group 17"
                      transform="translate(0 2)"
                    >
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        d="M223.423,1131.986v47.339h65.252"
                        transform="translate(371.789 13)"
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <motion.path
                        animate={pathAnimation}
                        id="Path_32"
                        data-name="Path 32"
                        d="M238.136,1163.332l19.831-14.074,6.4,7.677,18.639-13.5"
                        transform="translate(371.789 13)"
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <g
                        id="Ellipse_7"
                        data-name="Ellipse 7"
                        transform="translate(651 1148)"
                        stroke="#f6ebec"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <circle cx="6.5" cy="6.5" r="6.5" stroke="none" />
                        <circle cx="6.5" cy="6.5" r="8.5" fill="none" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-center md:text-xl text-sm">
                  NMG Benefits
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center">
                  A Employee benefilt consulting and administration.
                </p>
              </div>
              <div>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="139.075"
                  height="130.396"
                  viewBox="0 0 139.075 130.396"
                >
                  <g
                    id="Group_19"
                    data-name="Group 19"
                    transform="translate(-954.608 -1087.094)"
                  >
                    <path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M42.6,24.349a16,16,0,0,1,27.792,0l28.946,50.72A16,16,0,0,1,85.446,99H27.554a16,16,0,0,1-13.9-23.931Z"
                      transform="translate(954.608 1123.884) rotate(-19)"
                      fill="#f6ebec"
                    />
                    <rect
                      id="Rectangle_25"
                      data-name="Rectangle 25"
                      width="21"
                      height="10"
                      rx="2"
                      transform="translate(1011 1191)"
                      fill="none"
                      stroke="#000"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <rect
                      id="Rectangle_29"
                      data-name="Rectangle 29"
                      width="21"
                      height="10"
                      rx="2"
                      transform="translate(985 1191)"
                      fill="none"
                      stroke="#000"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <rect
                      id="Rectangle_26"
                      data-name="Rectangle 26"
                      width="21"
                      height="10"
                      rx="2"
                      transform="translate(1011 1176)"
                      fill="none"
                      stroke="#000"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <rect
                      id="Rectangle_27"
                      data-name="Rectangle 27"
                      width="21"
                      height="10"
                      rx="2"
                      transform="translate(1011 1161)"
                      fill="none"
                      stroke="#000"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <motion.circle
                      animate={pathAnimation}
                      id="Ellipse_8"
                      data-name="Ellipse 8"
                      cx="15.5"
                      cy="15.5"
                      r="15.5"
                      transform="translate(971 1151)"
                      fill="none"
                      stroke="#000"
                      stroke-width="3"
                    />
                    <text
                      id="_"
                      data-name="$"
                      transform="translate(987 1173)"
                      font-size="20"
                      font-family="SegoeUI, Segoe UI"
                    >
                      <tspan x="-5.391" y="0">
                        $
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-center md:text-xl text-sm">
                  NMG Capital
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center">
                  A private equity business investing in financial services
                </p>
              </div>
              <div>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-40px] left-[180px] md:top[-4px] md:left-[700px] lg:top-[-40px] lg:left-[700px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57.753"
            height="68.729"
            viewBox="0 0 57.753 68.729"
          >
            <path
              id="Path_28"
              data-name="Path 28"
              d="M427.716,839.841s-7.06,37.653,34.123,40.006c17.05.974,15.906-8.584,11.461-11.49-8.277-4.022-25.408,2.535-11.461,22.757A34.61,34.61,0,0,0,480.426,903.8"
              transform="translate(-425.11 -837.507)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="4"
            />
          </svg>
        </div>
        <div className="ansolute top-[20px] left-[235px] md:top-[20px] md:left-[755px] lg:top-[20px] lg:left-[755px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.243"
            height="26.833"
            viewBox="0 0 22.243 26.833"
          >
            <path
              id="Path_29"
              data-name="Path 29"
              d="M554.2,163.5s14.357,1.683,14.357-10.24c-.477,11.923,8.476,10.24,8.476,10.24s-8.562-.581-7.608,8C567.99,164.351,554.2,163.5,554.2,163.5Z"
              transform="translate(173.505 -552.196) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
          </svg>
        </div>
        <div className="absolute top-[-50px] left-[180px] md:top-[-50px] md:left-[700px] lg:top[-50px] lg:left-[700px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
          >
            <circle id="Ellipse_6" data-name="Ellipse 6" cx="3" cy="3" r="3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Business;
