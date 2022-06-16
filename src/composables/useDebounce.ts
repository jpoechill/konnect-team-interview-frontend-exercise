function createDebounce() {
  let timeout: any = null;
  return function (fnc: Function, delayMs: number) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs || 800);
  };
}


export default createDebounce