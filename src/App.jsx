import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/LıstView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import SideDetail from "./components/SideDetail";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  const openModal = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };
  return (
    <>
      <Header />
      <div className="view-buttons mb-4">
        <button
          className={showMapView && "active"}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!showMapView && "active"}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {showMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}

      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
