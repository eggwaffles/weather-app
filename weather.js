class Weather {
    constructor(currentTemperature, currentDescription, hourlyForecast, lat, lon, nextDay, nextNextDay) {
        this.currentTemperature = currentTemperature;
        this.currentDescription = currentDescription; 
        this.hourlyForecast = hourlyForecast; 
        this.unit = 'C';
        this.lat = lat;
        this.long = lon;
        this.nextDay = nextDay;
        this.nextNextDay = nextNextDay;
    }

    updateWeatherIcon(isNight) {
        const currentWeather = this.currentDescription;
        let iconName;
        const container = document.getElementById('weather-icon-container');
        const outsideContainer = document.getElementById('weather-container');
        const iconSelf = document.getElementById('weather-icon')
        outsideContainer.style.position = "relative";
        let imageSrcs = []
        switch(currentWeather) {
            case 'Clear Sky':
                iconName = 'sunny';
                if(isNight == true){
                    iconName = 'nightbackground'
                    iconSelf.style.height = '130px';
                    container.style.top = '0px';
                    container.style.marginLeft = '60%'
                }
                break;
            case 'Rainy':
                if(!isNight){
                    outsideContainer.classList.add('rainy-background'); 
                }
                iconName = 'blank';
                imageSrcs = [
                    'assets/rainybg/cloud1.svg',
                    'assets/rainybg/cloud2.svg',
                    'assets/rainybg/cloud3.svg'
                ];
                container.style.marginLeft = 0;
                container.style.top = 0;
                imageSrcs.forEach((src, index) => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.position = "absolute";
                    container.appendChild(img);
                    gsap.timeline({repeat: -1, yoyo: true, delay: index * 2}).to(img, {
                        duration: 8, 
                        scale: 1 + Math.random() * .3,
                        x: "+=" + 50 - Math.random() * 100,
                        y: "+=" + 10 - Math.random() * 20,
                        opacity: 0.8 + Math.random() * 0.2,
                        ease: "power1.inOut"
                    });
                });
                for (let i = 0; i < 20; i++) {
                    const raindrop = document.createElement('div');
                    raindrop.style.position = 'absolute';
                    raindrop.style.width = '3px';
                    raindrop.style.height = '40px';
                    raindrop.style.backgroundColor = 'white';
                    raindrop.style.opacity = 0.8;
                    raindrop.style.borderTopLeftRadius = '25%';
                    raindrop.style.borderTopRightRadius = '25%';
                    raindrop.style.borderBottomLeftRadius = '25%';
                    raindrop.style.borderBottomRightRadius = '25%';
                    raindrop.style.transform = 'rotate(25deg)';
                    raindrop.style.top = `${Math.random() * 50}%`;
                    raindrop.style.left = `${Math.random() * 100}%`;
                
                    outsideContainer.appendChild(raindrop);
                
                    gsap.to(raindrop, {
                        duration: 1 + Math.random() * 5,
                        y: '+=100%',
                        x: '-=50',
                        opacity: 0,
                        ease: 'none',
                        repeat: -1,
                        delay: -Math.random()
                    });
                }      
                break;
            case 'Partly Cloudy':
                if(!isNight){
                    outsideContainer.classList.add('partly-background'); 
                }
                iconName = 'sunnycloud';
                if(isNight == true){
                    iconName = 'cloud night'
                }
                break;
            case 'cloudy': //cloudy
                if(!isNight){
                    outsideContainer.classList.add('cloudy-background'); 
                }
                iconName = 'blank';
                imageSrcs = [
                    'assets/cloudybg/cloud1.svg',
                    'assets/cloudybg/cloud2.svg',
                    'assets/cloudybg/cloud3.svg'
                ];
                container.style.marginLeft = 0;
                container.style.top = 0;
                imageSrcs.forEach((src, index) => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.position = "absolute";
                    container.appendChild(img);
                    gsap.timeline({repeat: -1, yoyo: true, delay: index * 2}).to(img, {
                        duration: 8, 
                        scale: 1 + Math.random() * .3, // Random scaling factor
                        x: "+=" + 50 - Math.random() * 100, // Random horizontal movement
                        y: "+=" + 10 - Math.random() * 20, // Random vertical movement
                        opacity: 0.8 + Math.random() * 0.2, // Slight change in opacity
                        ease: "power1.inOut"
                    });
                });             
                break;
            case 'Snowy':
                if(!isNight){
                    outsideContainer.classList.add('snowy-background'); 
                }
                iconName = 'blank';
                imageSrcs = [
                    'assets/snowybg/cloud1.svg',
                    'assets/snowybg/cloud2.svg',
                    'assets/snowybg/cloud3.svg'
                ];
                container.style.marginLeft = 0;
                container.style.top = 0;
                imageSrcs.forEach((src, index) => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.position = "absolute";
                    container.appendChild(img);
                    gsap.timeline({repeat: -1, yoyo: true, delay: index * 2}).to(img, {
                        duration: 8, 
                        scale: 1 + Math.random() * .3, // Random scaling factor
                        x: "+=" + 50 - Math.random() * 100, // Random horizontal movement
                        y: "+=" + 10 - Math.random() * 20, // Random vertical movement
                        opacity: 0.8 + Math.random() * 0.2, // Slight change in opacity
                        ease: "power1.inOut"
                    });
                });
                for (let i = 0; i < 15; i++) { // Adjust the number of raindrops as needed
                    const raindrop = document.createElement('div');
                    raindrop.style.position = 'absolute';
                    let size = Math.random() * 8 + 8;
                    raindrop.style.width = `${size}px`; // Width of the raindrop
                    raindrop.style.height = `${size}px`; // Length of the raindrop
                    raindrop.style.backgroundColor = 'white'; // Color of the raindrop
                    raindrop.style.opacity = 0.8; // Starting opacity
                    raindrop.style.borderTopLeftRadius = '50%';
                    raindrop.style.borderTopRightRadius = '50%';
                    raindrop.style.borderBottomLeftRadius = '50%';
                    raindrop.style.borderBottomRightRadius = '50%';
                    raindrop.style.top = `${Math.random() * 50}%`; // Random starting positions, more towards the top
                    raindrop.style.left = `${Math.random() * 100}%`;
                
                    outsideContainer.appendChild(raindrop);
                
                    // GSAP Animation for Raindrops
                    gsap.to(raindrop, {
                        duration: 1 + Math.random() * 5, // Random duration for falling
                        y: '+=100%', // Fall to the bottom of the container
                        opacity: 0, // Fade out effect
                        ease: 'none',
                        repeat: -1,
                        delay: -Math.random() // Start at different times
                    });
                }      
                break;
            case 'Lightning' : //lightning
                if(!isNight){
                    outsideContainer.classList.add('lightning-background'); 
                }
                iconName = 'blank';
                imageSrcs = [
                    'assets/lightningbg/cloud1.svg',
                    'assets/lightningbg/cloud2.svg',
                    'assets/lightningbg/cloud3.svg'
                ];
                container.style.marginLeft = 0;
                container.style.top = 0;
                imageSrcs.forEach((src, index) => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.position = "absolute";
                    container.appendChild(img);
                    gsap.timeline({repeat: -1, yoyo: true, delay: index * 2}).to(img, {
                        duration: 8, 
                        scale: 1 + Math.random() * .3, // Random scaling factor
                        x: "+=" + 50 - Math.random() * 100, // Random horizontal movement
                        y: "+=" + 10 - Math.random() * 20, // Random vertical movement
                        opacity: 0.8 + Math.random() * 0.2, // Slight change in opacity
                        ease: "power1.inOut"
                    });
                });
                for (let i = 0; i < 25; i++) { // Adjust the number of raindrops as needed
                    const raindrop = document.createElement('div');
                    raindrop.style.position = 'absolute';
                    raindrop.style.width = '3px'; // Width of the raindrop
                    raindrop.style.height = '40px'; // Length of the raindrop
                    raindrop.style.backgroundColor = 'white'; // Color of the raindrop
                    raindrop.style.opacity = 0.8; // Starting opacity
                    raindrop.style.borderTopLeftRadius = '25%';
                    raindrop.style.borderTopRightRadius = '25%';
                    raindrop.style.borderBottomLeftRadius = '25%';
                    raindrop.style.borderBottomRightRadius = '25%';
                    raindrop.style.transform = 'rotate(15deg)'; // Rotate to match falling angle
                    raindrop.style.top = `${Math.random() * 50}%`; // Random starting positions, more towards the top
                    raindrop.style.left = `${Math.random() * 100}%`;
                
                    outsideContainer.appendChild(raindrop);
                
                    // GSAP Animation for Raindrops
                    gsap.to(raindrop, {
                        duration: 1 + Math.random() * 1, // Random duration for falling
                        y: '+=150%', // Fall to the bottom of the container
                        x: '-=50', // Move left to create diagonal effect
                        opacity: 0, // Fade out effect
                        ease: 'none',
                        repeat: -1,
                        delay: -Math.random() // Start at different times
                    });
                }
                const lightningSrc = 'assets/lightningbg/lightning111.svg'; // Path to your lightning SVG
                for (let i = 0; i < 5; i++) { // Adjust the number of lightning strikes as needed
                    const lightning = document.createElement('img');
                    lightning.src = lightningSrc;
                    lightning.style.position = 'absolute';
                    lightning.style.opacity = 0; // Start fully transparent
                    lightning.style.left = `${Math.random() * 100}%`; // Random horizontal position across the entire container
                    lightning.style.height = `${50 + Math.random() * 30}%`; // Random height, making some strikes longer
                    lightning.style.transform = `rotate(${Math.random() * 60 - 30}deg)`; // Increased range for rotation
                
                    outsideContainer.appendChild(lightning);
                    gsap.fromTo(lightning, 
                        {opacity: 0},
                        {
                            opacity: 1, // Flash to full opacity
                            duration: 0.02, // Slightly longer flash duration
                            repeat: -1, // Repeat indefinitely
                            yoyo: true, // Return to transparent after flashing
                            repeatDelay: Math.random() * 2 + 0.5, // More varied and longer delays between flashes
                            ease: 'none'
                        }
                    );
                }                
                break;
            default:
                iconName = 'sunny';
        }
        const iconPath = `assets/${iconName}.svg`;
        iconSelf.src = iconPath;       
    }
}

async function fetchWeatherData(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&forecast_days=3&temperature_unit=fahrenheit`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) throw new Error("Failed to fetch weather data");

        console.log(data);
        const hourlyData = data.hourly;
        const currentWeather = {
            temperature: parseInt(hourlyData.temperature_2m[0]),
            condition: getWeatherCondition(hourlyData.weathercode[0])
        };
        const hourlyForecast = hourlyData.temperature_2m.slice(0, 12).map((temp, index) => ({
            temperature: parseInt(temp),
            condition: getWeatherCondition(hourlyData.weathercode[index])
        }));
        const nextDay = hourlyData.temperature_2m.slice(24, 48).map((temp, index) => ({
            temperature: parseInt(temp),
            condition: getWeatherCondition(hourlyData.weathercode[index])
        }));
        const nextNextDay = hourlyData.temperature_2m.slice(48, 72).map((temp, index) => ({
            temperature: parseInt(temp),
            condition: getWeatherCondition(hourlyData.weathercode[index])
        }));

        return new Weather(currentWeather.temperature, currentWeather.condition, hourlyForecast, lat, lon, nextDay, nextNextDay);

    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

function getWeatherCondition(code) {
    const codeMap = {
        0: 'Clear Sky',
        1: 'Partly Cloudy',
        2: 'Partly Cloudy',
        3: 'Partly Cloudy',
        45: 'Cloudy',
        48: 'Cloudy',
        51: 'Rainy',
        53: 'Rainy',
        55: 'Rainy',
        56: 'Rainy',
        57: 'Rainy',
        61: 'Rainy',
        63: 'Rainy',
        65: 'Rainy',
        66: 'Rainy',
        67: 'Rainy',
        71: 'Snowy',
        73: 'Snowy',
        75: 'Snowy',
        77: 'Snowy',
        80: 'Rainy',
        81: 'Rainy',
        82: 'Rainy',
        85: 'Snowy',
        86: 'Snowy',
        95: 'Lightning',
        96: 'Lightning',
        99: 'Lightning'
    };
    return codeMap[code] || 'Unknown';
}

let currentWeatherData = null

async function displayWeather(lat, lon, unit = 'C') {
    const weather = await fetchWeatherData(lat, lon);
    const weatherSummaryElement = document.getElementById('weather-summary');
    if (weather) {
        weather.unit = unit;
        let summaryText = `${weather.currentTemperature}º`;
        const currentWeather = document.getElementById('currentweather');
        currentWeather.innerHTML = summaryText;
        const weatherdescp = document.getElementById('weatherdescription');
        weatherdescp.innerHTML = weather.currentDescription;
        const scrollableContainer = document.querySelector('.scrollable-container');
        let lowTemp = Number.MAX_VALUE;
        let highTemp = Number.MIN_VALUE;
        weather.hourlyForecast.forEach(forecast => {
            if (forecast.temperature < lowTemp) {
                lowTemp = forecast.temperature;
            }
            if (forecast.temperature > highTemp) {
                highTemp = forecast.temperature;
            }
        });

        const timezoneOffset = Math.round(lon / 15);
        const now = new Date();
        const utcHour = now.getUTCHours();
        const localHour = (utcHour + timezoneOffset + 24) % 24;
        const weatherContainer = document.querySelector('.weather-container');
        let isNight = false;
        if (localHour>= 20 ||  localHour< 6) {
            weatherContainer.classList.add('night-background');
            isNight = true;
        } else {
            weatherContainer.classList.add('day-background');
        }
        weather.updateWeatherIcon(isNight);
        document.getElementById('lowtemp').textContent = `L${lowTemp}º`;
        document.getElementById('hightemp').textContent = `H${highTemp}º`;
        for (let index = 0; index < weather.hourlyForecast.length; index++) {
            const forecast = weather.hourlyForecast[index];
            const forecastContainer = document.createElement('div');
            forecastContainer.classList.add('forecast-container');
        
            //div for the time
            const hourDiv = document.createElement('div');
            hourDiv.classList.add('hour');
    
            const currentHour24 = localHour;
            let forecastHour24 = (currentHour24 + index) % 24; 
            let ampm = forecastHour24 >= 12 ? 'PM' : 'AM';
            let forecastHour12 = forecastHour24 % 12;
            forecastHour12 = forecastHour12 ? forecastHour12 : 12;
        
            hourDiv.textContent = `${forecastHour12} ${ampm}`;
            forecastContainer.appendChild(hourDiv);

            //div for the hourly condition
            const conditionDiv = document.createElement('div');
            conditionDiv.classList.add('condition');
            var img = document.createElement("img");
            img.classList.add('scrollableimg')
            const currentWeather = forecast.condition;
            let iconName;
            switch(currentWeather) {
                case 'Clear Sky':
                    iconName = 'sunny';
                    if(isNight == true){
                        iconName = 'night'
                    }
                    break;
                case 'Rainy':
                    iconName = 'rain';
                    break;
                case 'Partly Cloudy':
                    iconName = 'sunnycloud';
                    if(isNight == true){
                        iconName = 'cloud night'
                    }
                    break;
                case 'Cloudy':
                    iconName = 'cloud';
                    break;
                case 'Snowy':
                    iconName = 'snowflake';
                    break;
                case 'Lightning' :
                    iconName = 'lightning';
                    break;
                default:
                    iconName = 'sunny';
            }
            const iconPath = `assets/${iconName}.svg`;
            img.src = iconPath;
            conditionDiv.appendChild(img);
            forecastContainer.appendChild(conditionDiv);
        
            // Div for the temperature
            const tempDiv = document.createElement('div');
            tempDiv.classList.add('temperature');
            tempDiv.textContent = `${forecast.temperature}º`;
            forecastContainer.appendChild(tempDiv);
        
            // Append the forecast container to the scrollable container
            scrollableContainer.appendChild(forecastContainer);

            //forecast for the next 2 days
            let lowTemp = Number.MAX_VALUE;
            let highTemp = Number.MIN_VALUE;
            let totalTemp = 0;
            weather.nextDay.forEach(forecast => {
                if (forecast.temperature < lowTemp) {
                    lowTemp = forecast.temperature;
                }
                if (forecast.temperature > highTemp) {
                    highTemp = forecast.temperature;
                }
                totalTemp += forecast.temperature;
            });
            document.getElementById('lowtemp2').textContent = `L${lowTemp}º`;
            document.getElementById('hightemp2').textContent = `H${highTemp}º`;
            const nextDayTemp = document.getElementById('currentweather2');
            nextDayTemp.innerHTML = `${Math.round(totalTemp/24)}º`;;
            const weatherdescp2 = document.getElementById('weatherdescription2');
            let conditions = weather.nextDay.map(item => item.condition);
            let modeCondition = findMode(conditions);
            weatherdescp2.innerHTML = modeCondition;
            const nextDayDom = document.getElementById('nextDay2');
            nextDayDom.style.backgroundImage = `url("assets/bgs/${modeCondition}.svg")`;
            nextDayDom.style.backgroundRepeat = 'no-repeat';
            nextDayDom.style.backgroundSize = 'cover'; 

            lowTemp = Number.MAX_VALUE;
            highTemp = Number.MIN_VALUE;
            totalTemp = 0;
            weather.nextNextDay.forEach(forecast => {
                if (forecast.temperature < lowTemp) {
                    lowTemp = forecast.temperature;
                }
                if (forecast.temperature > highTemp) {
                    highTemp = forecast.temperature;
                }
                totalTemp += forecast.temperature;
            });
            document.getElementById('lowtemp3').textContent = `L${lowTemp}º`;
            document.getElementById('hightemp3').textContent = `H${highTemp}º`;
            const nextNextDay = document.getElementById('currentweather3');
            nextNextDay.innerHTML = `${Math.round(totalTemp/24)}º`;;
            const weatherdescp3 = document.getElementById('weatherdescription3');
            conditions = weather.nextNextDay.map(item => item.condition);
            modeCondition = findMode(conditions);
            weatherdescp3.innerHTML = modeCondition;
            const nextNextDayDom = document.getElementById('nextDay3');
            nextNextDayDom.style.backgroundImage = `url("assets/bgs/${modeCondition}.svg")`;
            nextNextDayDom.style.backgroundRepeat = 'no-repeat';
            nextNextDayDom.style.backgroundSize = 'cover'; 

        }        
    } else {
        weatherSummaryElement.textContent = 'Unable to retrieve weather data.';
    }
    currentWeatherData = weather;
}

function findMode(conditions) {
    const countMap = {};
    let maxCount = 0;
    let mode = '';

    conditions.forEach(condition => {
        if (countMap[condition]) {
            countMap[condition]++;
        } else {
            countMap[condition] = 1;
        }

        if (countMap[condition] > maxCount) {
            maxCount = countMap[condition];
            mode = condition;
        }
    });

    return mode;
}

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

async function getCityName(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        let city = data.address.city || data.address.town || data.address.village;
        let state = data.address.state;
        if(state == undefined){
            state = data.address.country;
        }
        return city + ", " + state +  ", " + getFlagEmoji(data.address.country_code);

    } catch (error) {
        console.error("Error fetching city name:", error);
        return null;
    }
}

export { displayWeather, getCityName };