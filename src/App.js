import { Inputs } from "./console/Input.js";
import { Print } from "./console/print.js";
import { game } from "./util/game.js";
import { GAME_MESSAGE, GAME_CONST } from "./util/const.js";


class App {
  async play() {
    // 입력 받기
    const print = new Print();
    const inputs = new Inputs();

    // 게임 시작
    print.startMsg();
    const carsInput = await inputs.carsInput();
    if(!carsInput){
      throw
    }
    const cars = carsInput.split(",");
    console.log(cars);




  }
}

const app = new App()
app.play()

export default App;
