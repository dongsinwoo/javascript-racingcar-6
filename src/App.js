import Cars from "./carInput/carInput.js"

class App {
  async play() {
    // 자동차의 이름
    const cars = new Cars()
    cars.input()
  }
}

const app = new App()
app.play()

export default App;
