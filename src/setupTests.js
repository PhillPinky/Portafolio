   import "@testing-library/jest-dom/vitest";
window.matchMedia = window.matchMedia || ((query) => ({
  matches: false,
  media: query,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent() {},
}));