import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MyButton } from '@h4h/app-shell';


const meta = {
  component: MyButton,
} satisfies Meta<typeof MyButton>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Example = {
  args: {
    label: 'Button',
  },
} satisfies Story;

 
// const meta: Meta<typeof MyButton> = {
//   component: MyButton,
// };
 
// export default meta;
// type Story = StoryObj<typeof MyButton>;
 
// //👇 Throws a type error if the args don't match the component props
// export const Primary: Story = {
//   args: {
//     label: "true",
//   },
// };