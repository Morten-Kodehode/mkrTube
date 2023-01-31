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

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      {displayedItems.map((item) => (
        <div key={item.id} className="p-4 bg-gray-200 rounded-xl m-3">
          <p>{item.title}</p>
          <video controls poster={item.poster} className="rounded-xl">
            <source src={item.video} type="application/ogg" />
          </video>
          <p>{item.length}</p>
        </div>
      ))}
      <div className="my-4 grid grid-cols-3 text-center w-screen">
        <button
          className="bg-blue-500 text-white h-10 rounded-lg ml-4 disabled:bg-gray-500"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <h1 className="px-3">
          {currentPage} / {pageCount}
        </h1>
        {currentPage < pageCount && (
          <button
            className="bg-blue-500 text-white h-10 rounded-lg mr-4"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MainVideoGrid;
