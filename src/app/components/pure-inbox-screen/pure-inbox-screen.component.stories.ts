import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from 'src/app/state/task.state';
import { TaskModule } from '../task.module';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [PureInboxScreenComponent],
      imports: [CommonModule, NgxsModule.forRoot([TasksState]), TaskModule],
      providers: [Store],
    }),
    withDesign,
  ],
  title: 'PureInboxScreen',
} as Meta;

const Template: Story<PureInboxScreenComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/PKABF3OEOeiC2AJJhWOJi0/Proof-of-Concept',
  },
  abstract: {
    url:
      'https://share.goabstract.com/1d0247ec-0326-4627-86f0-e76e5d543a50?collectionLayerId=d9720214-650d-434c-abf5-cba86fe707b7&mode=design',
  },
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};
