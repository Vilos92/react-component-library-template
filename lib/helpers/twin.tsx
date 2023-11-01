import { ComponentType } from "react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";
import { Global, css } from "@emotion/react";

/*
 * Constants.
 */

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

/*
 * Helpers.
 */

export function withGlobalStyles<P>(Component?: ComponentType<P>) {
  return (props: P) => (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
      {Component && <Component key="component-with-global-styles" {...props} />}
    </>
  );
}
