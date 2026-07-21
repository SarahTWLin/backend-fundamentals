class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        
        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends AppError {
    constructor(message = "Bad Request") {
        super(message, 400);
    }
}

class NotFoundError extends AppError {
    constructor(message = "Task Not Found") {
        super(message, 404);
    }
}

module.exports = {
    AppError,
    BadRequestError,
    NotFoundError
};