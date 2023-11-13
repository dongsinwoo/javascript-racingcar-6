import { GAME_CONST } from "./const.js"

const inputErr =(carsInput)=>{

    if(!carsInput){
        throw new Error("[ERROR] 값을 제대로 입력하지 않았습니다.")
    }

    if(!carsInput.includes(",")){
        throw new Error("[ERROR] 자동차 이름을 ,로 구분지어주세요")
    }
}

const arayErr = (cars)=>{
    for(let index = 0; index < cars.length; index++){
        if(cars[index].length > GAME_CONST.carLangth){
            throw new Error(`[ERROR] 자동차 이름은 ${GAME_CONST.carLangth + 1}자리 이하로 지어주세요`)
        }
    }

    const hasDuplicate = new Set(cars).size !== cars.length;

    if (hasDuplicate) {
        throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
    
    const hasEmptyName = cars.some(name => !name.trim());
    if (hasEmptyName) {
    throw new Error("[ERROR] 빈 자동차 이름이 있습니다.");
    }


}

const numErr = (num)=>{
    if(num <= 0){
        throw new Error(`[ERROR] 게임 진행 횟수를 다시 입력해주세요`)
    }

    if (isNaN(num)) {
        throw new Error("[ERROR] 숫자를 입력하세요.");
      }
    

}

export {arayErr, inputErr, numErr}