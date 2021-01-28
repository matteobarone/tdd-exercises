export function waitAndPrint(callback: (value: string) => void) {
  setTimeout(() => {
    callback('foo');
  }, 50);
}

export function waitAndPrintPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('bar');
    }, 50);
  });
}
