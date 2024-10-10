class Animal {
    fazerSom () {
        return "Som de Animal"
    }
}

class Cachorro extends Animal {
    fazerSom(){
        return "Au au";
    }
}
const meuCachorro = new Cachorro();
console.log(meuCachorro.fazerSom());