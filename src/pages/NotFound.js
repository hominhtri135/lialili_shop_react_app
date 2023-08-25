import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <div class="flex items-center justify-center h-screen flex-col -mt-10 sm:-mt-20 mx-4">
      <Helmet>
        <title>404 | Not Found</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={`404 | Not Found`} />

        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`404 | Not Found`} />
        <meta property="og:description" content={`404 | Not Found`} />
        <meta
          property="og:image"
          content="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/346500727_1377831933052584_6263561569183124993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=79otJq24iLcAX-cjVqa&_nc_ht=scontent.fdad3-5.fna&oh=00_AfC7EU9JCK9EGv0L0Hzhz-hIUiiwfBGehe-p4A1KnSGzUw&oe=64ED0F17"
        />
      </Helmet>
      <svg
        width="226"
        height="249.135"
        className="motion-safe:animate-bounce transition"
        overflow="visible"
        version="1.1"
        viewBox="0 0 226 249.135"
        xmlSpace="preserve"
      >
        <circle cx="113" cy="113" r="109" fill="#FFE585"></circle>
        <path
          fill="none"
          stroke="#6E6E96"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M88.866 245.135L136.866 245.135"
          opacity="0.29"
        ></path>
        <path
          fill="none"
          stroke="#6E6E96"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M154.732 245.135L168.732 245.135"
          opacity="0.17"
        ></path>
        <path
          fill="none"
          stroke="#6E6E96"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M69.732 245.135L58.732 245.135"
          opacity="0.17"
        ></path>
        <circle cx="68.732" cy="93" r="9" fill="#6E6E96"></circle>
        <path
          fill="#F90"
          d="M115.568 5.947c-1.026 0-2.049.017-3.069.045 54.425 1.551 98.069 46.155 98.069 100.955 0 55.781-45.219 101-101 101s-101-45.219-101-101c0-8.786 1.124-17.309 3.232-25.436a108.896 108.896 0 00-5.232 33.436c0 60.199 48.801 109 109 109s109-48.801 109-109-48.8-109-109-109z"
          opacity="0.24"
        ></path>
        <circle cx="156.398" cy="93" r="9" fill="#6E6E96"></circle>
        <ellipse
          cx="67.732"
          cy="140.894"
          fill="red"
          opacity="0.18"
          rx="17.372"
          ry="8.106"
        ></ellipse>
        <ellipse
          cx="154.88"
          cy="140.894"
          fill="red"
          opacity="0.18"
          rx="17.371"
          ry="8.106"
        ></ellipse>
        <path
          fill="#FFEFB5"
          d="M13 118.5C13 61.338 59.338 15 116.5 15c55.922 0 101.477 44.353 103.427 99.797.044-1.261.073-2.525.073-3.797C220 50.802 171.199 2 111 2S2 50.802 2 111c0 50.111 33.818 92.318 79.876 105.06C41.743 201.814 13 163.518 13 118.5z"
        ></path>
        <circle
          cx="113"
          cy="113"
          r="109"
          fill="none"
          stroke="#6E6E96"
          strokeWidth="8"
        ></circle>
      </svg>
      <div class=" tracking-widest mt-4 text-center">
        <span class="text-6xl block">
          <span>4 0 4</span>
        </span>
        <span class="text-xl">
          Sorry, We couldn't find what you are looking for!
        </span>
      </div>
      <center class="mt-6">
        <NavLink
          to="/"
          className={`font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md`}
        >
          Go back
        </NavLink>
      </center>
    </div>
  );
};

export default NotFound;
