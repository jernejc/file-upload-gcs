const ExtendableError = require('es6-error');

class DifferentChunkError extends ExtendableError {
  constructor (chunkIndex, originalChecksum, newChecksum) {
    super(`Chunk at index '${chunkIndex}' is different to original`)
    this.chunkIndex = chunkIndex
    this.originalChecksum = originalChecksum
    this.newChecksum = newChecksum
  }
}

class FileAlreadyUploadedError extends ExtendableError {
  constructor (id, url) {
    super(`File '${id}' has already been uploaded to unique url '${url}'`)
  }
}

class UrlNotFoundError extends ExtendableError {
  constructor (url) {
    super(`Upload URL '${url}' has either expired or is invalid`)
  }
}

class UploadFailedError extends ExtendableError {
  constructor (status) {
    super(`HTTP status ${status} received from GCS, consider retrying`)
  }
}

class UnknownResponseError extends ExtendableError {
  constructor (res) {
    super('Unknown response received from GCS')
    this.res = res
  }
}

class MissingOptionsError extends ExtendableError {
  constructor () {
    super('Missing options for Upload')
  }
}

class UploadIncompleteError extends ExtendableError {
  constructor () {
    super('Upload is not complete')
  }
}

class InvalidChunkSizeError extends ExtendableError {
  constructor (chunkSize) {
    super(`Invalid chunk size ${chunkSize}, must be a multiple of 262144`)
  }
}

class UploadAlreadyFinishedError extends ExtendableError {
  constructor () {
    super('Upload instance has already finished')
  }
}

module.exports = {
  DifferentChunkError,
  FileAlreadyUploadedError,
  UrlNotFoundError,
  UploadFailedError,
  UnknownResponseError,
  MissingOptionsError,
  UploadIncompleteError,
  InvalidChunkSizeError,
  UploadAlreadyFinishedError
}
