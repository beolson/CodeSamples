import React from 'react';

declare const add: (a: number, b: number) => number;

interface MyButtonProps {
    label: string;
}
declare const MyButton: (props: MyButtonProps) => React.JSX.Element;

declare function ExampleDialog(): React.JSX.Element;

declare function ExampleDialogTwo(): React.JSX.Element;

export { ExampleDialog, ExampleDialogTwo, MyButton, add };
