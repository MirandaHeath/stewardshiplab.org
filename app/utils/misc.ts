export function debounceLeading(func: Function, timeout = 300) {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: any[]) => {
    if (!timer) {
      func(...args);
    }
    clearTimeout(timer as ReturnType<typeof setTimeout>);
    timer = setTimeout(() => {
      timer = null;
    }, timeout);
  };
}
