const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const timezoneDisplay=document.querySelector(".timezone");
const loader = document.querySelector(".loader-container");

lookupBtn.addEventListener("click", () => {
  loader.style.display = "flex";
  axios.get("https://ipapi.co/json").then((response) => {
    loader.style.display = "none";
    ipDisplay.textContent = `IP Address: ${response.data.ip}`;
    locationDisplay.textContent = `Location: ${response.data.city}, ${response.data.region},${response.data.country_name}`;
    geoDisplay.textContent = `Geo Location: ${response.data.latitude}, ${response.data.longitude}`;
    timezoneDisplay.textContent=`Time Zone: ${response.data.timezone}`
  });
});
