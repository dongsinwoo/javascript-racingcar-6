import { Random } from '@woowacourse/mission-utils';

const game = {

    random(min, max){
        return Random.pickNumberInRange(min, max);
    },

    goStap(num){
        if(num >= 4){
            return + "-"
        }else{
            return;
        }
    },

    score(car){
        return car.length;
    }

}

export {game}