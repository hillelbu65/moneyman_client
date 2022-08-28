import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Person() {
  const [massageVis, setMassageVis] = useState(true);
  const [transactionVis, setTransactionVis] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMassageVis(!massageVis);
    }, 8200);
  }, [massageVis]);

  useEffect(() => {
    setTimeout(() => {
      setTransactionVis(!transactionVis);
    }, 8200);
  }, [transactionVis]);

  return (
    <div className="">
      <motion.svg
        className="w-fit"
        viewBox="0 0 1182 835"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 1">
          <g id="Group 12">
            <g id="conveyor">
              <rect
                id="Rectangle 5"
                x="178"
                y="461"
                width="990"
                height="45"
                rx="22.5"
                fill="black"
              />
              <rect
                id="Rectangle 4"
                x="167.5"
                y="450.5"
                width="1011"
                height="66"
                rx="33"
                stroke="black"
                stroke-width="7"
              />
              <circle
                id="Ellipse 103"
                cx="200.5"
                cy="483.5"
                r="22.5"
                fill="#2D2D2D"
              />
              <circle id="Ellipse 105" cx="200" cy="483" r="7" fill="#9A9090" />
              <circle
                id="Ellipse 104"
                cx="1145.5"
                cy="483.5"
                r="22.5"
                fill="#2D2D2D"
              />
              <circle
                id="Ellipse 106"
                cx="1146"
                cy="483"
                r="7"
                fill="#9A9090"
              />
            </g>

            {transactionVis ? (
              <g>
                <motion.g
                  id="money1"
                  initial={{ x: -700, opacity: 0 }}
                  animate={{ x: 1200, opacity: 1 }}
                  transition={{ ease: "linear", duration: 6, delay: 3.6 }}
                  key="money1"
                >
                  <g id="Group 7">
                    <rect
                      id="Rectangle 9"
                      x="352"
                      y="327"
                      width="75"
                      height="75"
                      rx="9"
                      fill="#824600"
                    />
                    <path
                      id="Polygon 1"
                      d="M388.6 419.76C388.965 420.512 390.035 420.512 390.4 419.76L399.296 401.417C399.618 400.753 399.134 399.981 398.396 399.981H380.604C379.866 399.981 379.382 400.753 379.704 401.417L388.6 419.76Z"
                      fill="#824600"
                    />
                  </g>
                  <g id="dollar-sign" clip-path="url(#clip0_5_3)">
                    <path
                      id="Vector"
                      d="M389.5 347.192V378.923"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M396.712 352.962H385.894C384.555 352.962 383.271 353.493 382.325 354.44C381.378 355.387 380.846 356.671 380.846 358.01C380.846 359.348 381.378 360.632 382.325 361.579C383.271 362.526 384.555 363.058 385.894 363.058H393.106C394.445 363.058 395.729 363.59 396.675 364.536C397.622 365.483 398.154 366.767 398.154 368.106C398.154 369.445 397.622 370.729 396.675 371.675C395.729 372.622 394.445 373.154 393.106 373.154H380.846"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </motion.g>

                <motion.g
                  id="money2"
                  initial={{ x: -700, opacity: 0 }}
                  animate={{ x: 1000, opacity: 1 }}
                  transition={{ ease: "linear", duration: 6, delay: 2.6 }}
                  key="money2"
                >
                  <g id="Group 7_2">
                    <rect
                      id="Rectangle 9_2"
                      x="636"
                      y="325"
                      width="75"
                      height="75"
                      rx="9"
                      fill="#824600"
                    />
                    <path
                      id="Polygon 1_2"
                      d="M672.6 417.76C672.965 418.512 674.035 418.512 674.4 417.76L683.296 399.417C683.618 398.753 683.134 397.981 682.396 397.981H664.604C663.866 397.981 663.382 398.753 663.704 399.417L672.6 417.76Z"
                      fill="#824600"
                    />
                  </g>
                  <g id="dollar-sign_2" clip-path="url(#clip1_5_3)">
                    <path
                      id="Vector_3"
                      d="M673.5 345.192V376.923"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M680.712 350.962H669.894C668.555 350.962 667.271 351.493 666.325 352.44C665.378 353.387 664.846 354.671 664.846 356.01C664.846 357.348 665.378 358.632 666.325 359.579C667.271 360.526 668.555 361.058 669.894 361.058H677.106C678.445 361.058 679.729 361.59 680.675 362.536C681.622 363.483 682.154 364.767 682.154 366.106C682.154 367.445 681.622 368.729 680.675 369.675C679.729 370.622 678.445 371.154 677.106 371.154H664.846"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </motion.g>

                <motion.g
                  id="money3"
                  initial={{ x: -700, opacity: 0 }}
                  animate={{ x: 500, opacity: 1 }}
                  transition={{ ease: "linear", duration: 4, delay: 1.6 }}
                  key="money3"
                >
                  <g id="Group 7_3">
                    <rect
                      id="Rectangle 9_3"
                      x="972"
                      y="327"
                      width="75"
                      height="75"
                      rx="9"
                      fill="#824600"
                    />
                    <path
                      id="Polygon 1_3"
                      d="M1008.6 419.76C1008.96 420.512 1010.04 420.512 1010.4 419.76L1019.3 401.417C1019.62 400.753 1019.13 399.981 1018.4 399.981H1000.6C999.866 399.981 999.382 400.753 999.704 401.417L1008.6 419.76Z"
                      fill="#824600"
                    />
                  </g>
                  <g id="dollar-sign_3" clip-path="url(#clip2_5_3)">
                    <path
                      id="Vector_5"
                      d="M1009.5 347.192V378.923"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_6"
                      d="M1016.71 352.962H1005.89C1004.56 352.962 1003.27 353.493 1002.32 354.44C1001.38 355.387 1000.85 356.671 1000.85 358.01C1000.85 359.348 1001.38 360.632 1002.32 361.579C1003.27 362.526 1004.56 363.058 1005.89 363.058H1013.11C1014.44 363.058 1015.73 363.59 1016.68 364.536C1017.62 365.483 1018.15 366.767 1018.15 368.106C1018.15 369.445 1017.62 370.729 1016.68 371.675C1015.73 372.622 1014.44 373.154 1013.11 373.154H1000.85"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </motion.g>
              </g>
            ) : (
              ""
            )}

            <g id="person">
              <g id="Group 2">
                <rect
                  id="Rectangle 2"
                  x="165.513"
                  y="723.294"
                  width="57.7572"
                  height="43.9645"
                  fill="#824600"
                />
                <g id="Vector 17" filter="url(#filter0_d_5_3)">
                  <path
                    d="M167.237 460.37C167.237 460.37 193.96 548.677 193.961 596.776C193.961 658.976 193.961 751.742 193.961 751.742"
                    stroke="#11427C"
                    stroke-width="81"
                  />
                </g>
                <path
                  id="Vector 20"
                  d="M159.217 799.497L163.228 755.505L217.236 755.505C229.878 756.873 269.354 773.098 269.233 804.496C269.227 806.11 267.834 807.334 266.221 807.264L162.075 802.766C160.364 802.692 159.062 801.203 159.217 799.497Z"
                  fill="white"
                />
              </g>
              <rect
                id="Rectangle 3"
                x="73.8667"
                y="706.916"
                width="46.2451"
                height="31.8958"
                transform="rotate(8.84222 73.8667 706.916)"
                fill="#824600"
              />
              <rect
                id="Rectangle 1"
                x="393.468"
                y="195.545"
                width="9.48253"
                height="81.9906"
                transform="rotate(11.1758 393.468 195.545)"
                fill="#D9D9D9"
              />
              <path
                id="Vector 23"
                d="M372.536 247.796L365.558 259.048L358.26 274.018L354.011 284.396C353.149 286.502 353.116 288.857 353.921 290.987L357.832 301.337C358.167 302.222 358.639 303.049 359.231 303.788L362.117 307.385C365.664 311.807 372.366 311.888 376.019 307.553L378.93 304.099C379.412 303.528 379.82 302.898 380.146 302.225L390.165 281.556L395.918 265.708L402.759 244.347L405.831 230.345C406.002 229.563 406.069 228.763 406.028 227.964L405.822 223.852C405.774 222.909 405.303 222.038 404.54 221.481C403.478 220.706 402.045 220.678 400.953 221.41L400.297 221.85C399.754 222.214 399.301 222.699 398.976 223.266L396.973 226.755L391.801 239.686L385.413 256.495L383.459 262.203C383.23 262.873 382.599 263.324 381.89 263.324C381.292 263.324 380.74 263.002 380.446 262.481L380.261 262.152C379.921 261.55 379.869 260.827 380.119 260.183L381.479 256.683C381.75 255.986 381.933 255.258 382.024 254.516L382.867 247.623C382.996 246.573 382.547 245.536 381.693 244.911C381.192 244.545 380.588 244.347 379.968 244.347L378.656 244.347C377.661 244.347 376.678 244.561 375.773 244.975L375.703 245.007C374.395 245.604 373.294 246.574 372.536 247.796Z"
                fill="#824600"
              />
              <path
                id="Vector 21"
                d="M54.9747 775.953L64.5705 735.295L115.333 742.493C127.014 745.458 161.862 765.908 157.697 795.326C157.471 796.925 155.92 797.938 154.333 797.643L57.3456 779.592C55.6614 779.278 54.5812 777.62 54.9747 775.953Z"
                fill="#F9F9F9"
              />
              <path
                id="Vector 18"
                d="M96.5494 447.439C96.5494 447.439 110.342 535.615 110.342 583.643C110.342 645.75 96.5494 736.656 96.5494 736.656"
                stroke="#133E72"
                stroke-width="75"
              />
              <circle
                id="Ellipse 49"
                cx="146.117"
                cy="337.528"
                r="146.117"
                fill="#EADDC5"
              />
              <g id="Vector 19" filter="url(#filter1_d_5_3)">
                <path
                  d="M158.082 278.869C148.776 265.833 130.665 262.81 117.63 272.116C104.594 281.422 101.571 299.533 110.877 312.568L158.082 278.869ZM204.305 358.217L194.207 385.402L204.305 358.217ZM134.479 295.719C110.877 312.568 110.88 312.572 110.883 312.577C110.884 312.578 110.887 312.583 110.89 312.586C110.894 312.593 110.9 312.6 110.906 312.609C110.917 312.625 110.931 312.645 110.948 312.667C110.98 312.712 111.021 312.769 111.071 312.838C111.17 312.976 111.304 313.16 111.471 313.389C111.805 313.846 112.273 314.482 112.866 315.273C114.051 316.854 115.741 319.067 117.864 321.737C122.09 327.054 128.125 334.302 135.381 342.034C148.952 356.495 170.305 376.523 194.207 385.402L214.404 331.032C204 327.168 190.44 315.947 177.674 302.344C171.762 296.045 166.773 290.058 163.267 285.647C161.524 283.453 160.171 281.68 159.279 280.49C158.834 279.896 158.505 279.45 158.303 279.172C158.201 279.033 158.131 278.937 158.094 278.885C158.076 278.86 158.065 278.845 158.063 278.842C158.062 278.841 158.063 278.842 158.066 278.847C158.068 278.849 158.07 278.852 158.073 278.856C158.074 278.857 158.076 278.861 158.077 278.862C158.08 278.865 158.082 278.869 134.479 295.719ZM194.207 385.402C217.584 394.086 242.015 391.891 263.038 386.271C284.256 380.6 304.641 370.744 321.84 360.767C339.188 350.704 354.254 339.951 364.93 331.777C370.295 327.669 374.619 324.16 377.643 321.642C379.157 320.381 380.349 319.365 381.188 318.642C381.607 318.281 381.938 317.992 382.178 317.783C382.297 317.678 382.394 317.593 382.467 317.529C382.504 317.496 382.535 317.469 382.559 317.447C382.572 317.436 382.583 317.427 382.592 317.418C382.597 317.414 382.603 317.409 382.605 317.407C382.611 317.402 382.616 317.397 363.353 295.719C344.091 274.04 344.095 274.036 344.099 274.033C344.1 274.032 344.104 274.029 344.106 274.027C344.109 274.024 344.111 274.022 344.112 274.021C344.113 274.02 344.109 274.024 344.099 274.033C344.079 274.05 344.036 274.088 343.971 274.145C343.842 274.258 343.624 274.448 343.321 274.709C342.716 275.231 341.774 276.034 340.527 277.073C338.03 279.152 334.327 282.16 329.669 285.726C320.298 292.902 307.332 302.131 292.737 310.597C277.995 319.149 262.528 326.371 248.059 330.239C233.396 334.159 222.306 333.967 214.404 331.032L194.207 385.402Z"
                  fill="#EADDC5"
                />
              </g>
              <circle
                id="Ellipse 50"
                cx="149.996"
                cy="134.516"
                r="46.5506"
                fill="#824600"
              />
              <path
                id="Vector 24"
                d="M186.066 163.092L187.056 163.228L187.33 161.247L186.339 161.111L186.066 163.092ZM185.26 161.971L185.123 162.962L185.26 161.971ZM186.339 161.111L185.397 160.981L185.123 162.962L186.066 163.092L186.339 161.111ZM185.397 160.981C179.476 160.165 173.771 158.202 168.601 155.202L167.597 156.932C172.992 160.062 178.945 162.11 185.123 162.962L185.397 160.981Z"
                fill="black"
              />
              <ellipse
                id="Ellipse 41"
                rx="6.03434"
                ry="5.60331"
                transform="matrix(-1 0 0 1 153.445 90.9822)"
                fill="black"
              />
              <ellipse
                id="Ellipse 48"
                rx="3.87922"
                ry="3.01717"
                transform="matrix(-1 0 0 1 159.91 94.4304)"
                fill="black"
              />
              <path
                id="Vector 8"
                d="M176.72 122.447C178.344 119.639 180.259 118.358 183.129 118.16C186.335 117.938 188.698 119.31 190.513 122.447"
                stroke="#090909"
                stroke-opacity="0.33"
                stroke-width="2"
                stroke-linecap="round"
              />
              <circle
                id="Ellipse 32"
                cx="184.066"
                cy="127.207"
                r="5.62205"
                fill="#D9D9D9"
              />
              <g id="Ellipse 35">
                <circle cx="186.989" cy="129.268" r="3.37323" fill="#4D2F0C" />
                <circle cx="186.989" cy="129.268" r="3.37323" fill="#4D2F0C" />
                <circle cx="186.989" cy="129.268" r="3.37323" fill="#4D2F0C" />
              </g>
              <ellipse
                id="Ellipse 36"
                rx="6.03434"
                ry="5.60331"
                transform="matrix(-1 0 0 1 183.616 101.327)"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 37"
                rx="6.03434"
                ry="5.60331"
                transform="matrix(-1 0 0 1 183.616 101.327)"
                fill="black"
              />
              <ellipse
                id="Ellipse 38"
                rx="6.89638"
                ry="6.46536"
                transform="matrix(-1 0 0 1 188.789 106.499)"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 46"
                rx="6.89638"
                ry="6.46536"
                transform="matrix(-1 0 0 1 188.789 106.499)"
                fill="black"
              />
              <circle
                id="Ellipse 47"
                cx="183.316"
                cy="92.8375"
                r="4.87245"
                fill="black"
              />
              <ellipse
                id="Ellipse 42"
                rx="6.03434"
                ry="5.60331"
                transform="matrix(-1 0 0 1 188.789 97.0166)"
                fill="black"
              />
              <ellipse
                id="Ellipse 43"
                rx="6.03434"
                ry="5.60331"
                transform="matrix(-1 0 0 1 171.548 91.8443)"
                fill="#141414"
              />
              <circle
                id="Ellipse 45"
                r="7.75843"
                transform="matrix(-1 0 0 1 169.823 93.9994)"
                fill="black"
              />
              <circle
                id="Ellipse 44"
                r="5.60331"
                transform="matrix(-1 0 0 1 178.875 88.3961)"
                fill="black"
              />
              <ellipse
                id="Ellipse 40"
                rx="9.48253"
                ry="9.0515"
                transform="matrix(-1 0 0 1 174.996 99.6027)"
                fill="black"
              />
              <ellipse
                id="Ellipse 68"
                rx="9.48253"
                ry="9.0515"
                transform="matrix(-1 0 0 1 172.41 89.2581)"
                fill="black"
              />
              <circle
                id="Ellipse 91"
                r="4.31024"
                transform="matrix(-1 0 0 1 193.961 101.758)"
                fill="black"
              />
              <circle
                id="Ellipse 92"
                r="4.31024"
                transform="matrix(-1 0 0 1 186.202 89.6891)"
                fill="black"
              />
              <ellipse
                id="Ellipse 39"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 153.014 100.896)"
                fill="black"
              />
              <ellipse
                id="Ellipse 95"
                rx="5.60331"
                ry="5.17229"
                transform="matrix(-1 0 0 1 148.703 120.723)"
                fill="black"
              />
              <circle
                id="Ellipse 96"
                r="3.87922"
                transform="matrix(-1 0 0 1 153.876 125.464)"
                fill="black"
              />
              <circle
                id="Ellipse 97"
                r="3.01717"
                transform="matrix(-1 0 0 1 155.6 116.844)"
                fill="black"
              />
              <circle
                id="Ellipse 99"
                r="4.31024"
                transform="matrix(-1 0 0 1 153.445 112.964)"
                fill="black"
              />
              <circle
                id="Ellipse 100"
                r="2.15512"
                transform="matrix(-1 0 0 1 156.462 110.809)"
                fill="black"
              />
              <circle
                id="Ellipse 98"
                r="4.31024"
                transform="matrix(-1 0 0 1 155.169 121.585)"
                fill="black"
              />
              <ellipse
                id="Ellipse 59"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 141.807 100.034)"
                fill="black"
              />
              <ellipse
                id="Ellipse 60"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 125.428 118.137)"
                fill="black"
              />
              <ellipse
                id="Ellipse 61"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 140.945 113.826)"
                fill="black"
              />
              <ellipse
                id="Ellipse 62"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 111.635 127.619)"
                fill="black"
              />
              <g id="Ellipse 56" filter="url(#filter2_d_5_3)">
                <ellipse
                  rx="8.18946"
                  ry="8.62048"
                  transform="matrix(-1 0 0 1 147.841 127.619)"
                  fill="#824600"
                />
              </g>
              <g id="Ellipse 58" filter="url(#filter3_d_5_3)">
                <ellipse
                  rx="2.84315"
                  ry="5.88497"
                  transform="matrix(-0.866025 0.5 0.5 0.866025 147.301 126.831)"
                  fill="#5A3306"
                />
              </g>
              <ellipse
                id="Ellipse 57"
                rx="4.31024"
                ry="3.87922"
                transform="matrix(-1 0 0 1 148.272 109.085)"
                fill="black"
              />
              <ellipse
                id="Ellipse 63"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 109.911 117.275)"
                fill="black"
              />
              <ellipse
                id="Ellipse 64"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 116.808 112.964)"
                fill="black"
              />
              <ellipse
                id="Ellipse 74"
                rx="5.60331"
                ry="5.17229"
                transform="matrix(-1 0 0 1 112.497 102.62)"
                fill="black"
              />
              <ellipse
                id="Ellipse 75"
                rx="5.60331"
                ry="5.17229"
                transform="matrix(-1 0 0 1 109.049 106.93)"
                fill="black"
              />
              <ellipse
                id="Ellipse 76"
                rx="5.60331"
                ry="5.17229"
                transform="matrix(-1 0 0 1 114.221 96.5856)"
                fill="black"
              />
              <ellipse
                id="Ellipse 77"
                rx="5.60331"
                ry="5.17229"
                transform="matrix(-1 0 0 1 115.945 106.93)"
                fill="black"
              />
              <ellipse
                id="Ellipse 79"
                rx="5.60331"
                ry="5.17229"
                transform="matrix(-1 0 0 1 127.152 96.5856)"
                fill="black"
              />
              <ellipse
                id="Ellipse 80"
                rx="5.60331"
                ry="5.17229"
                transform="matrix(-1 0 0 1 122.842 95.7235)"
                fill="black"
              />
              <ellipse
                id="Ellipse 81"
                rx="4.74126"
                ry="4.31024"
                transform="matrix(-1 0 0 1 137.497 92.2753)"
                fill="black"
              />
              <ellipse
                id="Ellipse 65"
                rx="6.03434"
                ry="5.60331"
                transform="matrix(-1 0 0 1 105.17 127.188)"
                fill="black"
              />
              <ellipse
                id="Ellipse 52"
                rx="5.3574"
                ry="5.10229"
                transform="matrix(-0.944685 0.327979 0.327979 0.944685 108.872 125.036)"
                fill="black"
              />
              <ellipse
                id="Ellipse 89"
                rx="5.3574"
                ry="5.10229"
                transform="matrix(-0.944685 0.327979 0.327979 0.944685 106.732 135.058)"
                fill="black"
              />
              <ellipse
                id="Ellipse 53"
                rx="5.60377"
                ry="5.33692"
                transform="matrix(-0.999907 -0.0136571 -0.0136571 0.999907 165.155 100.274)"
                fill="black"
              />
              <ellipse
                id="Ellipse 70"
                rx="6.89638"
                ry="6.46536"
                transform="matrix(-1 0 0 1 123.273 103.051)"
                fill="black"
              />
              <ellipse
                id="Ellipse 66"
                rx="5.60377"
                ry="5.33692"
                transform="matrix(-0.999907 -0.0136571 -0.0136571 0.999907 147.052 84.7575)"
                fill="black"
              />
              <ellipse
                id="Ellipse 67"
                rx="5.60377"
                ry="5.33692"
                transform="matrix(-0.999907 -0.0136571 -0.0136571 0.999907 147.052 84.7575)"
                fill="black"
              />
              <ellipse
                id="Ellipse 55"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 158.186 87.103)"
                fill="black"
              />
              <ellipse
                id="Ellipse 72"
                rx="6.46536"
                ry="6.03434"
                transform="matrix(-1 0 0 1 132.324 106.068)"
                fill="black"
              />
              <ellipse
                id="Ellipse 82"
                rx="9.0515"
                ry="8.62048"
                transform="matrix(-1 0 0 1 120.256 106.93)"
                fill="black"
              />
              <ellipse
                id="Ellipse 84"
                rx="6.89638"
                ry="6.46536"
                transform="matrix(-1 0 0 1 137.066 87.534)"
                fill="black"
              />
              <ellipse
                id="Ellipse 86"
                rx="6.89638"
                ry="6.46536"
                transform="matrix(-1 0 0 1 127.583 89.2581)"
                fill="black"
              />
              <ellipse
                id="Ellipse 88"
                rx="6.89638"
                ry="6.46536"
                transform="matrix(-1 0 0 1 132.755 93.5684)"
                fill="black"
              />
              <ellipse
                id="Ellipse 93"
                rx="6.89638"
                ry="6.46536"
                transform="matrix(-1 0 0 1 120.687 90.9822)"
                fill="black"
              />
              <ellipse
                id="Ellipse 85"
                rx="6.46536"
                ry="6.03434"
                transform="matrix(-1 0 0 1 146.117 90.5512)"
                fill="black"
              />
              <g id="Group 1">
                <path
                  id="Vector 32"
                  d="M186.612 96.9725L108.827 114.043C105.046 114.873 101.317 112.455 100.531 108.665C99.758 104.935 102.132 101.278 105.853 100.465L183.654 83.4656C187.489 82.6278 191.25 85.1461 191.937 89.0103C192.586 92.6632 190.236 96.1772 186.612 96.9725Z"
                  fill="#560C0C"
                />
              </g>
              <path
                id="Vector 33"
                d="M137.066 70.4443C106.463 77.6342 106.894 100.896 106.894 100.896L183.616 85.2471C183.616 85.2471 167.668 63.2543 137.066 70.4443Z"
                fill="#560C0C"
              />
            </g>

            <AnimatePresence>
              {massageVis ? (
                <motion.g>
                  <motion.rect
                    id="Rectangle 3_2"
                    x="390"
                    y="132"
                    width="114"
                    height="52"
                    rx="13"
                    fill="#824600"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 2 }}
                    exit={{ y: 50, duration: 0.2, delay: 0.3, opacity: 0 }}
                    key="Rectangle 3_2"
                  />
                  <motion.rect
                    id="Rectangle 2_2"
                    x="390"
                    y="66"
                    width="180"
                    height="52"
                    rx="13"
                    fill="#824600"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 3.5 }}
                    exit={{ y: 50, duration: 0.2, delay: 0.3, opacity: 0 }}
                    key="Rectangle 2_2"
                  />
                  <motion.rect
                    id="Rectangle 1_2"
                    x="390"
                    width="180"
                    height="52"
                    rx="13"
                    fill="#824600"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 4.5 }}
                    exit={{ y: 50, duration: 0.2, opacity: 0 }}
                    key="Rectangle 1_2"
                  />
                </motion.g>
              ) : (
                ""
              )}
            </AnimatePresence>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_5_3"
            x="124.471"
            y="448.646"
            width="113.99"
            height="311.096"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_3"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_5_3"
            x="101.477"
            y="266.716"
            width="285.128"
            height="132.496"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_3"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_5_3"
            x="135.652"
            y="118.999"
            width="24.3789"
            height="25.241"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_3"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_5_3"
            x="139.464"
            y="121.538"
            width="15.6738"
            height="18.5848"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_3"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_5_3">
            <rect
              width="34.6154"
              height="34.6154"
              fill="white"
              transform="translate(372.192 345.75)"
            />
          </clipPath>
          <clipPath id="clip1_5_3">
            <rect
              width="34.6154"
              height="34.6154"
              fill="white"
              transform="translate(656.192 343.75)"
            />
          </clipPath>
          <clipPath id="clip2_5_3">
            <rect
              width="34.6154"
              height="34.6154"
              fill="white"
              transform="translate(992.192 345.75)"
            />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
}
