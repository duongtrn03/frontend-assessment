import DATA from "../data/data.json";
export default function TabList({ selectedIndex, onSelect }) {
  const safeIndex = selectedIndex ?? 0;
  return (
    <div className="tab-wrapper flex h-screen justify-center bg-green-matcha">
      <div className="tab-box fixed top-20 max-w-[700px] rounded-3xl bg-white p-[30px] shadow-lg">
        <ul className="tab__headers flex max-w-[960px] flex-row border-b">
          {Array.isArray(DATA) &&
            DATA.map((item, index) => (
              <li key={item.id} className="relative">
                <button
                  className={`px-6 py-4 font-poppins font-semibold text-gray-light ${safeIndex === index ? "text-green-olive" : ""}`}
                  aria-current="page"
                  onClick={() => onSelect(index)}
                  href="#"
                >
                  {item.title}
                </button>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-center transform bg-green-olive transition-transform duration-200 ease-in ${
                    safeIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </li>
            ))}
        </ul>
        <div className="tab__body min-h-[270px] animate-fade-in px-6 py-3">
          <h2 className="tab__title py-4 font-poppins text-2xl font-semibold">
            {DATA[safeIndex].title}
          </h2>
          <div
            className="tab__content font-poppins"
            dangerouslySetInnerHTML={{ __html: DATA[safeIndex].content }}
          ></div>
        </div>
      </div>
    </div>
  );
}
