class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animal");
    }
    speak(){
        console.log(this.name  + " speaks " + this.speaks);
    }
}

let dog = new Animal("dog", 4, "bhow bhow");
dog.speak();

// static methods are associated with class not with object
// we can call static methods without instanciating a obj