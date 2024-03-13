import React from "react";

import { FaEarthAmericas } from "react-icons/fa6";

const Test = () => {
  return (
    <section className="bg-luminr-blue">
      <div className="relative mx-auto max-w-7xl px-4 bg-luminr-orange">
        <svg
          width={1220}
          height={1687}
          viewBox="0 0 1220 1687"
          fill="none"
          className="pointer-events-none absolute left-10  top-28 hidden select-none md:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048"
            stroke="#3887FD"
            strokeOpacity="0.15"
            strokeWidth={3}
          />
          <path
            d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048"
            stroke="var(--blue-500)"
            strokeOpacity={1}
            strokeLinecap="round"
            strokeWidth={3}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          />
        </svg>
        <div className="mx-auto max-w-7xl py-16 md:flex md:h-[816px]">
          <div className="md:h-14 md:w-14 h-10 w-10 border border-[#4FAAFF]/[0.2] bg-background flex flex-shrink-0 items-center justify-center rounded-full relative mb-4 mr-2 md:mr-10">
            <div className="h-8 md:h-14 md:w-14 w-8 rounded-full  border-2 border-[#145088] relative overflow-hidden  flex items-center justify-center">
              <div className="absolute h-full w-full bg-[#145088]/[0.5]" />
              <span className="relative z-40">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white md:h-6 md:w-6"
                >
                  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                  <path d="M12 11l0 .01" />
                  <path d="M8 11l0 .01" />
                  <path d="M16 11l0 .01" />
                </svg> */}
                <FaEarthAmericas className="h-4 w-4 text-white md:h-6 md:w-6" />
              </span>
            </div>
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              className="absolute inset-0 md:h-14 md:w-14 h-10 w-10 animate-spin-slower"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.934 17.3986C60.169 17.2758 60.2602 16.9856 60.1339 16.7525C57.3457 11.608 53.1986 7.32344 48.1407 4.36888C43.0828 1.41433 37.3137 -0.0937062 31.4631 0.00450389C31.198 0.00895321 30.99 0.230954 30.9984 0.495917C31.0068 0.76088 31.2285 0.968456 31.4936 0.96413C37.1638 0.871578 42.7545 2.33432 47.6565 5.19782C52.5585 8.06132 56.5786 12.2127 59.283 17.1973C59.4094 17.4303 59.6991 17.5214 59.934 17.3986Z"
                fill="url(#paint0_linear_295_3336)"
              />
              <path
                d="M0.728977 35.9539C0.465974 35.9872 0.279361 36.2275 0.316556 36.4899C1.13755 42.2835 3.53209 47.7445 7.24366 52.2762C10.9552 56.8078 15.8374 60.2314 21.3557 62.1778C21.6057 62.266 21.878 62.1303 21.9624 61.879C22.0468 61.6278 21.9114 61.356 21.6614 61.2677C16.3143 59.3788 11.5835 56.0599 7.98635 51.6679C4.38917 47.2759 2.06735 41.984 1.26908 36.3695C1.23176 36.107 0.991979 35.9207 0.728977 35.9539Z"
                fill="url(#paint1_linear_295_3336)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_295_3336"
                  x1="61.5"
                  y1="24.5"
                  x2="31.8785"
                  y2="25.4481"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAAFF" />
                  <stop offset={1} stopColor="#4FAAFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_295_3336"
                  x1={-1}
                  y1={27}
                  x2={35}
                  y2={64}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAAFF" />
                  <stop offset={1} stopColor="#4FAAFF" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[#D1D7E1] md:text-4xl">
              Knows your project
            </h1>
            <p className="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">
              Avoid looking for code with answers tailored to your repository.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pt-4 md:pl-10 md:pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl pl-5 pr-5">
                <div className="mb-8 flex max-w-md flex-col gap-2 relative z-10">
                  <h3
                    className="text-xl font-medium text-white md:text-3xl"
                    style={{ opacity: "0.7" }}
                  >
                    Ask about your codebase
                  </h3>
                  <p className=" text-base font-medium text-[#FFFFFF]/[0.64]">
                    Save time hunting for the place to start a change or the
                    right method to call.
                  </p>
                </div>
                <div className="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]" />
                <div
                  className="aspect-1 relative h-full w-full"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    className="aspect-[inherit] absolute left-0 top-0 h-full w-full"
                    style={{
                      background:
                        'url("https://cursor.sh/landing/features/card-examples/ask.png") center top / contain no-repeat',
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pt-4 md:pl-10 md:pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl pl-5 pr-5">
                <div className="mb-8 flex max-w-md flex-col gap-2 relative z-10">
                  <h3
                    className="text-xl font-medium text-white md:text-3xl"
                    style={{ opacity: "0.7" }}
                  >
                    Reference files and docs
                  </h3>
                  <p className=" text-base font-medium text-[#FFFFFF]/[0.64]">
                    Refer directly to documentation, code definitions, and
                    files.
                  </p>
                </div>
                <div className="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]" />
                <div
                  className="aspect-1 relative h-full w-full"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    className="aspect-[inherit] absolute left-0 top-0 h-full w-full"
                    style={{
                      background:
                        'url("/landing/features/card-examples/browse.png") center top / contain no-repeat',
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto block max-w-7xl py-16 md:-mr-4 md:mt-10 md:flex">
          <div className="md:h-14 md:w-14 h-10 w-10 border border-[#4FAAFF]/[0.2] bg-background flex-shrink-0 items-center justify-center rounded-full relative mb-4 ml-auto block md:hidden">
            <div className="h-8 md:h-14 md:w-14 w-8 rounded-full  border-2 border-[#145088] relative overflow-hidden  flex items-center justify-center">
              <svg
                width={52}
                height={52}
                viewBox="0 0 52 52"
                fill="none"
                className="absolute inset-0 h-[36px] w-[36px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <rect
                    x="-6.5"
                    y="-6.5"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="-6.22917"
                    y="-6.22917"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M15.166 -5.95833H36.8327V-7.04167H15.166V-5.95833ZM36.8327 14.625H15.166V15.7083H36.8327V14.625Z"
                    fill="#3360A3"
                    mask="url(#path-3-inside-1_295_3315)"
                  />
                  <rect
                    x="36.834"
                    y="-6.5"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="37.1048"
                    y="-6.22917"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M14.625 15.1666V36.8333H15.7083V15.1666H14.625ZM-5.95833 36.8333V15.1666H-7.04167V36.8333H-5.95833Z"
                    fill="#3360A3"
                    mask="url(#path-7-inside-2_295_3315)"
                  />
                  <path
                    d="M15.166 15.1666H36.8327V36.8333H15.166V15.1666Z"
                    fill="#132872"
                  />
                  <path
                    d="M57.959 15.1666V36.8333H59.0423V15.1666H57.959ZM37.3757 36.8333V15.1666H36.2923V36.8333H37.3757Z"
                    fill="#3360A3"
                    mask="url(#path-10-inside-3_295_3315)"
                  />
                  <rect
                    x="-6.5"
                    y="36.8334"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="-6.22917"
                    y="37.1042"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M15.166 37.375H36.8327V36.2917H15.166V37.375ZM36.8327 57.9584H15.166V59.0417H36.8327V57.9584Z"
                    fill="#3360A3"
                    mask="url(#path-14-inside-4_295_3315)"
                  />
                  <rect
                    x="36.834"
                    y="36.8334"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="37.1048"
                    y="37.1042"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                </g>
              </svg>
              <div className="absolute h-full w-full bg-[#145088]/[0.5]" />
              <span className="relative z-40">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-4 w-4 text-white md:h-6 md:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.83537 23.1543C1.89663 22.6029 1.92726 22.3273 2.01067 22.0696C2.08467 21.841 2.18923 21.6235 2.3215 21.4229C2.47059 21.1968 2.66671 21.0007 3.05896 20.6084L20.6674 3.00007C22.1401 1.52732 24.5279 1.52732 26.0007 3.00008C27.4734 4.47284 27.4734 6.86065 26.0007 8.33341L8.39229 25.9418C8.00004 26.334 7.80392 26.5301 7.57783 26.6792C7.37725 26.8115 7.15971 26.9161 6.93111 26.9901C6.67346 27.0735 6.3978 27.1041 5.84647 27.1654L1.33398 27.6667L1.83537 23.1543Z"
                    fill="#275B8B"
                  />
                  <path
                    d="M22.0007 12.3334L16.6674 7.00008M1.33398 27.6667L5.84647 27.1654C6.3978 27.1041 6.67346 27.0735 6.93111 26.9901C7.15971 26.9161 7.37725 26.8115 7.57783 26.6792C7.80392 26.5301 8.00004 26.334 8.39229 25.9418L26.0007 8.33341C27.4734 6.86065 27.4734 4.47284 26.0007 3.00008C24.5279 1.52732 22.1401 1.52732 20.6674 3.00007L3.05896 20.6084C2.66671 21.0007 2.47059 21.1968 2.3215 21.4229C2.18923 21.6235 2.08467 21.841 2.01067 22.0696C1.92726 22.3273 1.89663 22.6029 1.83537 23.1543L1.33398 27.6667Z"
                    stroke="#DBE5FF"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              className="absolute inset-0 md:h-14 md:w-14 h-10 w-10 animate-spin-slower"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.934 17.3986C60.169 17.2758 60.2602 16.9856 60.1339 16.7525C57.3457 11.608 53.1986 7.32344 48.1407 4.36888C43.0828 1.41433 37.3137 -0.0937062 31.4631 0.00450389C31.198 0.00895321 30.99 0.230954 30.9984 0.495917C31.0068 0.76088 31.2285 0.968456 31.4936 0.96413C37.1638 0.871578 42.7545 2.33432 47.6565 5.19782C52.5585 8.06132 56.5786 12.2127 59.283 17.1973C59.4094 17.4303 59.6991 17.5214 59.934 17.3986Z"
                fill="url(#paint0_linear_295_3336)"
              />
              <path
                d="M0.728977 35.9539C0.465974 35.9872 0.279361 36.2275 0.316556 36.4899C1.13755 42.2835 3.53209 47.7445 7.24366 52.2762C10.9552 56.8078 15.8374 60.2314 21.3557 62.1778C21.6057 62.266 21.878 62.1303 21.9624 61.879C22.0468 61.6278 21.9114 61.356 21.6614 61.2677C16.3143 59.3788 11.5835 56.0599 7.98635 51.6679C4.38917 47.2759 2.06735 41.984 1.26908 36.3695C1.23176 36.107 0.991979 35.9207 0.728977 35.9539Z"
                fill="url(#paint1_linear_295_3336)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_295_3336"
                  x1="61.5"
                  y1="24.5"
                  x2="31.8785"
                  y2="25.4481"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAAFF" />
                  <stop offset={1} stopColor="#4FAAFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_295_3336"
                  x1={-1}
                  y1={27}
                  x2={35}
                  y2={64}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAAFF" />
                  <stop offset={1} stopColor="#4FAAFF" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-full">
            <h1 className="text-right text-xl font-semibold text-[#D1D7E1] md:text-4xl">
              Follows instructions
            </h1>
            <p className="ml-auto mt-2 max-w-lg text-right text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">
              Stay in flow and focus on what matters by having the AI write
              low-level logic.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10  md:grid-cols-2">
              <div className="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pl-4 pt-4 md:pl-10 md:pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl">
                <div className="mb-8 flex max-w-md flex-col gap-2 relative z-10">
                  <h3
                    className="text-xl font-medium text-white md:text-3xl"
                    style={{ opacity: "0.7" }}
                  >
                    Edit in natural language
                  </h3>
                  <p className=" text-base font-medium text-[#FFFFFF]/[0.64]">
                    Change an entire method or class with a single prompt.
                  </p>
                </div>
                <div className="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]" />
                <div
                  className="aspect-1 relative h-full w-full"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    className="aspect-[inherit] absolute left-0 top-0 h-full w-full"
                    style={{
                      background:
                        'url("/landing/features/card-examples/edit4.png") center top / contain no-repeat',
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pl-4 pt-4 md:pl-10 md:pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl">
                <div className="mb-8 flex max-w-md flex-col gap-2 relative z-10">
                  <h3
                    className="text-xl font-medium text-white md:text-3xl"
                    style={{ opacity: "0.7" }}
                  >
                    Generate from scratch
                  </h3>
                  <p className=" text-base font-medium text-[#FFFFFF]/[0.64]">
                    Generate code from scratch with a simple instruction.
                  </p>
                </div>
                <div className="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]" />
                <div
                  className="aspect-1 relative h-full w-full"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    className="aspect-[inherit] absolute left-0 top-0 h-full w-full"
                    style={{
                      background:
                        'url("/landing/features/card-examples/generate.png") center top / contain no-repeat',
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-14 md:w-14 h-10 w-10 border border-[#4FAAFF]/[0.2] bg-background flex-shrink-0 items-center justify-center rounded-full relative mb-4 ml-2 hidden md:ml-10 md:block">
            <div className="h-8 md:h-14 md:w-14 w-8 rounded-full  border-2 border-[#145088] relative overflow-hidden  flex items-center justify-center">
              <svg
                width={52}
                height={52}
                viewBox="0 0 52 52"
                fill="none"
                className="absolute inset-0 h-[36px] w-[36px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <rect
                    x="-6.5"
                    y="-6.5"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="-6.22917"
                    y="-6.22917"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M15.166 -5.95833H36.8327V-7.04167H15.166V-5.95833ZM36.8327 14.625H15.166V15.7083H36.8327V14.625Z"
                    fill="#3360A3"
                    mask="url(#path-3-inside-1_295_3315)"
                  />
                  <rect
                    x="36.834"
                    y="-6.5"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="37.1048"
                    y="-6.22917"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M14.625 15.1666V36.8333H15.7083V15.1666H14.625ZM-5.95833 36.8333V15.1666H-7.04167V36.8333H-5.95833Z"
                    fill="#3360A3"
                    mask="url(#path-7-inside-2_295_3315)"
                  />
                  <path
                    d="M15.166 15.1666H36.8327V36.8333H15.166V15.1666Z"
                    fill="#132872"
                  />
                  <path
                    d="M57.959 15.1666V36.8333H59.0423V15.1666H57.959ZM37.3757 36.8333V15.1666H36.2923V36.8333H37.3757Z"
                    fill="#3360A3"
                    mask="url(#path-10-inside-3_295_3315)"
                  />
                  <rect
                    x="-6.5"
                    y="36.8334"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="-6.22917"
                    y="37.1042"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M15.166 37.375H36.8327V36.2917H15.166V37.375ZM36.8327 57.9584H15.166V59.0417H36.8327V57.9584Z"
                    fill="#3360A3"
                    mask="url(#path-14-inside-4_295_3315)"
                  />
                  <rect
                    x="36.834"
                    y="36.8334"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="37.1048"
                    y="37.1042"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                </g>
              </svg>
              <div className="absolute h-full w-full bg-[#145088]/[0.5]" />
              <span className="relative z-40">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-4 w-4 text-white md:h-6 md:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.83537 23.1543C1.89663 22.6029 1.92726 22.3273 2.01067 22.0696C2.08467 21.841 2.18923 21.6235 2.3215 21.4229C2.47059 21.1968 2.66671 21.0007 3.05896 20.6084L20.6674 3.00007C22.1401 1.52732 24.5279 1.52732 26.0007 3.00008C27.4734 4.47284 27.4734 6.86065 26.0007 8.33341L8.39229 25.9418C8.00004 26.334 7.80392 26.5301 7.57783 26.6792C7.37725 26.8115 7.15971 26.9161 6.93111 26.9901C6.67346 27.0735 6.3978 27.1041 5.84647 27.1654L1.33398 27.6667L1.83537 23.1543Z"
                    fill="#275B8B"
                  />
                  <path
                    d="M22.0007 12.3334L16.6674 7.00008M1.33398 27.6667L5.84647 27.1654C6.3978 27.1041 6.67346 27.0735 6.93111 26.9901C7.15971 26.9161 7.37725 26.8115 7.57783 26.6792C7.80392 26.5301 8.00004 26.334 8.39229 25.9418L26.0007 8.33341C27.4734 6.86065 27.4734 4.47284 26.0007 3.00008C24.5279 1.52732 22.1401 1.52732 20.6674 3.00007L3.05896 20.6084C2.66671 21.0007 2.47059 21.1968 2.3215 21.4229C2.18923 21.6235 2.08467 21.841 2.01067 22.0696C1.92726 22.3273 1.89663 22.6029 1.83537 23.1543L1.33398 27.6667Z"
                    stroke="#DBE5FF"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              className="absolute inset-0 md:h-14 md:w-14 h-10 w-10 animate-spin-slower"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.934 17.3986C60.169 17.2758 60.2602 16.9856 60.1339 16.7525C57.3457 11.608 53.1986 7.32344 48.1407 4.36888C43.0828 1.41433 37.3137 -0.0937062 31.4631 0.00450389C31.198 0.00895321 30.99 0.230954 30.9984 0.495917C31.0068 0.76088 31.2285 0.968456 31.4936 0.96413C37.1638 0.871578 42.7545 2.33432 47.6565 5.19782C52.5585 8.06132 56.5786 12.2127 59.283 17.1973C59.4094 17.4303 59.6991 17.5214 59.934 17.3986Z"
                fill="url(#paint0_linear_295_3336)"
              />
              <path
                d="M0.728977 35.9539C0.465974 35.9872 0.279361 36.2275 0.316556 36.4899C1.13755 42.2835 3.53209 47.7445 7.24366 52.2762C10.9552 56.8078 15.8374 60.2314 21.3557 62.1778C21.6057 62.266 21.878 62.1303 21.9624 61.879C22.0468 61.6278 21.9114 61.356 21.6614 61.2677C16.3143 59.3788 11.5835 56.0599 7.98635 51.6679C4.38917 47.2759 2.06735 41.984 1.26908 36.3695C1.23176 36.107 0.991979 35.9207 0.728977 35.9539Z"
                fill="url(#paint1_linear_295_3336)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_295_3336"
                  x1="61.5"
                  y1="24.5"
                  x2="31.8785"
                  y2="25.4481"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAAFF" />
                  <stop offset={1} stopColor="#4FAAFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_295_3336"
                  x1={-1}
                  y1={27}
                  x2={35}
                  y2={64}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAAFF" />
                  <stop offset={1} stopColor="#4FAAFF" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div
          className="mx-auto block max-w-7xl py-16 md:flex"
          style={{ paddingBottom: "0rem" }}
        >
          <div className="md:h-14 md:w-14 h-10 w-10 border border-[#4FAAFF]/[0.2] bg-background flex flex-shrink-0 items-center justify-center rounded-full relative mb-4 mr-2 md:mr-10">
            <div className="h-8 md:h-14 md:w-14 w-8 rounded-full  border-2 border-[#145088] relative overflow-hidden  flex items-center justify-center">
              <svg
                width={52}
                height={52}
                viewBox="0 0 52 52"
                fill="none"
                className="absolute inset-0 h-[36px] w-[36px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <rect
                    x="-6.5"
                    y="-6.5"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="-6.22917"
                    y="-6.22917"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M15.166 -5.95833H36.8327V-7.04167H15.166V-5.95833ZM36.8327 14.625H15.166V15.7083H36.8327V14.625Z"
                    fill="#3360A3"
                    mask="url(#path-3-inside-1_295_3315)"
                  />
                  <rect
                    x="36.834"
                    y="-6.5"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="37.1048"
                    y="-6.22917"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M14.625 15.1666V36.8333H15.7083V15.1666H14.625ZM-5.95833 36.8333V15.1666H-7.04167V36.8333H-5.95833Z"
                    fill="#3360A3"
                    mask="url(#path-7-inside-2_295_3315)"
                  />
                  <path
                    d="M15.166 15.1666H36.8327V36.8333H15.166V15.1666Z"
                    fill="#132872"
                  />
                  <path
                    d="M57.959 15.1666V36.8333H59.0423V15.1666H57.959ZM37.3757 36.8333V15.1666H36.2923V36.8333H37.3757Z"
                    fill="#3360A3"
                    mask="url(#path-10-inside-3_295_3315)"
                  />
                  <rect
                    x="-6.5"
                    y="36.8334"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="-6.22917"
                    y="37.1042"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                  <path
                    d="M15.166 37.375H36.8327V36.2917H15.166V37.375ZM36.8327 57.9584H15.166V59.0417H36.8327V57.9584Z"
                    fill="#3360A3"
                    mask="url(#path-14-inside-4_295_3315)"
                  />
                  <rect
                    x="36.834"
                    y="36.8334"
                    width="21.6667"
                    height="21.6667"
                    fill="#132872"
                  />
                  <rect
                    x="37.1048"
                    y="37.1042"
                    width="21.125"
                    height="21.125"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.541667"
                  />
                </g>
              </svg>
              <div className="absolute h-full w-full bg-[#145088]/[0.5]" />
              <span className="relative z-40">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-4 w-4 text-white md:h-6 md:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="7.62016"
                    y="2.47807"
                    width="17.9014"
                    height="27.0443"
                    rx="8.95071"
                    fill="#275B8B"
                    stroke="#DBE5FF"
                    strokeWidth="2.67"
                  />
                  <rect
                    x="13.1426"
                    y="10.9998"
                    width="6.85714"
                    height="2.67"
                    rx="1.335"
                    fill="#DBE5FF"
                  />
                  <rect
                    x="13.1426"
                    y="17.6697"
                    width="6.85714"
                    height="2.67"
                    rx="1.335"
                    fill="#DBE5FF"
                  />
                  <path
                    d="M24.5723 8.00024H28.9516C29.6889 8.00024 30.2866 8.59794 30.2866 9.33524C30.2866 10.0725 29.6889 10.6702 28.9516 10.6702H24.5723V8.00024Z"
                    fill="#DBE5FF"
                  />
                  <path
                    d="M24.5723 14.6702H28.9516C29.6889 14.6702 30.2866 15.2679 30.2866 16.0052C30.2866 16.7425 29.6889 17.3402 28.9516 17.3402H24.5723V14.6702Z"
                    fill="#DBE5FF"
                  />
                  <path
                    d="M24.5723 21.3403H28.9516C29.6889 21.3403 30.2866 21.938 30.2866 22.6753C30.2866 23.4126 29.6889 24.0103 28.9516 24.0103H24.5723V21.3403Z"
                    fill="#DBE5FF"
                  />
                  <path
                    d="M7.42773 8.00024H3.04845C2.31115 8.00024 1.71345 8.59794 1.71345 9.33524C1.71345 10.0725 2.31115 10.6702 3.04845 10.6702H7.42773V8.00024Z"
                    fill="#DBE5FF"
                  />
                  <path
                    d="M7.42773 14.6702H3.04845C2.31115 14.6702 1.71345 15.2679 1.71345 16.0052C1.71345 16.7425 2.31115 17.3402 3.04845 17.3402H7.42773V14.6702Z"
                    fill="#DBE5FF"
                  />
                  <path
                    d="M7.42773 21.3403H3.04845C2.31115 21.3403 1.71345 21.938 1.71345 22.6753C1.71345 23.4126 2.31115 24.0103 3.04845 24.0103H7.42773V21.3403Z"
                    fill="#DBE5FF"
                  />
                </svg>
              </span>
            </div>
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              className="absolute inset-0 md:h-14 md:w-14 h-10 w-10 animate-spin-slower"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.934 17.3986C60.169 17.2758 60.2602 16.9856 60.1339 16.7525C57.3457 11.608 53.1986 7.32344 48.1407 4.36888C43.0828 1.41433 37.3137 -0.0937062 31.4631 0.00450389C31.198 0.00895321 30.99 0.230954 30.9984 0.495917C31.0068 0.76088 31.2285 0.968456 31.4936 0.96413C37.1638 0.871578 42.7545 2.33432 47.6565 5.19782C52.5585 8.06132 56.5786 12.2127 59.283 17.1973C59.4094 17.4303 59.6991 17.5214 59.934 17.3986Z"
                fill="url(#paint0_linear_295_3336)"
              />
              <path
                d="M0.728977 35.9539C0.465974 35.9872 0.279361 36.2275 0.316556 36.4899C1.13755 42.2835 3.53209 47.7445 7.24366 52.2762C10.9552 56.8078 15.8374 60.2314 21.3557 62.1778C21.6057 62.266 21.878 62.1303 21.9624 61.879C22.0468 61.6278 21.9114 61.356 21.6614 61.2677C16.3143 59.3788 11.5835 56.0599 7.98635 51.6679C4.38917 47.2759 2.06735 41.984 1.26908 36.3695C1.23176 36.107 0.991979 35.9207 0.728977 35.9539Z"
                fill="url(#paint1_linear_295_3336)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_295_3336"
                  x1="61.5"
                  y1="24.5"
                  x2="31.8785"
                  y2="25.4481"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAAFF" />
                  <stop offset={1} stopColor="#4FAAFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_295_3336"
                  x1={-1}
                  y1={27}
                  x2={35}
                  y2={64}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4FAAFF" />
                  <stop offset={1} stopColor="#4FAAFF" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#D1D7E1] md:text-4xl">
              Predicts your next move
            </h1>
            <p className="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">
              Cursor comes with a built-in Copilot that sees your recent changes
              and generates the next edit.
            </p>
          </div>
        </div>
        <div className="mx-auto block max-w-7xl pb-16 md:flex">
          <div className="w-full">
            <div className="mt-10 w-full">
              <div className="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl p-4 md:p-10 min-h-[400px]">
                <div className="mb-8 flex flex-col gap-2 absolute bottom-0 z-[100] max-w-xl pb-3">
                  <h3
                    className="text-xl font-medium text-white md:text-3xl"
                    style={{ opacity: "0.7" }}
                  >
                    <div className="bg-[#3886FE61] border border-[#3E5DF4] flex w-fit text-base font-bold rounded-md px-2 py-0.5 mb-2">
                      NEW
                    </div>
                    Copilot <span className="text-[#6094F8]">++</span>
                  </h3>
                  <p className=" text-base font-medium text-[#FFFFFF]/[0.64]">
                    A more powerful version of Copilot that can suggest mid-line
                    completions and entire diffs. Trained to autocomplete on
                    sequences of edits, it's quick to understand the change
                    you're making.
                  </p>
                </div>
                <div className="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]" />
                <div
                  className="aspect-1 relative h-full w-full aspect-2 max-w-[initial] mx-auto"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    className="aspect-[inherit] absolute left-0 top-0 h-full w-full"
                    style={{
                      background:
                        'url("/landing/features/card-examples/copilot.png") center top / contain no-repeat',
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
