import { action, makeAutoObservable, reaction } from "mobx";

class SampleStore {
  clickCounter = 0;
  locations = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();

    // Automatically save to localStorage whenever the todos array changes
    reaction(
      () => this.clickCounter,
      (clickCounter) => {
        localStorage.setItem("clickCounter", JSON.stringify(clickCounter));
      }
    );
  }

  @action
  incCounter() {
    this.clickCounter++;
  }

  loadFromLocalStorage() {
    const clickCounter = localStorage.getItem("clickCounter");
    if (clickCounter) {
      this.clickCounter = JSON.parse(clickCounter);
    }
  }
}
const sampleStore = new SampleStore();
export default sampleStore;
