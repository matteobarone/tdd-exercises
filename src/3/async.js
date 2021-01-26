function waitAndPrint(callback) {
  setTimeout(() => {
    callback('foo');
  }, 50)
}

function waitAndPrintPromise(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bar');
    }, 50)
  })
}

module.exports = {
  waitAndPrint,
  waitAndPrintPromise
}