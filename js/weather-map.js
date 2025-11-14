document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "b816e7d94dd27dc58a35e126db4432b8";

    // Setup Map
    const map = L.map("weatherMap").setView([20.5937, 78.9629], 7);


    // Base Map
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
    }).addTo(map);

    // Weather Layers
    const rain = L.tileLayer(
        `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`,
        { opacity: 0.6 }
    ).addTo(map);

    const clouds = L.tileLayer(
        `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${apiKey}`,
        { opacity: 0.6 }
    );

    const wind = L.tileLayer(
        `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${apiKey}`,
        { opacity: 0.5 }
    );

    const temp = L.tileLayer(
        `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`,
        { opacity: 0.6 }
    );

    // Layer toggle
    L.control.layers(
        {
            "Rainfall": rain,
            "Clouds": clouds,
            "Wind": wind,
            "Temperature": temp
        },
        {},
        { collapsed: false }
    ).addTo(map);

    console.log("Live weather map loaded ✔");
});
setTimeout(() => {
    map.invalidateSize();
}, 500);
