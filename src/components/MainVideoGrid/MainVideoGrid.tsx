import { useState } from "react";

export interface Item {
  title: string;
  video: string;
  length: number;
  id: string;
  description: string;
  poster: string;
}

const MainVideoGrid = ({ items }: { items: Item[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const displayedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pageButtons = [];
  const start = currentPage;
  const end = currentPage + 4;

  for (let i = start; i <= end; i++) {
    if (i < 1 || i > pageCount) continue;
    pageButtons.push(
      <button
        key={i}
        className={`bg-white text-black rounded-lg h-10 px-2 ${
          currentPage === i ? "bg-orange-500" : ""
        }`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <div className="z-0 grid sm:grid-cols-1 md:grid-cols-3">
        {displayedItems.map((item) => (
          <div key={item.id} className="p-2 m-2 bg-gray-200 rounded-xl">
            <p>{item.title}</p>
            <video controls poster={item.poster} className="w-full rounded-xl">
              <source src={item.video} type="application/ogg" />
            </video>
            <p>{item.length}</p>
          </div>
        ))}
      </div>
      <div className="my-4 grid grid-cols-[auto_auto_auto] text-center w-screen">
        <button
          className="h-10 ml-2 text-white bg-blue-500 rounded-lg w-14 disabled:bg-gray-500"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <div>{pageButtons}</div>
        <button
          className="h-10 mr-4 text-white bg-blue-500 rounded-lg w-14 justify-self-end disabled:bg-gray-500"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MainVideoGrid;
