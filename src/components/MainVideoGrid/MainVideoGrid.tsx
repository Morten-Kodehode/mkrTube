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
      <div className="grid sm:grid-cols-1 md:grid-cols-3">
        {displayedItems.map((item) => (
          <div key={item.id} className="p-2 bg-gray-200 rounded-xl m-2">
            <p>{item.title}</p>
            <video controls poster={item.poster} className="rounded-xl w-full">
              <source src={item.video} type="application/ogg" />
            </video>
            <p>{item.length}</p>
          </div>
        ))}
      </div>
      <div className="my-4 grid grid-cols-[auto_auto_auto] text-center w-screen">
        <button
          className="bg-blue-500 text-white h-10 w-14 rounded-lg ml-2 disabled:bg-gray-500"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <div>{pageButtons}</div>
        <button
          className="bg-blue-500 text-white h-10 w-14 rounded-lg mr-4 justify-self-end disabled:bg-gray-500"
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
