import React, { useState } from 'react';

interface MyButtonProps {
  label: string;
}
export const MyButton = (props: MyButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <button
      data-testid="count-button"
      className="text-3xl font-bold underline"
      onClick={() => setCount((c) => c + 1)}
    >
      Count {count} {props.label}
    </button>
  );
};
