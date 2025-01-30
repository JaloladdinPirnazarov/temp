module.exports = class BaseError extends Error {
  constructor(status, message, errors = []) {

    super()
    this.status = status
    this.errors = errors
    this.message = message
  }
  static UnautorizedError(message, errors = []) {
    return new BaseError(401, message, errors);
  }
  static BadRequest(message, errors = []) {
    return new BaseError(400, message, errors);
  }
  static Forbidden(message, errors = []) {
    return new BaseError(403, message, errors);
  }
};
