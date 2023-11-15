const api = {
    base: '',
    key: ''
}

const input = document.querySelector('.searchbar');
const container = document.querySelector('.location-container');
let store = {};

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && e.target.value) {
        
    }
});


const fetchData = async () => {
    let city = 'London';
    const response = await fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
    .then(res => res.json());
    const {name, weather, main: {temp}, sys : {country}} = response;   
    store = {
        name,
        weather: weather[0].main,
        temp,
        country
    };
    renderComponent();
};

const renderComponent = () => {
    container.innerHTML = getContent();
}

const getContent = () => {
    const {name, weather, temp, country} = store;

    return `<div class="location-box">
    <div class="location">
        ${name}, ${country}   
    </div>
    <div class="date">14.11.2023</div>
</div>

<div class="weather-box">
    <div class="temp">${temp} C</div> 
    <div class="weather">${weather}</div>
</div>`
}

fetchData();