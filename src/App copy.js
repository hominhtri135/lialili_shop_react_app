import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <header>
        <div class="h-auto w-full relative">
          <div className="top-bar h-10 bg-[#222]">
            <div className="content-topbar page-container h-full w-full flex justify-between items-center mx-auto px-[15px]">
              <div className="text-xs text-[#b2b2b2] font-medium">
                Free shipping for standard order over $100
              </div>
              <div className="flex flex-wrap h-full">
                <Link
                  to="/"
                  className="border-x-[rgba(255,255,255,0.3)] border-l border-solid text-xs h-full text-[#b2b2b2] flex justify-center items-center px-[25px]"
                >
                  Help & FAQs
                </Link>
                <Link
                  to="/"
                  className="border-x-[rgba(255,255,255,0.3)] border-x border-solid text-xs h-full text-[#b2b2b2] flex justify-center items-center px-[25px]"
                >
                  My Account
                </Link>
              </div>
            </div>
            <div className="wrap-menu-desktop fixed z-[1100] bg-transparent w-full h-[84px] top-10 left-0 transition-[height] duration-[0.3s,background-color] delay-[0.3s];">
              <nav className="page-container mx-auto px-[15px] w-full h-full flex items-center bg-transparent">
                <Link to="/" className="flex items-center h-[65%] mr-[55px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    enableBackground="new 0 0 1955 640"
                    version="1.1"
                    viewBox="0 0 1955 640"
                    xmlSpace="preserve"
                    fill="#000"
                    className="w-full h-2/4"
                  >
                    <path
                      d="M160.4 30135.8c-59-23-102-59-125-108l-21-43v-2030c0-2146-1-2117 45-2339 71-344 224-667 446-943 84-103 284-301 389-385 398-318 831-481 1332-504 171-7 217 2 278 54 60 52 83 104 83 188 0 81-23 136-75 180-55 46-90 55-266 66-136 8-197 18-332 50-389 94-619 217-855 460-336 346-506 696-554 1141-7 65-11 750-11 2065 0 1342-3 1980-11 2006-13 48-61 102-113 129-53 27-156 33-210 13zM10844.4 30141.8c-76-25-121-62-151-126-18-39-19-113-19-2050 0-1731 2-2028 15-2139 62-529 277-969 660-1351 329-328 719-549 1127-638 175-39 279-51 453-51 156-1 161 0 206 26 152 89 158 315 11 413-46 30-108 42-277 50-288 14-663 136-900 293-112 75-310 266-419 405-223 286-352 613-386 982-6 70-10 823-10 2065 0 1884-1 1956-19 1995-39 83-104 126-199 131-37 2-78 0-92-5zM15719.4 30137.8c-66-25-104-58-130-111l-25-52 2-2070 3-2069 22-120c46-249 100-420 198-620 296-607 911-1104 1550-1253 192-45 499-74 607-58 175 26 259 258 143 394-59 69-100 82-292 94-354 21-720 142-973 321-115 81-272 237-381 377-227 291-354 611-389 975-6 72-10 796-10 2070 0 1882-1 1962-19 2001-22 49-92 111-140 124-47 13-128 11-166-3zM3621.4 29310.8c-91-23-168-84-209-169-32-65-32-186 1-253 53-109 154-171 277-171 125 0 217 61 272 181 32 71 29 182-8 255-59 118-207 187-333 157zM14281.4 29310.8c-138-35-230-152-230-295 0-83 23-142 78-203 115-128 325-128 440 0 110 121 106 304-8 416-72 71-188 105-280 82zM19171.4 29310.8c-230-58-311-344-144-508 122-119 320-115 432 10 56 61 77 118 77 203s-21 142-77 203c-68 76-193 115-288 92zM3579.4 28333.8c-44-23-84-63-106-106-19-37-20-79-19-2159v-2122l29-50c38-69 99-107 183-113 117-9 173 21 227 122l26 50 3 2094c1 1403-1 2106-8 2131-15 56-70 133-110 152-46 24-182 24-225 1zM14236.4 28329.8c-51-26-99-81-112-129-15-52-13-4212 1-4265 14-52 90-126 145-143 23-6 61-12 85-12 103 0 160 38 205 135l24 50v2094c0 1476-3 2104-11 2130-14 46-56 108-92 135-43 32-186 35-245 5zM19127.4 28329.8c-48-23-89-67-110-116-11-27-13-395-13-2145 0-2031 1-2115 19-2154 24-52 90-108 147-124s154-8 195 17c17 10 47 45 67 77l37 59 3 2110 2 2110-26 56c-47 104-90 131-206 131-54 0-84-5-115-21zM6929.4 28295.8c-761-107-1386-567-1730-1270-155-318-217-594-217-980 0-634 218-1162 662-1605 343-343 727-545 1200-631 167-31 516-38 700-14 552 70 1069 356 1452 805l48 55v-336c0-364 4-398 55-465 96-126 324-103 391 39l24 52v1140c0 685-4 1176-10 1230-53 485-263 934-607 1295-344 362-758 585-1253 675-130 24-572 30-715 10zm680-485c241-52 479-155 664-288 110-78 274-232 365-341 191-229 311-476 373-770 25-116 27-144 27-361s-2-245-27-361c-79-371-255-684-535-950-251-240-526-385-861-456-116-25-145-27-361-28-207 0-249 3-348 23-164 33-308 83-457 157-417 208-766 610-909 1048-67 202-81 303-81 567 0 265 15 370 81 568 93 277 236 497 475 727 275 265 594 424 963 480 142 22 502 13 631-15z"
                      transform="matrix(.1 0 0 -.1 0 3016)"
                    ></path>
                    <path
                      d="M7085.4 27279.8c-189-22-415-113-567-227-175-132-338-333-415-512-138-320-132-713 16-1025 163-343 483-602 849-688 132-31 430-31 562 0 367 86 683 345 850 697 106 225 139 509 89 775-69 362-346 709-698 876-201 96-443 132-686 104z"
                      transform="matrix(.1 0 0 -.1 0 3016)"
                    ></path>
                  </svg>
                </Link>
                <div className="menu-desktop flex items-center h-full">
                  <ul className="main-menu flex items-center">
                    <li className="active-menu text-[#6c7ae0] relative ml-3.5 mr-1 my-0 pl-0 pr-2.5 py-5">
                      <Link
                        to="/"
                        className="text-sm font-medium px-0 py-[5px]"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="relative ml-3.5 mr-1 my-0 pl-0 pr-2.5 py-5">
                      <Link
                        to="/"
                        className="text-sm font-medium px-0 py-[5px]"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="relative ml-3.5 mr-1 my-0 pl-0 pr-2.5 py-5">
                      <Link
                        to="/"
                        className="text-sm font-medium px-0 py-[5px]"
                      >
                        Features
                      </Link>
                    </li>
                    <li className="relative ml-3.5 mr-1 my-0 pl-0 pr-2.5 py-5">
                      <Link
                        to="/"
                        className="text-sm font-medium px-0 py-[5px]"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="relative ml-3.5 mr-1 my-0 pl-0 pr-2.5 py-5">
                      <Link
                        to="/"
                        className="text-sm font-medium px-0 py-[5px]"
                      >
                        About
                      </Link>
                    </li>
                    <li className="relative ml-3.5 mr-1 my-0 pl-0 pr-2.5 py-5">
                      <Link
                        to="/"
                        className="text-sm font-medium px-0 py-[5px]"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="wrap-icon-header flex grow justify-end items-center flex-wrap">
                  <div className="relative text-[26px] leading-none cursor-pointer text-[#333] transition-all duration-[0.4s] pl-[22px] pr-[11px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#333]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <div className="relative text-[26px] leading-none cursor-pointer text-[#333] transition-all duration-[0.4s] pl-[22px] pr-[11px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                  <div className="relative text-[26px] leading-none cursor-pointer text-[#333] transition-all duration-[0.4s] pl-[22px] pr-[11px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="section-slide"></section>
    </>
  );
}

export default App;
