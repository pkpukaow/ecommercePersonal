import BotDetail from "../components/itemdetail/BotDetail";
import TopDetail from "../components/itemdetail/TopDetail";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemDetailPage() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8008/items/${id}`);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <TopDetail data={data.item} />
      <BotDetail data={data.item} />
    </>
  );
}

export default ItemDetailPage;
