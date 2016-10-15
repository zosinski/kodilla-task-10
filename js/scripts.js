// stałe
var resolutionA = {x:1440, y:2560};
var resolutionB = {x:750, y:1334};

// definicja "klas"
function Telefon(nazwa, marka, cena, kolor, rozdzielczosc) {
	console.log('constructor - rozdzielczość: ', rozdzielczosc);
	this.nazwa = nazwa;
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.ekran = {
		x: rozdzielczosc.x,
		y: rozdzielczosc.y
	};
};

Telefon.prototype.printInfo = function() {
	console.log('nazwa: ', this.nazwa, ', marka: ', this.marka, ', cena: ', this.cena, ', kolor: ', this.kolor);
};

Telefon.prototype.printScreenX = function() {
	console.log('rozdzielczość ekranu w poziomie: ', this.ekran.x);
};

Telefon.prototype.printScreenResolution = function() {
	console.log('rozdzielczosc ekranu: ' + this.ekran.x + ' x ' + this.ekran.y);
}

// test
test();

function test() {
	
	var iPhone6S = new Telefon('iPhone 6S', 'Apple', 2250, 'biały', resolutionB);
	var samsungGalaxyS7 = new Telefon('Samsung Galaxy S7', 'Samsung', 2790, 'czarny', resolutionA);
	resolutionA.x = 1450;
	var samsungGalaxyS6 = new Telefon('Samsung Galaxy S6', 'Samsung', 1900, 'czarny', resolutionA);
	
	samsungGalaxyS7.printInfo();
	samsungGalaxyS7.printScreenX();
	samsungGalaxyS7.printScreenResolution();

};


