import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ListIcon, WindowIcon } from "../../components/Icon";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Home | Frontend Assessment</title>
        <meta
          name="description"
          content="Welcome to Frontend Assessment home page."
        />
      </Helmet>
      <div className="flex min-h-screen flex-col items-center justify-center bg-green-matcha px-6">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900">
            Frontend Assessment
          </h1>

          <p className="mb-10 text-gray-400">
            Choose one of the exercises below to get started
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate("/exercise1")}
              className="rounded-xl bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 active:scale-95"
            >
              <WindowIcon className="mr-2 inline-block" />
              Exercise 1
            </button>

            <button
              onClick={() => navigate("/exercise2")}
              className="rounded-xl border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95"
            >
              <ListIcon className="mr-2 inline-block" />
              Exercise 2
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
