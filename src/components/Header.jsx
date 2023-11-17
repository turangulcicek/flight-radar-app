import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  return (
    <header>
      <div>
        <img src="/logo-f.png" alt="" />
        <h2>Uçuş Radarı</h2>
      </div>
      <h3>
        {store.isLoading ? (
          "Uçuşlar yükleniyor"
        ) : (
          <p>{store.flights.length} Uçuş Bulundu</p>
        )}
      </h3>
    </header>
  );
};

export default Header;
