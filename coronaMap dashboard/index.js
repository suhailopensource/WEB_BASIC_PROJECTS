function updateMap()
{
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude
        });
    })
}
updateMap();