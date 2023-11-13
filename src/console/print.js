import {GAME_MESSAGE} from '../util/const.js'
import { Console } from '@woowacourse/mission-utils';

class Print {

    startMsg(){
        Console.print(GAME_MESSAGE.start);
    }

    playMsg(){
        Console.print(GAME_MESSAGE.play);
    }

    racingMsg(el, leng){
        Console.print(`${el} : ${leng}`);
    }

    winnerMsg(cars){
        Console.print(`최종 우승자:${cars}`)
    }

    enter(){
        Console.print(``)
    }
}

export {Print}
