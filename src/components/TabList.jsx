import { useState } from "react";
import DATA from "../data/data.json";
export default function TabList() {
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  function handleSelectTab(index) {
    setTabSelectedIndex(index);
  }

  return (
    <div className="tab-wrapper flex h-screen justify-center bg-green-matcha">
      <div className="tab-box fixed top-20 max-w-[700px] rounded-3xl bg-white p-[30px] shadow-lg">
        <ul
          className="tab__headers flex flex-row"
          style={{ maxWidth: "960px" }}
        >
          {Array.isArray(DATA) &&
            DATA.map((item, index) => (
              <li key={index} className="relative">
                <a
                  className={`block px-6 py-4 font-poppins font-semibold text-gray-light ${tabSelectedIndex === index ? "text-green-olive" : ""}`}
                  aria-current="page"
                  onClick={() => handleSelectTab(index)}
                  href="#"
                >
                  {item.title}
                </a>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-center transform bg-green-olive transition-transform duration-200 ease-in ${
                    tabSelectedIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </li>
            ))}
        </ul>
        <div className="border"></div>
        <div
          className="tab__body min-h-[270px] animate-fade-in px-6 py-3"
          key={tabSelectedIndex}
        >
          <h2 className="tab__title py-4 font-poppins text-2xl font-semibold">
            {DATA[tabSelectedIndex].title}
          </h2>
          <div
            className="tab__content font-poppins"
            dangerouslySetInnerHTML={{ __html: DATA[tabSelectedIndex].content }}
          ></div>
        </div>
      </div>
    </div>
  );
}
