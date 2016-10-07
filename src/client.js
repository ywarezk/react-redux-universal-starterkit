/**
 * entry point file for webpack
 *
 * Created October 7th, 2016
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdeez
 */

export class Pokemon{
    constructor(name = 'Pikachu'){
        this.name = name;
    }

    sayHello(){
        console.log(this.name + ' said hello');
    }
}

const pikachu = new Pokemon();
pikachu.sayHello();
