import React from 'react';
import Button, { BaseButton, SecondaryButton } from '.';

export default {
  title: 'Button',
};

export const Default = () => <Button>Primary</Button>;

export const Base = () => <BaseButton>Base</BaseButton>;

export const Secondary = () => <SecondaryButton fill="126px">Base</SecondaryButton>;
