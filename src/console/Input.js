import { Console } from '@woowacourse/mission-utils';

class Inputs {
    
    async carsInput(){
        return await Console.readLineAsync("");
    }
    async playInput(){
        return await Console.readLineAsync("");
    }
}


export { Inputs }