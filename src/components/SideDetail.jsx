import axios from "axios";
import React, { useEffect, useState } from "react";
import { detailOptions } from "../helpers/constants";

const SideDetail = ({ detailId, setShowDetail }) => {
  const [detailInfo, setDetailInfo] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOptions
      )
      .then((res) => setDetailInfo(res.data))
      .catch((err) => console.log(err));
  }, [detailId]);
  console.log(detailInfo);
  // console.log("detay sayfası", detailId);
  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close d-flex justify-content-end">
          <span onClick={() => setShowDetail(false)}>X</span>
        </p>
        {!detailInfo ? (
          <p>Yükleniyor...</p>
        ) : (
          <>
            <h2>{detailInfo.aircraft.model.text}</h2>{" "}
            <h2>{detailInfo.aircraft.model?.code}</h2>
            <p>Kuyruk No: {detailInfo.aircraft.registration}</p>
            <img src={detailInfo.aircraft.images?.large[0]?.src} alt="" />
            <p>Şirket:{detailInfo.airline?.name}</p>
            <p className="">
              <span>Kalkış: </span>
              <a href={detailInfo.airport.origin?.website}>
                {detailInfo.airport.origin.name}
              </a>
            </p>
            <p className="">
              <span>Varış: </span>
              <a href={detailInfo.airport.destination.website}>
                {detailInfo.airport.destination.name}
              </a>
            </p>
            <p>
              <span>Durum:</span>
              <span className="status">{detailInfo.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
