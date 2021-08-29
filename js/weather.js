const color = {
	'01d': '#F59E0B',
	'02d': '#F59E0B',
	'03d': '#60A5FA',
	'04d': '#60A5FA',
	'09d': '#3C949C',
	'10d': '#3C949C',
	'11d': '#255B83',
	'13d': '#00041A',
	'50d': '#4D7DB5',
	'01n': '#DDA221',
	'02n': '#6E3DBD',
	'03n': '#001A71',
	'04n': '#5BACFE',
	'09n': '#2D637B',
	'10n': '#C2616C',
	'11n': '#314BB0',
	'13n': '#00041A',
	'50n': '#E2B101',
};
const cityInput = document.getElementById('city-input');
const searchWeather = () => {
	loadWeather(cityInput.value);
	cityInput.value = '';
};

const loadWeather = (city) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c69cb0b5dcf6ef54bbac57815a812e7a`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => setValue(data));
};

const setValue = (data) => {
	console.log(color[data.weather[0].icon]);
	document.getElementById(
		'weather-img'
	).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	document.getElementById('weather-city').textContent = data.name;
	document.getElementById('weather-temp').textContent = `${data.main.temp}°C`;
	document.getElementById('weather-condition').textContent =
		data.weather[0].main.toUpperCase();
	document.body.style.backgroundImage = `url('./images/${data.weather[0].icon}.png')`;
	document.getElementById('search-btn').style.background = color[data.weather[0].icon];
	cityInput.style.borderColor = color[data.weather[0].icon];
};

cityInput.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		e.preventDefault();
		searchWeather();
	}
});

loadWeather('Dhaka');
