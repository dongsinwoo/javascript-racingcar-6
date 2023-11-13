import { GAME_CONST } from "./const"

const InputErr =(carsInput)=>{

    if(!cars){
        throw Error("[ERROR] 값을 제대로 입력하지 않았습니다.")
    }

    if(!cars.includ(",")){
        throw Error("[ERROR] 자동차 이름을 ,로 구분지어주세요")
    }
}

const arayErr = (cars)=>{
    for(let index = 0; index < cars.length; index++){
        if(cars[index].length > GAME_CONST.carLangth){
            throw Error(`[ERROR] 자동차 이름은 ${GAME_CONST.carLangth - 1}자리 이하로 지어주세요`)
        }
    }
}