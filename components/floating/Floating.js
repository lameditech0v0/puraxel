import React from "react";

function Floating() {
  return (
    <section id="floating">
      <article className="floating__shop">
        <svg
          width="8.33vw"
          height="8.33vw"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="64" rx="32" fill="white" />
          <rect
            width="64"
            height="64"
            rx="32"
            fill="url(#paint0_linear_104_37513)"
          />
          <path
            d="M42.3549 28.8178C42.2501 27.0843 40.7022 25.7273 38.8281 25.7273H37.5238V22.4545C37.5238 19.447 34.8833 17 31.6379 17C28.3926 17 25.7521 19.447 25.7521 22.4545V25.7273H24.4478C20.9659 25.7273 20.921 28.8178 20.921 28.8178L20.0053 44.0906C19.9522 44.9852 20.3019 45.8721 20.9659 46.5222C21.6299 47.1736 22.5646 47.5455 23.531 47.5455H39.7416C40.708 47.5455 41.6426 47.1724 42.3066 46.5222C42.9706 45.8721 43.3214 44.9862 43.2673 44.0906L42.3516 28.8178H42.3549ZM28.1065 22.4544C28.1065 20.6501 29.691 19.1817 31.638 19.1817C33.585 19.1817 35.1695 20.6501 35.1695 22.4544V25.7271H28.1065V22.4544Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_104_37513"
              x1="0"
              y1="0"
              x2="67.7354"
              y2="4.23346"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C4386A" />
              <stop offset="1" stop-color="#CC5140" />
            </linearGradient>
          </defs>
        </svg>
      </article>
      <article className="floating__inquery">
        <svg
          width="8.33vw"
          height="8.33vw"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="64" rx="32" fill="#1D1F36" />
          <path
            d="M25.9016 24.1047C25.9016 27.4547 28.6455 30.1722 32.0286 30.1722C35.4114 30.1722 38.1555 27.455 38.1555 24.1047C38.1555 20.7547 35.4114 18 32.0286 18C28.6458 18 25.9016 20.7175 25.9016 24.1047Z"
            fill="white"
          />
          <path
            d="M32.0285 32.6074C25.9466 32.6074 21 35.9541 21 41.5654L21 43.5624C23.5545 45.0587 27.6496 45.9566 32.0285 45.9566C36.4075 45.9566 40.5027 45.0587 43.0571 43.5624V41.5654C43.0571 35.9541 38.1105 32.6074 32.0285 32.6074Z"
            fill="white"
          />
        </svg>
      </article>
    </section>
  );
}

export default Floating;
