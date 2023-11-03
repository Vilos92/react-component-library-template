import {Button as ButtonCmp} from './components/Button';
import {withBaseStyles} from './helpers/twin';

export function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}

const Button = withBaseStyles(ButtonCmp);
export {Button};
