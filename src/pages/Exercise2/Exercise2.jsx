import { Helmet } from "react-helmet-async";
import AccordionList from "../../components/AccordionList";
import BackButton from "../../components/BackButton";
import TabList from "../../components/TabList";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Excercise2() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <Helmet>
        <title>Exercise 2 | Frontend Assessment</title>
        <meta name="description" content="Exercise 2 of Frontend Assessment" />
      </Helmet>
      <div className="relative">
        <BackButton />
        {isMobile ? <AccordionList /> : <TabList />}
      </div>
    </>
  );
}
