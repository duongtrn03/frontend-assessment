import { Helmet } from "react-helmet-async";
import AccordionList from "../../components/AccordionList";
import BackButton from "../../components/BackButton";
import TabList from "../../components/TabList";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useState } from "react";

export default function Excercise2() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState(false);
  const safeIndex = accordionCollapsed ? 0 : selectedIndex;

  if (!isMobile && accordionCollapsed) {
    setAccordionCollapsed(false);
    setSelectedIndex(0);
  }

  const handleAccordionSelect = (index) => {
    if (index === null) {
      setAccordionCollapsed(true);
      setSelectedIndex(0);
    } else {
      setAccordionCollapsed(false);
      setSelectedIndex(index);
    }
  };

  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>Exercise 2 | Frontend Assessment</title>
        <meta name="description" content="Exercise 2 of Frontend Assessment" />
      </Helmet>
      <div className="relative">
        <BackButton />
        {isMobile ? (
          <AccordionList
            selectedIndex={accordionCollapsed ? null : selectedIndex}
            onSelect={handleAccordionSelect}
          />
        ) : (
          <TabList
            accordionCollapsed={accordionCollapsed}
            selectedIndex={safeIndex}
            onSelect={handleTabSelect}
          />
        )}
      </div>
    </>
  );
}
