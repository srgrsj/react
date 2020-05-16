const Animal = {
    name: "",
    move: 0,
    mov: function(){
        console.log(this.name + " делает " + this.move)
    },
    constrct: function(name, move){
        this.name = name;
        this.move = move;
    }
}

const duck = Object.create(Animal)
duck.constrct("Селезень", "кря")

const dog = Object.create(Animal)
dog.constrct("Собака", "гав")

const chipmunk = Object.create(Animal)
chipmunk.constrct("Бурундук", "писк")


duck.mov()
dog.mov()
chipmunk.mov()