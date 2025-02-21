import React from 'react';

interface MyButtonProps {
  label: string
}
export const MyButton = (props: MyButtonProps) => {
  return <div>one {props.label}</div>;
};
