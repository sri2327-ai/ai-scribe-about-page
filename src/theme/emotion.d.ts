
import '@emotion/react';
import { Theme as MUITheme } from '@mui/material/styles';

declare module '@emotion/react' {
  export interface Theme extends MUITheme {}
}

// Add explicit module declarations for emotion cache
declare module '@emotion/cache' {
  interface Options {
    key: string;
    stylisPlugins?: any[];
    [key: string]: any;
  }
  export default function createCache(options: Options): any;
}
