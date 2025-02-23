
declare module 'latex.js' {
  interface LatexDocument {
    html(): string;
  }

  function parse(input: string): LatexDocument;

  export { parse };
}