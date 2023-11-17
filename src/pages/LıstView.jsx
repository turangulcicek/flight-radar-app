import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const LıstView = ({ openModal }) => {
  const store = useSelector((store) => store);
  const [itemOffSet, setItemOffset] = useState(0);

  const itemsPerpage = 10;
  const endOffSet = itemOffSet + itemsPerpage;
  const currentItems = store.flights.slice(itemOffSet, endOffSet);
  const pageCount = Math.ceil(store.flights.length / itemsPerpage);
  const handlePageClick = (event) => {
    console.log(event);
    const newOffset = (event.selected * itemsPerpage) % store.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Detaylı Bilgi</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id} className="">
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                {" "}
                <button
                  onClick={() => openModal(flight?.id)}
                  className="btn btn-warning"
                >
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination "
        activeClassName="active"
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default LıstView;
