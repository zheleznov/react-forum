import testData from '../data';

export default class DataService {
  data = testData;

  getData(targetData) {
    return this.data[targetData];
  }

  getCategories() {
    console.log(this.data);
  }
}
