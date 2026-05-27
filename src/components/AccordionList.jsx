import DATA from "../data/data.json";
import { MinusIcon, PlusIcon } from "./Icon";

export default function AccordionList({ selectedIndex, onSelect }) {
  if (!Array.isArray(DATA) || DATA.length === 0) return null;

  const handleSelectAccordion = (index) => {
    onSelect(selectedIndex === index ? null : index);
  };

  return (
    <div className="accordions-wrapper flex min-h-screen justify-center bg-green-matcha px-4 py-24">
      <div
        className="accordions h-fit w-full max-w-[700px] rounded-sm bg-white shadow-lg"
        aria-label="Accordions list"
      >
        {DATA.map((item, index) => {
          if (item.id == null || item.id == "") return null;
          const isActive = selectedIndex === index;

          return (
            <div key={item.id} className="accordion border-b border-gray-200">
              {item.title ? (
                <div
                  role="button"
                  className="accordion__title flex cursor-pointer justify-between px-6 py-8"
                  aria-expanded={isActive}
                  aria-controls={`accordion-panel-${item.id}`}
                  onClick={() => handleSelectAccordion(index)}
                >
                  <h2
                    className={`font-poppins text-xl ${isActive ? "font-medium text-green-olive" : ""}`}
                  >
                    {item.title}
                  </h2>
                  <span aria-hidden="true" className="self-center">
                    {isActive ? (
                      <MinusIcon className="text-green-olive" />
                    ) : (
                      <PlusIcon />
                    )}
                  </span>
                </div>
              ) : null}
              {item.content ? (
                <div
                  className={`accordion__content overflow-hidden px-11 font-poppins transition-all duration-300 ease-in-out ${
                    isActive
                      ? "max-h-[500px] pb-8 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
