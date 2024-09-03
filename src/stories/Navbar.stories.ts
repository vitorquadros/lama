import Navbar from '../components/Navbar/Navbar';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Navbar>;

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Navbar/Navbar'
};

export default meta;

// export default {
//   title: 'Navbar/Navbar',
//   component: Navbar,

//   parameters: {
//     layout: 'centered'
//   }
// }

export const LoggedIn: Story = {
  args: {
    primary: true,
    label: 'Navbar'
  }
};

export const LoggedOff: Story = {
  args: {
    primary: true,
    label: 'Navbar'
  }
};
