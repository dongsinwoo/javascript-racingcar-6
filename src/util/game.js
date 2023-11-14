import { Random } from '@woowacourse/mission-utils';

const game = {

    random(min, max){
        return Random.pickNumberInRange(min, max);
    },

    winner(carsObject){
        let winner = []
        let maxScore = 0;

        for(const key in carsObject){
            let score = carsObject[key].leng.length

            if (score > maxScore) {
                maxScore = score;
                winner = [key];
            }else if(score == maxScore){
                winner.push(key)
            }
        }

        return winner.join(",")
    }

}

export {game}