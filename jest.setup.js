const process = require('process')

process.on('unhandledRejection', reason => console.log(reason.stack || reason))


global.addEventListener = jest.fn(global.addEventListener)

const location = new URL('https://localhost:1337/')

Object.defineProperty(global, 'location', {
  get: jest.fn(() => location),
  configurable: true
})

global.open = jest.fn((url = 'about:blank') => ({
  closed: false,
  close: jest.fn(function () { this.closed = true }),
  location: new URL(url)
}))
