
class Animal {
    constructor(name = "", type = "", color = "") {
        this.name = name;
        this.color = color;
        this.type = type;

    }

    info() {
        console.log(this.name + " это " + this.type + " и он " + this.color + " цвета" + ".");
    }
}

class Dog extends Animal {
    constructor(name, type, color, poroda = "") {
        super(name, type, color)
        this.poroda = poroda;
    }

    getDog() {
        console.log("Он " + this.poroda);
    }
}

const Tuz = new Dog("тузик", "собака", "чёрного", "мопс")

Tuz.info()
Tuz.getDog()

class Duck extends Animal {
    constructor(name, type, color, pol  = "") {
        super(name, type, color)
        this.pol = pol;
    }

    getDuck() {
        console.log("Он" + this.pol);
    }
}

const Vas = new Duck("Вася", "селезень", "белого", "мужского пола, ведь он селезень")

Vas.info()
Vas.getDuck()

class Chipmunk extends Animal {
    constructor(name, type, color, food  = "") {
        super(name, type, color)
        this.food = food;
    }

    getChipmunk() {
        console.log("И он ест " + this.food);
    }
}

const Alvin = new Chipmunk("Элвин", "бурундук", "серого", "корм")

Alvin.info()
Alvin.getChipmunk()