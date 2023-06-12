//alert("can you see this?");

function coffeeTemplate(coffee){
return `
	<p>
				<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
				<strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>

	`;

}
let myDate = new Date();

let coffee = "";

let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


//today = 3;

if(urlParams.has("day")){//from querystring
	today = urlParams.get("day");
}

today = parseInt(today);

//console.log(today);

switch(today){

	case 0:
		today = "Sunday"
		coffee = {
			name: "Bubble Tea",
			color: "pink",
			pic: "images/bubble-tea.jpg",
			alt: "A picture of a bubble tea",
			day: "Sunday",
			desc: `I love me some Bubble Tea!`,
		};
	break;

	case 1:
		today = "Monday"
		coffee = {
			name: "Caramel Latte",
			color: "maroon",
			pic: "images/caramel-latte.jpg",
			alt: "A picture of a caramel latte",
			day: "Monday",
			desc: `Your'e the Caramel to my Latte!`,
		};
	break;
	
	case 2:
		today = "Tuesday"
		coffee = {
			name: "Cold Brew",
			color: "lightblue",
			pic: "images/cold-brew.jpg",
			alt: "A picture of a cold brew",
			day: "Tuesday",
			desc: `Come to the dark side!`,
		};
	break;

    	case 3:
		today = "Wednesday"
		coffee = {
			name: "Drip",
			color: "black",
			pic: "images/drip.jpg",
			alt: "A picture of a drip coffee",
			day: "Wednesday",
			desc: `Give it to me straight!`,
		};
	break;

	case 4:
		today = "Thursday"
		coffee = {
			name: "Frappaccino",
			color: "green",
			pic: "images/frappaccino.jpg",
			alt: "A picture of a frappaccino",
			day: "Thursday",
			desc: `Dont worry be Frappey!`,
		};
	break;

	case 5:
		today = "Friday"
		coffee = {
			name: "Mocha",
			color: "purple",
			pic: "images/mocha.jpg",
			alt: "A picture of a mocha",
			day: "Friday",
			desc: `You Mocha me happy!`,
		};
	break;

	case 6:
		today = "Saturday"
		coffee = {
			name: "Pumpkin Spice Latte",
			color: "orange",
			pic: "images/pumpkin-spice-latte.jpg",
			alt: "A picture of a pumpkin spice latte",
			day: "Saturday",
			desc: `'Tis the season for pumpkin spice!`,
		};
	break;

	default:
	today = "Not sure?"


}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

//alert(today);
console.log(coffee);