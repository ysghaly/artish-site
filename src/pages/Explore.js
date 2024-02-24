import SideNav from "../components/sidenav";
import GigBanner from "../components/gigbanner";
import Search from "../components/search";
import TopBar from "../components/topbar";
import Profiles from "../components/profiles-section";

import { useEffect, useState } from "react";

function Explore() {

  const [data, setData] = useState(null);
  const [finalData, setFinalData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://198.46.146.159:8000/?format=json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        var copiedData =  [...jsonData];
        setData(jsonData);
        setFinalData(copiedData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div className="Explore">
      <TopBar />
      <h1>Explore:</h1>
      <SideNav />
      <GigBanner />
      <Search setFinalData={setFinalData} data={data} />
      <div>
        {finalData ? (
          <Profiles data={finalData} />
        ) : (
          <div>
            <p>Please wait for the data to load...</p>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Explore;
