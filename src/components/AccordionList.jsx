import DATA from "../data/data.json";
import { MinusIcon, PlusIcon } from "./Icon";

export default function AccordionList({ selectedIndex, onSelect }) {
  const handleSelectAccordion = (index) => {
    onSelect((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordions-wrapper flex h-screen justify-center bg-green-matcha">
      <div className="accordions fixed left-6 right-6 top-20 m-auto max-w-[700px] rounded-sm bg-white shadow-lg">
        {Array.isArray(DATA) &&
          DATA.map((item, index) => {
            const isActive = selectedIndex === index;

            return (
              <div key={item.id} className="accordion border-b border-gray-200">
                <div
                  className="accordion__title flex cursor-pointer justify-between px-6 py-8"
                  onClick={() => handleSelectAccordion(index)}
                >
                  <h2
                    className={`font-poppins text-xl ${isActive ? "font-medium text-green-olive" : ""}`}
                  >
                    {item.title}
                  </h2>
                  <span className="self-center">
                    {isActive ? (
                      <MinusIcon className="text-green-olive" />
                    ) : (
                      <PlusIcon />
                    )}
                  </span>
                </div>
                <div
                  className={`accordion__content overflow-hidden px-11 font-poppins transition-all duration-300 ease-in-out ${
                    isActive
                      ? "max-h-[500px] pb-8 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
