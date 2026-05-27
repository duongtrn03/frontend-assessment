import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "./Icon";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="back-btn typo-label fixed left-4 top-4 z-50 rounded-xl bg-white-muted px-5 py-2 transition duration-200 ease-out hover:-translate-x-1 hover:text-green-olive hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-green-olive"
      onClick={() => navigate("/")}
    >
      <span className="flex items-center gap-2">
        <ArrowLeftIcon />
        Back
      </span>
    </button>
  );
}
