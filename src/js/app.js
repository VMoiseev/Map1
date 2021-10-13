export default class ErrorRepository {
  constructor() {
    this.errorContainer = new Map([
      [200, 'Ok'],
      [201, 'Created'],
      [202, 'Accepted'],
    ]);
  }

  translate(code) {
    if (this.errorContainer.has(code)) {
      return this.errorContainer.get(code);
    }
    return 'Unknown error';
  }
}
