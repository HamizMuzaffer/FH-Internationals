declare module 'html2pdf.js' {
    export default function html2pdf(): {
      from: (element: any) => {
        set: (options: any) => {
          save: (filename?: string) => Promise<void>;
        };
      };
    };
  }