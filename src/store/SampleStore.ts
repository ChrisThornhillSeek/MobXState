import { action, makeAutoObservable } from "mobx";

class SampleStore {
  clickCounter = 0;
  locations = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  incCounter() {
    this.clickCounter++;
  }
}
const sampleStore = new SampleStore();
export default sampleStore;
