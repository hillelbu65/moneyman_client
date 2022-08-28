import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Frame() {
  const [massageVis, setMassageVis] = useState(true);
  const [transactionVis, setTransactionVis] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMassageVis(!massageVis);
    }, 8000);
  }, [massageVis]);

  useEffect(() => {
    setTimeout(() => {
      setTransactionVis(!transactionVis);
    }, 8000);
  }, [transactionVis]);

  return (
    <div className="w-fit">
      <motion.svg
        width=""
        className="w-screen max-w-5xl"
        viewBox="0 0 1512 787"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 13">
          <rect
            id="Rectangle 37"
            y="615"
            width="1512"
            height="28"
            fill="#6D3C01"
          />
          <rect
            id="Rectangle 36"
            x="940"
            y="308.947"
            width="116"
            height="306"
            fill="#824600"
          />
          <g id="tree">
            <path
              id="Vector 43"
              d="M1360.91 586.783L1355.94 613.785H1378.42L1371.1 586.783V560.566V526.354H1360.91V560.566V586.783Z"
              fill="#4D2F0C"
            />
            <circle
              id="Ellipse 120"
              cx="1367.18"
              cy="489.508"
              r="51.834"
              fill="#05511A"
            />
            <circle
              id="Ellipse 121"
              cx="1339.39"
              cy="517.924"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 122"
              cx="1407.46"
              cy="469.212"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 123"
              cx="1395.6"
              cy="511.678"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 124"
              cx="1363.75"
              cy="517.924"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 125"
              cx="1375.61"
              cy="447.979"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 126"
              cx="1387.48"
              cy="444.856"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 127"
              cx="1339.39"
              cy="440.485"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 128"
              cx="1323.15"
              cy="449.852"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 129"
              cx="1312.54"
              cy="457.971"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 130"
              cx="1314.41"
              cy="481.078"
              r="31.5375"
              fill="#05511A"
            />
            <circle
              id="Ellipse 131"
              cx="1331.9"
              cy="497.315"
              r="31.5375"
              fill="#05511A"
            />
          </g>
          {/* <AnimatePresence> */}
          {transactionVis ? (
            <g>
              <motion.g
                id="money3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.3, delay: 1 }}
                exit={{ y: 50, duration: 0.2, delay: 30, opacity: 0 }}
              >
                <g id="Group 7">
                  <rect
                    id="Rectangle 9"
                    x="315.83"
                    y="197.841"
                    width="105.249"
                    height="105.249"
                    rx="9"
                    fill="#824600"
                  />
                  <path
                    id="Polygon 1"
                    d="M367.555 328.762C367.92 329.514 368.99 329.514 369.355 328.762L382.482 301.693C382.804 301.029 382.321 300.257 381.582 300.257H355.327C354.589 300.257 354.105 301.029 354.427 301.693L367.555 328.762Z"
                    fill="#824600"
                  />
                </g>
                <g id="dollar-sign" clip-path="url(#clip0_12_22)">
                  <path
                    id="Vector"
                    d="M368.455 226.177V270.706"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M378.575 234.274H363.395C361.516 234.274 359.714 235.02 358.386 236.348C357.057 237.677 356.311 239.479 356.311 241.358C356.311 243.236 357.057 245.038 358.386 246.367C359.714 247.695 361.516 248.442 363.395 248.442H373.515C375.394 248.442 377.196 249.188 378.524 250.517C379.853 251.845 380.599 253.647 380.599 255.526C380.599 257.405 379.853 259.207 378.524 260.535C377.196 261.864 375.394 262.61 373.515 262.61H356.311"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </motion.g>
              <motion.g
                id="money2"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.5, delay: 4 }}
                exit={{ y: 50, duration: 0.2, delay: 0, opacity: 0 }}
              >
                <g id="Group 7_2">
                  <rect
                    id="Rectangle 9_2"
                    x="596.965"
                    y="14.9999"
                    width="71.4223"
                    height="71.4223"
                    rx="9"
                    fill="#824600"
                  />
                  <path
                    id="Polygon 1_2"
                    d="M631.776 103.247C632.14 103.998 633.211 103.998 633.576 103.247L641.971 85.9357C642.293 85.2715 641.809 84.4993 641.071 84.4993H624.28C623.542 84.4993 623.059 85.2715 623.381 85.9357L631.776 103.247Z"
                    fill="#824600"
                  />
                </g>
                <g id="dollar-sign_2" clip-path="url(#clip1_12_22)">
                  <path
                    id="Vector_3"
                    d="M632.676 34.2291V64.4462"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M639.543 39.7231H629.242C627.967 39.7231 626.744 40.2296 625.843 41.1311C624.941 42.0326 624.435 43.2554 624.435 44.5304C624.435 45.8053 624.941 47.0281 625.843 47.9296C626.744 48.8311 627.967 49.3376 629.242 49.3376H636.11C637.385 49.3376 638.607 49.8441 639.509 50.7456C640.41 51.6472 640.917 52.8699 640.917 54.1449C640.917 55.4199 640.41 56.6426 639.509 57.5441C638.607 58.4457 637.385 58.9522 636.11 58.9522H624.435"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </motion.g>
              <motion.g
                id="money1"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0 }}
                exit={{ y: 50, duration: 0.2, delay: 0, opacity: 0 }}
              >
                <g id="Group 7_3">
                  <rect
                    id="Rectangle 9_3"
                    x="1135"
                    y="357.947"
                    width="60"
                    height="60"
                    rx="9"
                    fill="#824600"
                  />
                  <path
                    id="Polygon 1_3"
                    d="M1164.1 431.784C1164.46 432.536 1165.54 432.536 1165.9 431.784L1172.7 417.768C1173.02 417.104 1172.54 416.332 1171.8 416.332H1158.2C1157.46 416.332 1156.98 417.104 1157.3 417.768L1164.1 431.784Z"
                    fill="#824600"
                  />
                </g>
                <g id="dollar-sign_3" clip-path="url(#clip2_12_22)">
                  <path
                    id="Vector_5"
                    d="M1165 374.101V399.486"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_6"
                    d="M1170.77 378.716H1162.12C1161.04 378.716 1160.02 379.142 1159.26 379.899C1158.5 380.657 1158.08 381.684 1158.08 382.755C1158.08 383.826 1158.5 384.853 1159.26 385.611C1160.02 386.368 1161.04 386.793 1162.12 386.793H1167.88C1168.96 386.793 1169.98 387.219 1170.74 387.976C1171.5 388.734 1171.92 389.761 1171.92 390.832C1171.92 391.903 1171.5 392.93 1170.74 393.687C1169.98 394.445 1168.96 394.87 1167.88 394.87H1158.08"
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
          <g id="bus">
            <rect
              id="Rectangle 29"
              x="955"
              y="451.947"
              width="410"
              height="144.515"
              rx="27"
              fill="#0E8C31"
            />
            <path
              id="Vector 40"
              d="M1026.17 572.105C1003.56 572.105 1000.47 596.462 1000.47 596.462H1054.05C1054.05 596.462 1050.02 572.105 1026.17 572.105Z"
              fill="#975100"
            />
            <path
              id="Vector 41"
              d="M1299.78 572.105C1277.17 572.105 1274.07 596.462 1274.07 596.462H1327.65C1327.65 596.462 1323.63 572.105 1299.78 572.105Z"
              fill="#E2A300"
            />
            <circle
              id="Ellipse 116"
              cx="1026.85"
              cy="596.056"
              r="19.0792"
              fill="black"
            />
            <circle
              id="Ellipse 117"
              cx="1300.46"
              cy="596.056"
              r="19.0792"
              fill="#040404"
            />
            <path
              id="Rectangle 30"
              d="M955 478.739H1010.76C1016.29 478.739 1020.76 483.216 1020.76 488.739V527.194C1020.76 532.717 1016.29 537.194 1010.76 537.194H955V478.739Z"
              fill="#FFF5F5"
              fill-opacity="0.44"
            />
            <rect
              id="Rectangle 31"
              x="1037"
              y="478.739"
              width="65.7624"
              height="58.4554"
              rx="5"
              fill="#FFF5F5"
              fill-opacity="0.44"
            />
            <rect
              id="Rectangle 32"
              x="1119"
              y="478.739"
              width="65.7624"
              height="58.4554"
              rx="5"
              fill="#FFF5F5"
              fill-opacity="0.44"
            />
            <rect
              id="Rectangle 33"
              x="1201"
              y="478.739"
              width="65.7624"
              height="58.4554"
              rx="5"
              fill="#FFF5F5"
              fill-opacity="0.44"
            />
            <rect
              id="Rectangle 34"
              x="1283"
              y="478.739"
              width="65.7624"
              height="58.4554"
              rx="5"
              fill="#FFF5F5"
              fill-opacity="0.44"
            />
            <circle
              id="Ellipse 118"
              cx="1026.85"
              cy="596.056"
              r="6.90099"
              fill="#B1B1B1"
            />
            <circle
              id="Ellipse 119"
              cx="1300.46"
              cy="596.056"
              r="6.90099"
              fill="#B1B1B1"
            />
          </g>
          <g id="tower">
            <rect
              id="Rectangle 10"
              x="530.304"
              y="127.371"
              width="205.696"
              height="487.576"
              fill="#6D3C01"
            />
            <g id="Group 10">
              <rect
                id="Rectangle 16"
                x="668.387"
                y="212.509"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 22"
                x="668.387"
                y="316.124"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 25"
                x="668.387"
                y="367.932"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 19"
                x="668.387"
                y="264.317"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 11"
                x="548.398"
                y="160.701"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 12"
                x="608.392"
                y="160.701"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 13"
                x="668.387"
                y="160.701"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 14"
                x="548.398"
                y="212.509"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 15"
                x="608.392"
                y="212.509"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 17"
                x="548.398"
                y="264.317"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 18"
                x="608.392"
                y="264.317"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 20"
                x="548.398"
                y="316.124"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 21"
                x="608.392"
                y="316.124"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 23"
                x="608.392"
                y="367.932"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 24"
                x="548.398"
                y="367.932"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
            </g>
            <g id="Group 11">
              <rect
                id="Rectangle 16_2"
                x="668.387"
                y="471.534"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 11_2"
                x="548.398"
                y="419.726"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 12_2"
                x="608.392"
                y="419.726"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 13_2"
                x="668.387"
                y="419.726"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 14_2"
                x="548.398"
                y="471.534"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
              <rect
                id="Rectangle 15_2"
                x="608.392"
                y="471.534"
                width="49.5194"
                height="45.1284"
                rx="4"
                fill="white"
                fill-opacity="0.19"
              />
            </g>
          </g>
          <g id="store">
            <path
              id="Rectangle 26"
              d="M197 381.929C197 376.406 201.477 371.929 207 371.929H538.398C543.92 371.929 548.398 376.406 548.398 381.929V614.765H197V381.929Z"
              fill="#824600"
            />
            <g id="Group 12">
              <path
                id="Vector 35"
                d="M197 463.27V375.012C197 373.355 198.343 372.012 200 372.012H264.28C265.936 372.012 267.28 373.355 267.28 375.012V463.458C267.28 463.521 267.278 463.576 267.272 463.639C267.137 465.134 264.716 485.59 233.879 487.353C203.818 489.073 197.693 466.57 197.059 463.826C197.017 463.642 197 463.458 197 463.27Z"
                fill="#D50000"
              />
              <path
                id="Vector 39"
                d="M478.118 463.27V375.012C478.118 373.355 479.461 372.012 481.118 372.012H545.397C547.054 372.012 548.397 373.355 548.397 375.012V463.458C548.397 463.521 548.396 463.576 548.39 463.639C548.255 465.134 545.834 485.59 514.997 487.353C484.936 489.073 478.811 466.57 478.177 463.826C478.135 463.642 478.118 463.458 478.118 463.27Z"
                fill="#E00000"
              />
              <path
                id="Vector 36"
                d="M267.28 463.27V375.012C267.28 373.355 268.623 372.012 270.28 372.012H334.559C336.216 372.012 337.559 373.355 337.559 375.012V463.458C337.559 463.521 337.558 463.576 337.552 463.639C337.416 465.134 334.996 485.59 304.159 487.353C274.098 489.073 267.973 466.57 267.339 463.826C267.296 463.642 267.28 463.458 267.28 463.27Z"
                fill="#D9D9D9"
              />
              <path
                id="Vector 37"
                d="M337.559 463.27V375.012C337.559 373.355 338.902 372.012 340.559 372.012H404.838C406.495 372.012 407.838 373.355 407.838 375.012V463.458C407.838 463.521 407.837 463.576 407.831 463.639C407.696 465.134 405.275 485.59 374.438 487.353C344.377 489.073 338.252 466.57 337.618 463.826C337.576 463.642 337.559 463.458 337.559 463.27Z"
                fill="#D60000"
              />
              <path
                id="Vector 38"
                d="M407.839 463.27V375.012C407.839 373.355 409.182 372.012 410.839 372.012H475.118C476.775 372.012 478.118 373.355 478.118 375.012V463.458C478.118 463.521 478.117 463.576 478.111 463.639C477.975 465.134 475.555 485.59 444.718 487.353C414.657 489.073 408.532 466.57 407.898 463.826C407.855 463.642 407.839 463.458 407.839 463.27Z"
                fill="#D9D9D9"
              />
            </g>
            <path
              id="Rectangle 27"
              d="M364.604 519.06C364.604 513.537 369.081 509.06 374.604 509.06H514.59C520.113 509.06 524.59 513.537 524.59 519.06V575.721H367.604C365.947 575.721 364.604 574.378 364.604 572.721V519.06Z"
              fill="#FFF2F2"
              fill-opacity="0.08"
            />
            <path
              id="Rectangle 28"
              d="M237.949 519.06C237.949 513.537 242.426 509.06 247.949 509.06H306.037C311.56 509.06 316.037 513.537 316.037 519.06V614.765H237.949V519.06Z"
              fill="#4D2F0C"
            />
          </g>
          <g id="tree_2">
            <path
              id="Vector 43_2"
              d="M189.107 604.172L181.952 643.069H214.338L203.794 604.172V566.407V517.125H189.107V566.407V604.172Z"
              fill="#4D2F0C"
            />
            <circle
              id="Ellipse 120_2"
              cx="198.145"
              cy="464.049"
              r="74.6668"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 121_2"
              cx="158.113"
              cy="504.98"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 122_2"
              cx="256.169"
              cy="434.812"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 123_2"
              cx="239.077"
              cy="495.984"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 124_2"
              cx="193.197"
              cy="504.98"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 125_2"
              cx="210.29"
              cy="404.225"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 126_2"
              cx="210.43"
              cy="381.43"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 127_2"
              cx="164.43"
              cy="382.43"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 128_2"
              cx="134.723"
              cy="406.924"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 129_2"
              cx="119.43"
              cy="418.619"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 130_2"
              cx="122.129"
              cy="451.904"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 131_2"
              cx="134.43"
              cy="484.43"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 132"
              cx="238.43"
              cy="407.43"
              r="45.4298"
              fill="#0A7929"
            />
            <circle
              id="Ellipse 133"
              cx="256.43"
              cy="459.43"
              r="45.4298"
              fill="#0A7929"
            />
          </g>
          <rect
            id="Rectangle 35"
            x="736"
            y="438.947"
            width="207"
            height="176"
            fill="#4E2D07"
          />
          <g id="person">
            <g id="Group 2">
              <rect
                id="Rectangle 2"
                x="873.382"
                y="681.633"
                width="54.5209"
                height="41.501"
                fill="#824600"
              />
              <g id="Vector 17" filter="url(#filter0_d_12_22)">
                <path
                  d="M875.01 433.44C875.01 433.44 900.235 516.799 900.236 562.204C900.236 620.918 900.236 708.486 900.236 708.486"
                  stroke="#11427C"
                  stroke-width="81"
                />
              </g>
              <path
                id="Vector 20"
                d="M867.455 753.389L871.225 712.038L922.207 712.038C934.119 713.328 971.27 728.59 971.29 758.124C971.291 759.739 969.898 760.96 968.285 760.89L870.313 756.659C868.602 756.585 867.299 755.095 867.455 753.389Z"
                fill="white"
              />
            </g>
            <rect
              id="Rectangle 3"
              x="786.871"
              y="666.171"
              width="43.6539"
              height="30.1086"
              transform="rotate(8.84222 786.871 666.171)"
              fill="#824600"
            />
            <rect
              id="Rectangle 1"
              x="1088.56"
              y="183.454"
              width="8.9512"
              height="77.3964"
              transform="rotate(11.1758 1088.56 183.454)"
              fill="#D9D9D9"
            />
            <path
              id="Vector 23"
              d="M1068.8 232.777L1062.22 243.399L1055.33 257.53L1051.39 267.143C1050.53 269.249 1050.5 271.604 1051.3 273.734L1054.9 283.243C1055.23 284.129 1055.7 284.956 1056.3 285.694L1058.59 288.549C1062.13 292.971 1068.84 293.052 1072.49 288.717L1074.8 285.974C1075.28 285.402 1075.69 284.773 1076.02 284.1L1085.45 264.646L1090.88 249.686L1097.33 229.522L1100.22 216.37C1100.39 215.589 1100.46 214.788 1100.42 213.989L1100.23 210.175C1100.18 209.285 1099.74 208.462 1099.02 207.937C1098.01 207.206 1096.66 207.179 1095.63 207.87L1095.01 208.285C1094.5 208.629 1094.07 209.087 1093.76 209.622L1091.87 212.915L1086.99 225.121L1080.96 240.989L1079.12 246.377C1078.9 247.01 1078.3 247.435 1077.64 247.435C1077.07 247.435 1076.55 247.131 1076.27 246.64L1076.1 246.329C1075.78 245.761 1075.73 245.078 1075.96 244.47L1077.22 241.225C1077.5 240.528 1077.68 239.8 1077.77 239.058L1078.56 232.614C1078.68 231.623 1078.25 230.644 1077.45 230.054C1076.98 229.708 1076.41 229.522 1075.82 229.522L1074.58 229.522C1073.64 229.522 1072.71 229.724 1071.86 230.114L1071.79 230.144C1070.56 230.708 1069.52 231.624 1068.8 232.777Z"
              fill="#824600"
            />
            <path
              id="Vector 21"
              d="M769.078 731.169L778.096 692.961L826.014 699.755C837.019 702.549 869.808 721.783 866.027 749.466C865.808 751.065 864.256 752.08 862.669 751.785L771.449 734.807C769.765 734.494 768.684 732.836 769.078 731.169Z"
              fill="#F9F9F9"
            />
            <path
              id="Vector 18"
              d="M808.283 421.234C808.283 421.234 821.302 504.469 821.302 549.806C821.303 608.433 808.283 694.246 808.283 694.246"
              stroke="#133E72"
              stroke-width="75"
            />
            <circle
              id="Ellipse 49"
              cx="855.073"
              cy="317.482"
              r="137.93"
              fill="#EADDC5"
            />
            <g id="Vector 19" filter="url(#filter1_d_12_22)">
              <path
                d="M867.69 261.165C858.384 248.13 840.273 245.106 827.238 254.412C814.202 263.718 811.179 281.829 820.485 294.865L867.69 261.165ZM910.001 337.011L899.903 364.197L910.001 337.011ZM844.087 278.015C820.485 294.865 820.488 294.869 820.491 294.873C820.492 294.875 820.495 294.879 820.497 294.882C820.502 294.889 820.507 294.896 820.513 294.904C820.525 294.921 820.538 294.94 820.554 294.961C820.585 295.005 820.625 295.06 820.673 295.126C820.768 295.259 820.896 295.435 821.056 295.654C821.375 296.091 821.821 296.696 822.385 297.448C823.512 298.952 825.117 301.053 827.131 303.587C831.14 308.631 836.866 315.508 843.754 322.847C856.587 336.522 876.961 355.675 899.903 364.197L920.099 309.826C910.656 306.319 898.074 295.974 886.047 283.157C880.504 277.251 875.824 271.635 872.534 267.496C870.899 265.439 869.631 263.777 868.798 262.665C868.382 262.11 868.075 261.694 867.888 261.437C867.794 261.308 867.73 261.22 867.696 261.174C867.68 261.151 867.671 261.138 867.67 261.137C867.669 261.136 867.671 261.138 867.674 261.143C867.676 261.145 867.678 261.148 867.68 261.152C867.682 261.154 867.684 261.157 867.685 261.158C867.687 261.161 867.69 261.165 844.087 278.015ZM899.903 364.197C922.403 372.555 945.839 370.416 965.862 365.064C986.08 359.659 1005.46 350.282 1021.77 340.824C1038.22 331.28 1052.5 321.087 1062.61 313.343C1067.7 309.45 1071.8 306.124 1074.67 303.734C1076.1 302.538 1077.23 301.573 1078.03 300.885C1078.43 300.541 1078.75 300.266 1078.98 300.066C1079.09 299.965 1079.18 299.884 1079.25 299.821C1079.29 299.79 1079.32 299.764 1079.34 299.743C1079.36 299.732 1079.37 299.722 1079.38 299.714C1079.38 299.71 1079.39 299.705 1079.39 299.703C1079.39 299.698 1079.4 299.693 1060.14 278.015C1040.87 256.337 1040.88 256.333 1040.88 256.329C1040.88 256.328 1040.89 256.325 1040.89 256.323C1040.89 256.32 1040.9 256.318 1040.9 256.317C1040.9 256.315 1040.9 256.318 1040.89 256.326C1040.87 256.341 1040.83 256.375 1040.77 256.427C1040.65 256.532 1040.45 256.709 1040.17 256.952C1039.6 257.439 1038.72 258.191 1037.55 259.165C1035.21 261.116 1031.73 263.941 1027.35 267.292C1018.54 274.038 1006.36 282.707 992.662 290.654C978.814 298.687 964.352 305.431 950.883 309.031C937.219 312.684 927.125 312.436 920.099 309.826L899.903 364.197Z"
                fill="#EADDC5"
              />
            </g>
            <circle
              id="Ellipse 50"
              cx="858.735"
              cy="125.845"
              r="43.9422"
              fill="#824600"
            />
            <path
              id="Vector 24"
              d="M892.776 152.875L893.766 153.012L894.039 151.03L893.049 150.894L892.776 152.875ZM892.023 151.762L891.886 152.752L892.023 151.762ZM893.049 150.894L892.159 150.771L891.886 152.752L892.776 152.875L893.049 150.894ZM892.159 150.771C886.577 150.002 881.199 148.151 876.325 145.323L875.321 147.053C880.42 150.012 886.046 151.948 891.886 152.752L892.159 150.771Z"
              fill="black"
            />
            <ellipse
              id="Ellipse 41"
              rx="5.69622"
              ry="5.28934"
              transform="matrix(-1 0 0 1 861.99 84.7505)"
              fill="black"
            />
            <ellipse
              id="Ellipse 48"
              rx="3.66185"
              ry="2.84811"
              transform="matrix(-1 0 0 1 868.093 88.0055)"
              fill="black"
            />
            <path
              id="Vector 8"
              d="M883.961 114.452C885.494 111.802 887.301 110.593 890.011 110.405C893.037 110.196 895.268 111.491 896.981 114.452"
              stroke="#090909"
              stroke-opacity="0.33"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              id="Ellipse 32"
              cx="890.895"
              cy="118.946"
              r="5.30703"
              fill="#D9D9D9"
            />
            <g id="Ellipse 35">
              <circle cx="893.655" cy="120.891" r="3.18422" fill="#4D2F0C" />
              <circle cx="893.655" cy="120.891" r="3.18422" fill="#4D2F0C" />
              <circle cx="893.655" cy="120.891" r="3.18422" fill="#4D2F0C" />
            </g>
            <ellipse
              id="Ellipse 36"
              rx="5.69622"
              ry="5.28934"
              transform="matrix(-1 0 0 1 890.471 94.5155)"
              fill="#D9D9D9"
            />
            <ellipse
              id="Ellipse 37"
              rx="5.69622"
              ry="5.28934"
              transform="matrix(-1 0 0 1 890.471 94.5155)"
              fill="black"
            />
            <ellipse
              id="Ellipse 38"
              rx="6.50996"
              ry="6.10309"
              transform="matrix(-1 0 0 1 895.353 99.3979)"
              fill="#D9D9D9"
            />
            <ellipse
              id="Ellipse 46"
              rx="6.50996"
              ry="6.10309"
              transform="matrix(-1 0 0 1 895.353 99.3979)"
              fill="black"
            />
            <circle
              id="Ellipse 47"
              cx="890.188"
              cy="86.5018"
              r="4.59943"
              fill="black"
            />
            <ellipse
              id="Ellipse 42"
              rx="5.69622"
              ry="5.28934"
              transform="matrix(-1 0 0 1 895.353 90.4468)"
              fill="black"
            />
            <ellipse
              id="Ellipse 43"
              rx="5.69622"
              ry="5.28934"
              transform="matrix(-1 0 0 1 879.078 85.5642)"
              fill="#141414"
            />
            <circle
              id="Ellipse 45"
              r="7.32371"
              transform="matrix(-1 0 0 1 877.451 87.5986)"
              fill="black"
            />
            <circle
              id="Ellipse 44"
              r="5.28934"
              transform="matrix(-1 0 0 1 885.995 82.3093)"
              fill="black"
            />
            <ellipse
              id="Ellipse 40"
              rx="8.9512"
              ry="8.54432"
              transform="matrix(-1 0 0 1 882.333 92.888)"
              fill="black"
            />
            <ellipse
              id="Ellipse 68"
              rx="8.9512"
              ry="8.54432"
              transform="matrix(-1 0 0 1 879.892 83.123)"
              fill="black"
            />
            <circle
              id="Ellipse 91"
              r="4.06873"
              transform="matrix(-1 0 0 1 900.236 94.9223)"
              fill="black"
            />
            <circle
              id="Ellipse 92"
              r="4.06873"
              transform="matrix(-1 0 0 1 892.912 83.5298)"
              fill="black"
            />
            <ellipse
              id="Ellipse 39"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 861.583 94.1085)"
              fill="black"
            />
            <ellipse
              id="Ellipse 95"
              rx="5.28934"
              ry="4.88247"
              transform="matrix(-1 0 0 1 857.514 112.825)"
              fill="black"
            />
            <circle
              id="Ellipse 96"
              r="3.66185"
              transform="matrix(-1 0 0 1 862.397 117.3)"
              fill="black"
            />
            <circle
              id="Ellipse 97"
              r="2.84811"
              transform="matrix(-1 0 0 1 864.024 109.163)"
              fill="black"
            />
            <circle
              id="Ellipse 99"
              r="4.06873"
              transform="matrix(-1 0 0 1 861.99 105.501)"
              fill="black"
            />
            <circle
              id="Ellipse 100"
              r="2.03436"
              transform="matrix(-1 0 0 1 864.838 103.467)"
              fill="black"
            />
            <circle
              id="Ellipse 98"
              r="4.06873"
              transform="matrix(-1 0 0 1 863.617 113.638)"
              fill="black"
            />
            <ellipse
              id="Ellipse 59"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 851.004 93.2949)"
              fill="black"
            />
            <ellipse
              id="Ellipse 60"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 835.543 110.383)"
              fill="black"
            />
            <ellipse
              id="Ellipse 61"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 850.19 106.315)"
              fill="black"
            />
            <ellipse
              id="Ellipse 62"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 822.523 119.335)"
              fill="black"
            />
            <g id="Ellipse 56" filter="url(#filter2_d_12_22)">
              <ellipse
                rx="7.73058"
                ry="8.13745"
                transform="matrix(-1 0 0 1 856.7 119.335)"
                fill="#824600"
              />
            </g>
            <g id="Ellipse 58" filter="url(#filter3_d_12_22)">
              <ellipse
                rx="2.68384"
                ry="5.55521"
                transform="matrix(-0.866025 0.5 0.5 0.866025 856.19 118.59)"
                fill="#5A3306"
              />
            </g>
            <ellipse
              id="Ellipse 57"
              rx="4.06873"
              ry="3.66185"
              transform="matrix(-1 0 0 1 857.107 101.839)"
              fill="black"
            />
            <ellipse
              id="Ellipse 63"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 820.896 109.57)"
              fill="black"
            />
            <ellipse
              id="Ellipse 64"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 827.406 105.501)"
              fill="black"
            />
            <ellipse
              id="Ellipse 74"
              rx="5.28934"
              ry="4.88247"
              transform="matrix(-1 0 0 1 823.337 95.736)"
              fill="black"
            />
            <ellipse
              id="Ellipse 75"
              rx="5.28934"
              ry="4.88247"
              transform="matrix(-1 0 0 1 820.082 99.8048)"
              fill="black"
            />
            <ellipse
              id="Ellipse 76"
              rx="5.28934"
              ry="4.88247"
              transform="matrix(-1 0 0 1 824.964 90.0399)"
              fill="black"
            />
            <ellipse
              id="Ellipse 77"
              rx="5.28934"
              ry="4.88247"
              transform="matrix(-1 0 0 1 826.592 99.8048)"
              fill="black"
            />
            <ellipse
              id="Ellipse 79"
              rx="5.28934"
              ry="4.88247"
              transform="matrix(-1 0 0 1 837.171 90.0399)"
              fill="black"
            />
            <ellipse
              id="Ellipse 80"
              rx="5.28934"
              ry="4.88247"
              transform="matrix(-1 0 0 1 833.102 89.2261)"
              fill="black"
            />
            <ellipse
              id="Ellipse 81"
              rx="4.4756"
              ry="4.06873"
              transform="matrix(-1 0 0 1 846.935 85.9711)"
              fill="black"
            />
            <ellipse
              id="Ellipse 65"
              rx="5.69622"
              ry="5.28934"
              transform="matrix(-1 0 0 1 816.42 118.928)"
              fill="black"
            />
            <ellipse
              id="Ellipse 52"
              rx="5.05721"
              ry="4.81639"
              transform="matrix(-0.944685 0.327979 0.327979 0.944685 819.915 116.896)"
              fill="black"
            />
            <ellipse
              id="Ellipse 89"
              rx="5.05721"
              ry="4.81639"
              transform="matrix(-0.944685 0.327979 0.327979 0.944685 817.895 126.357)"
              fill="black"
            />
            <ellipse
              id="Ellipse 53"
              rx="5.28978"
              ry="5.03788"
              transform="matrix(-0.999907 -0.0136571 -0.0136571 0.999907 873.044 93.522)"
              fill="black"
            />
            <ellipse
              id="Ellipse 70"
              rx="6.50996"
              ry="6.10309"
              transform="matrix(-1 0 0 1 833.509 96.1429)"
              fill="black"
            />
            <ellipse
              id="Ellipse 66"
              rx="5.28978"
              ry="5.03788"
              transform="matrix(-0.999907 -0.0136571 -0.0136571 0.999907 855.955 78.8745)"
              fill="black"
            />
            <ellipse
              id="Ellipse 67"
              rx="5.28978"
              ry="5.03788"
              transform="matrix(-0.999907 -0.0136571 -0.0136571 0.999907 855.955 78.8745)"
              fill="black"
            />
            <ellipse
              id="Ellipse 55"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 866.465 81.0887)"
              fill="black"
            />
            <ellipse
              id="Ellipse 72"
              rx="6.10309"
              ry="5.69622"
              transform="matrix(-1 0 0 1 842.053 98.9911)"
              fill="black"
            />
            <ellipse
              id="Ellipse 82"
              rx="8.54432"
              ry="8.13745"
              transform="matrix(-1 0 0 1 830.661 99.8048)"
              fill="black"
            />
            <ellipse
              id="Ellipse 84"
              rx="6.50996"
              ry="6.10309"
              transform="matrix(-1 0 0 1 846.529 81.4955)"
              fill="black"
            />
            <ellipse
              id="Ellipse 86"
              rx="6.50996"
              ry="6.10309"
              transform="matrix(-1 0 0 1 837.577 83.123)"
              fill="black"
            />
            <ellipse
              id="Ellipse 88"
              rx="6.50996"
              ry="6.10309"
              transform="matrix(-1 0 0 1 842.46 87.1917)"
              fill="black"
            />
            <ellipse
              id="Ellipse 93"
              rx="6.50996"
              ry="6.10309"
              transform="matrix(-1 0 0 1 831.067 84.7504)"
              fill="black"
            />
            <ellipse
              id="Ellipse 85"
              rx="6.10309"
              ry="5.69622"
              transform="matrix(-1 0 0 1 855.073 84.3436)"
              fill="black"
            />
            <g id="Group 1">
              <path
                id="Vector 32"
                d="M893.299 90.4051L819.872 106.519C816.303 107.303 812.783 105.02 812.041 101.443C811.311 97.9217 813.552 94.4692 817.065 93.7016L890.507 77.655C894.126 76.8642 897.677 79.2414 898.325 82.889C898.938 86.3373 896.72 89.6544 893.299 90.4051Z"
                fill="#560C0C"
              />
            </g>
            <path
              id="Vector 33"
              d="M846.529 65.3633C817.641 72.1504 818.048 94.1086 818.048 94.1086L890.471 79.3367C890.471 79.3367 875.417 58.5763 846.529 65.3633Z"
              fill="#560C0C"
            />
          </g>
          ..............
          <AnimatePresence>
            {massageVis ? (
              <g id="massage">
                <motion.g
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", duration: 0.3, delay: 1 }}
                  exit={{ y: 50, duration: 0.2, delay: 0, opacity: 0 }}
                >
                  <rect
                    id="Rectangle 3_2"
                    x="1085"
                    y="120"
                    width="104"
                    height="47"
                    rx="13"
                    fill="#824600"
                  />
                  <g id="dots3">
                    <circle
                      id="Ellipse 107"
                      cx="1101.5"
                      cy="154.5"
                      r="5.5"
                      fill="#0E8C31"
                    />
                    <circle
                      id="Ellipse 108"
                      cx="1114.5"
                      cy="154.5"
                      r="5.5"
                      fill="#0E8C31"
                    />
                    <circle
                      id="Ellipse 109"
                      cx="1127.5"
                      cy="154.5"
                      r="5.5"
                      fill="#0E8C31"
                    />
                  </g>
                </motion.g>
                <motion.g
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", duration: 0.3, delay: 3 }}
                  exit={{ y: 50, duration: 0.2, delay: 0, opacity: 0 }}
                >
                  <rect
                    id="Rectangle 2_2"
                    x="1085"
                    y="60"
                    width="164"
                    height="47"
                    rx="13"
                    fill="#824600"
                  />
                  <g id="dots2">
                    <circle
                      id="Ellipse 110"
                      cx="1101.5"
                      cy="94.5"
                      r="5.5"
                      fill="#FF0000"
                    />
                    <circle
                      id="Ellipse 111"
                      cx="1114.5"
                      cy="94.5"
                      r="5.5"
                      fill="#FF0000"
                    />
                    <circle
                      id="Ellipse 112"
                      cx="1127.5"
                      cy="94.5"
                      r="5.5"
                      fill="#FF0000"
                    />
                  </g>
                </motion.g>
                <motion.g
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", duration: 0.3, delay: 5 }}
                  exit={{ y: 50, duration: 0.2, delay: 0, opacity: 0 }}
                >
                  <rect
                    id="Rectangle 1_2"
                    x="1085"
                    width="164"
                    height="47"
                    rx="13"
                    fill="#824600"
                  />
                  <g id="dots1">
                    <circle
                      id="Ellipse 113"
                      cx="1101.5"
                      cy="34.5"
                      r="5.5"
                      fill="#D9D9D9"
                    />
                    <circle
                      id="Ellipse 114"
                      cx="1114.5"
                      cy="34.5"
                      r="5.5"
                      fill="#D9D9D9"
                    />
                    <circle
                      id="Ellipse 115"
                      cx="1127.5"
                      cy="34.5"
                      r="5.5"
                      fill="#D9D9D9"
                    />
                  </g>
                </motion.g>
              </g>
            ) : (
              ""
            )}
          </AnimatePresence>
          ...........
        </g>
        <defs>
          <filter
            id="filter0_d_12_22"
            x="832.243"
            y="421.716"
            width="112.493"
            height="294.77"
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
              result="effect1_dropShadow_12_22"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_22"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_12_22"
            x="811.085"
            y="249.013"
            width="272.304"
            height="128.77"
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
              result="effect1_dropShadow_12_22"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_22"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_12_22"
            x="844.97"
            y="111.197"
            width="23.4612"
            height="24.2749"
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
              result="effect1_dropShadow_12_22"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_22"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_12_22"
            x="848.569"
            y="113.594"
            width="15.2438"
            height="17.9918"
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
              result="effect1_dropShadow_12_22"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_22"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_12_22">
            <rect
              width="48.5767"
              height="48.5767"
              fill="white"
              transform="translate(344.167 224.153)"
            />
          </clipPath>
          <clipPath id="clip1_12_22">
            <rect
              width="32.9641"
              height="32.9641"
              fill="white"
              transform="translate(616.194 32.8555)"
            />
          </clipPath>
          <clipPath id="clip2_12_22">
            <rect
              width="27.6923"
              height="27.6923"
              fill="white"
              transform="translate(1151.15 372.947)"
            />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
}
