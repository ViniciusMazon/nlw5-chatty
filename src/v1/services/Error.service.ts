class ErrorService {
  protected code: string;
  protected message: string;

  public throw(code: string, message: string) {
    this.error.prototype = Object.create(this.error.prototype);
    this.error.prototype.constructor = this.error;

    throw new this.error(code, message);
  }

  private error(code, message) {
    this.code = code;
    this.message = message || 'Unexpected error';
  }
}

export default new ErrorService;
