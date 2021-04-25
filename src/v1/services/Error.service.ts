class ErrorService {
  protected code: string;
  protected message: string;

  public throw(code: string, message: string) {
    this.error.prototype = Object.create(this.error.prototype);
    this.error.prototype.constructor = this.error;

    throw new this.error(code, message);
  }

  private error(code = '400', message = 'Unexpected error') {
    this.code = code;
    this.message = message;
  }
}

export default new ErrorService();
