import { Inputs } from "./console/Input.js";
import { Print } from "./console/print.js";
import { game } from "./util/game.js";
import { GAME_CONST } from "./util/const.js";
import { inputErr, arayErr, numErr} from "./util/throw.js";


class App {
  async play() {
    // 입력 받기
    const print = new Print();
    const inputs = new Inputs();

    // 게임 시작
    // 시작 메세지
    print.startMsg();
    // 자동차 입력 받기
    const carsInput = await inputs.carsInput();
    
    //carInput 예외처리 
    inputErr(carsInput);

    // 자동차 입력받은 거 배열로 변환
    const cars = carsInput.split(",");

    // 배열로 변환한 거 예외처리
    arayErr(cars);

    // 유저 플레이횟수 정하기
    print.playMsg();
    let userPlayInput = await inputs.playInput();

    // 게임 횟수에 대한 예외처리
    numErr(userPlayInput);

    // cars의 거리를 각각 주기 위함.
    let carsObject = {}

    while(0 < userPlayInput){
      userPlayInput--;

      // carsObject에 키와 벨류 넣어주기
      cars.forEach((el) => {
        // 우승 조건
        let leng = carsObject[el]?.leng || "";

        // 객체로 거리 추가하기
        carsObject[el] = {
          leng : game.random(GAME_CONST.minitNum,GAME_CONST.maxNum) >= 4 ? leng += "-" : leng,
        }

        // 경기 상황 보여줌
        print.racingMsg(el, carsObject[el].leng);
      });

      // 띄어쓰기 해주는 역할
      print.enter();
    }

    // 우승자 출력
    print.winnerMsg(game.winner(carsObject))

  }
}

const app = new App()
app.play()

export default App;
