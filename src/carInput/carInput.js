import { MissionUtils } from "@woowacourse/mission-utils";

class Cars {
    async input(){

        let msg = MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
        let carInput = await MissionUtils.Console.readLineAsync("")

        if (!carInput.includes(',')) {
            throw new Error('[ERROR] 쉼표(,)로 자동차 이름을 구분해주세요.');
        }else if(!carInput){
            throw new Error('[ERROR] 경주할 자동차 이름을 입력해주세요');
        }

        let cars = carInput.split(",")

        for(let index = 0; index < cars.length; index++){
            if(cars[index].length > 5 ){
                throw new Error('[ERROR] 경주할 자동차의 이름이 너무 깊니다. 5글자 이내로 작성해주세요');
            }
        }        

        return cars

    }
}

export default Cars 