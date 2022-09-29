const RouteZones = () => {

    const getZonas = async () => {
        const response = await fetch('./Zones.json');
        const data = await response.json();
        return data
}

console.log(getZonas());

}
export default RouteZones;