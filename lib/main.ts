export function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}

import { Button as ButtonCmp } from "./components/Button";
import { withGlobalStyles } from "./helpers/twin";

const Button = withGlobalStyles(ButtonCmp);
export { Button };
