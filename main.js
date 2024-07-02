//Api  key 8ffef5d68a1ed0844c1f31c2195565e2 

const cityInput = document.querySelector(".inputText")
const btn = document.querySelector(".btn")
// console.log(cityInput,btn)

btn.addEventListener("click", () => {
    // console.log("tıklandı")

    // console.dir(cityInput) eleman özelliklerine bakmak
    const cityName = cityInput.value

    //  console.log(cityName)
    getData(cityName)
})

function getData(name) {

    const API = "8ffef5d68a1ed0844c1f31c2195565e2";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?id=${name}&appid=${API}&units=metric`;

    // console.log(fetch(baseURL))

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            const { name, sys: { country }, main: { temp, feels_like, humidity }, weather: [{ description }], wind: { speed } } = data;

            const city = document.querySelector(".city")
            const temperature = document.querySelector(".temp")
            const hum = document.querySelector(".humidity")
            const wind = document.querySelector(".wind")
            const weatherDesc = document.querySelector(".weather")
            const feeling = document.querySelector(".feeling")
            console.log(city, temperature, hum, wind, weatherDesc, feeling)

            // js'e çekilen elemanları yerleştirme
            city.textContent = `${name}, ${country}`;
            temperature.innerText = `${temp.toFixed(0)}°`;
            hum.textContent = `Nem: %${humidity}`
            wind.innerHTML = `Rüzgar: ${speed}km/s`;
            weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>`
            feeling.textContent = `Hissedilen Sıcaklık: ${feels_like.toFixed(0)+"°"}`
        })
        .catch(err => console.log(err))

    cityInput.value = "";
    cityInput.focus();
}