// document.addEventListener("DOMContentLoaded", () => {

//     const apiKey = "b816e7d94dd27dc58a35e126db4432b8";

//     // Create map
//     const map = L.map("weatherMap").setView([22.9734, 78.6569], 5);

//     L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         maxZoom: 19
//     }).addTo(map);

//     // Optional weather overlay tiles (can keep or remove)
//     const tempLayer = L.tileLayer(
//         `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`,
//         { opacity: 0.5 }
//     ).addTo(map);

//     // Major Indian State Capitals + Coordinates
//     const cities = [
//         { name: "Delhi", lat: 28.6139, lon: 77.2090 },
//         { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
//         { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
//         { name: "Chennai", lat: 13.0827, lon: 80.2707 },
//         { name: "Bengaluru", lat: 12.9716, lon: 77.5946 },
//         { name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
//         { name: "Jaipur", lat: 26.9124, lon: 75.7873 },
//         { name: "Lucknow", lat: 26.8467, lon: 80.9462 },
//         { name: "Patna", lat: 25.5941, lon: 85.1376 },
//         { name: "Ahmedabad", lat: 23.0225, lon: 72.5714 }
//     ];

//     // Weather icons mapping
//     const iconMap = {
//         "01d": "☀️", "01n": "🌙",
//         "02d": "🌤️", "02n": "☁️",
//         "03d": "☁️", "03n": "☁️",
//         "04d": "☁️", "04n": "☁️",
//         "09d": "🌧️", "09n": "🌧️",
//         "10d": "🌦️", "10n": "🌧️",
//         "11d": "🌩️", "11n": "🌩️",
//         "13d": "❄️", "13n": "❄️",
//         "50d": "🌫️", "50n": "🌫️"
//     };

//     // Fetch live weather + add markers
//     cities.forEach(async city => {
//         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`;

//         const response = await fetch(url);
//         const data = await response.json();

//         const temp = data.main.temp;
//         const wind = data.wind.speed;
//         const humidity = data.main.humidity;
//         const condition = data.weather[0].description;
//         const icon = iconMap[data.weather[0].icon] || "🌡️";

//         // Create marker popup
//         const popup = `
//             <b>${city.name}</b><br>
//             ${icon} <b>${temp}°C</b><br>
//             🌬️ Wind: ${wind} m/s<br>
//             💧 Humidity: ${humidity}%<br>
//             🌦️ ${condition}
//         `;

//         L.marker([city.lat, city.lon]).addTo(map).bindPopup(popup);
//     });

//     // Fix map rendering inside card
//     setTimeout(() => map.invalidateSize(), 300);

// });


document.addEventListener("DOMContentLoaded", () => {

    const API_KEY = "b816e7d94dd27dc58a35e126db4432b8";

    // Create map
    const map = L.map("weatherMap").setView([22.9734, 78.6569], 5);

    // Base Layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19
    }).addTo(map);

    
    const tempTiles = L.tileLayer(
        `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
        { opacity: 0.45 }
    ).addTo(map);

    const rainTiles = L.tileLayer(
        `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
        { opacity: 0.45 }
    );

    const cloudsTiles = L.tileLayer(
        `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
        { opacity: 0.4 }
    );

    const windTiles = L.tileLayer(
        `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
        { opacity: 0.4 }
    );

    // Layer Control
    L.control.layers(
        {
            "Temperature": tempTiles,
            "Rain": rainTiles,
            "Clouds": cloudsTiles,
            "Wind": windTiles
        },
        {},
        { collapsed: false }
    ).addTo(map);

    // Create temp-colored markers
    function getColor(temp) {
        if (temp <= 15) return "#2b83ba";
        if (temp <= 25) return "#66c2a5";
        if (temp <= 32) return "#fdae61";
        return "#d7191c";
    }

    function createTempIcon(temp) {
        const color = getColor(temp);
        return L.divIcon({
            className: "marker-temp",
            html: `<div style="
                width:18px; 
                height:18px; 
                border-radius:50%; 
                background:${color};
                border:2px solid white">
            </div>`
        });
    }

    // Fetch current weather for any point
    async function fetchWeather(lat, lon) {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        return res.json();
    }

    // Popup on map click
    map.on("click", async (e) => {
        const lat = e.latlng.lat;
        const lon = e.latlng.lng;

        const data = await fetchWeather(lat, lon);

        const popup = `
            <b>${data.name || "Unknown Location"}</b><br>
            🌡 Temperature: <b>${data.main.temp}°C</b><br>
            🌬 Wind: ${data.wind.speed} m/s<br>
            💧 Humidity: ${data.main.humidity}%<br>
            🌥 Condition: ${data.weather[0].description}
        `;

        L.popup().setLatLng(e.latlng).setContent(popup).openOn(map);
    });

    
    const markerLayer = L.layerGroup().addTo(map);

    async function loadMarkers() {
        markerLayer.clearLayers();

        const bounds = map.getBounds();
        const zoom = map.getZoom();

        if (zoom < 5) return; // too zoomed out

        const latStep = 1.8 / zoom; 
        const lonStep = 1.8 / zoom;

        for (let lat = bounds.getSouth(); lat < bounds.getNorth(); lat += latStep) {
            for (let lon = bounds.getWest(); lon < bounds.getEast(); lon += lonStep) {
                
                const data = await fetchWeather(lat, lon).catch(() => null);
                if (!data) continue;

                const temp = data.main.temp;

                const marker = L.marker([lat, lon], {
                    icon: createTempIcon(temp)
                });

                marker.bindTooltip(`${temp}°C`, { direction: "top" });

                marker.addTo(markerLayer);
            }
        }
    }

    map.on("moveend", loadMarkers);
    map.on("zoomend", loadMarkers);

    setTimeout(() => map.invalidateSize(), 500);
});
