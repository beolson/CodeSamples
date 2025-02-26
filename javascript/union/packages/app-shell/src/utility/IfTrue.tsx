import React from 'react';

interface IfTrueProps {
  children: React.JSX.Element;
  expression: boolean | (() => boolean);
}

const IfTrue = (props: IfTrueProps) => {
  const passes =
    typeof props.expression === 'boolean'
      ? props.expression
      : props.expression();

  return <>{passes && props.children}</>;
};

export { IfTrue };
