export const sortStations = (stations) => {
    stations.sort(function (station1, station2) {
        return station1.id - station2.id;
    });
    return stations;
};

export const isEmpty = text => {
    return !text || text.length === 0;
};

export const filterSearchedInputFromList = (stationList, searchInput) =>{
 return (stationList.filter(station => station.name.includes(searchInput)
     || station.address.includes(searchInput)
     || station.station_id.includes(searchInput)) || []);
};