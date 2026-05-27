import DATA from "../data/data.json";
export default function TabList({ selectedIndex, onSelect }) {
  if (!Array.isArray(DATA) || DATA.length === 0) return null;

  const safeIndex = Math.min(selectedIndex ?? 0, DATA.length - 1);

  return (
    <div className="tab-wrapper flex min-h-screen justify-center bg-green-matcha px-4 py-24">
      <div className="tab-box h-fit w-full max-w-[700px] rounded-3xl bg-white p-[30px] shadow-lg">
        <ul
          className="tab__headers flex max-w-[960px] flex-row border-b"
          role="tablist"
          aria-label="Tabs list"
        >
          {DATA.map((item, index) => {
            const isSelected = safeIndex === index;
            if (
              item.id == null ||
              item.id === "" ||
              item.title == null ||
              item.title === ""
            )
              return null;
            return (
              <li key={item.id} className="relative" role="presentation">
                <button
                  id={`tab-${item.id}`}
                  className={`typo-label px-6 py-4 text-gray-light ${isSelected ? "text-green-olive" : ""}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`tabpanel-${item.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => onSelect(index)}
                >
                  {item.title}
                </button>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-center transform bg-green-olive transition-transform duration-200 ease-in ${isSelected ? "scale-x-100" : "scale-x-0"}`}
                />
              </li>
            );
          })}
        </ul>
        {DATA[safeIndex].id != null || DATA[safeIndex].id !== "" ? (
          <div
            id={`tabpanel-${DATA[safeIndex].id}`}
            className="tab__body min-h-[270px] animate-fade-in px-6 py-3"
            role="tabpanel"
            aria-labelledby={`tab-${DATA[safeIndex].id}`}
            tabIndex={0}
          >
            {DATA[safeIndex].title ? (
              <h2 className="tab__title typo-label py-4 text-2xl">
                {DATA[safeIndex].title}
              </h2>
            ) : null}
            {DATA[safeIndex].content ? (
              <div
                className="tab__content font-poppins"
                dangerouslySetInnerHTML={{ __html: DATA[safeIndex].content }}
              ></div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
