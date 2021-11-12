// GitHub https://github.com/andrewelizev/a-level-js-hw12

// Lesson 12



// ДЗ: реализовать на классах объект из реального мира, и сделать наследование.
// (Табуретка -> стул -> кресло) к примеру). Базовый класс должен содержать
// несколько полей и методов, которые будут переопределены и унаследованы дочерними классами

console.log('=============== Guitar ===============');

class Guitar {
    constructor(body, neck, strings) {
        this.body = body;
        this.neck = neck;
        this.strings = strings;
    }

    countStrings() {
        console.log((this.strings == 4) ? `bass guitar` : `${this.strings}-strings guitar`);
    }

    chooseBody() {
        switch (this.body) {
            case 'hollow':
                console.log('Acoustic guitar');
                break;
            case 'semihollow':
                console.log('Semi acoustic guitar');
                break;
            case 'solid':
                console.log('Electric guitar');
                break;
            default:
                console.log('Just a guitar');
        }
    }
}
console.log(Guitar);

console.log('=========== Classic guitar ===========');
let classicGuitar = new Guitar('hollow', 'wide', 12);
console.log(Guitar);
console.log(classicGuitar);
classicGuitar.countStrings();
classicGuitar.chooseBody();


console.log('=========== Electric guitar ===========');
class ElectricGuitar extends Guitar {
    volume() {
        console.log('LOUD');
    }
}

let gibson = new ElectricGuitar('solid', 'thin', 6);
console.log(gibson);
gibson.volume();
gibson.chooseBody();


console.log('======= Electric guitar with FX =======');

class ElectricGuitarFX extends ElectricGuitar {
    volume() {
        console.log('NOT LOUD');
    }

    turnOnWahFX() {
        console.log('Wah-Wah');
    }
}

let gibsonLesPaul = new ElectricGuitarFX('solid', 'thin', 6);
console.log(gibsonLesPaul);
gibsonLesPaul.volume();
gibsonLesPaul.chooseBody();
gibsonLesPaul.turnOnWahFX();