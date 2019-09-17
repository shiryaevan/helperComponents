import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Spacer } from './Spacer';
import { Aligner } from '../Aligner';

const margin = ['none', 'default', 'xxs', 'xs', 'sm', 'lg', 'xlg'];

const stories = storiesOf('Spacer', module);

stories.addDecorator(withKnobs);
stories
  .add('Spacer Bottom', () => (
    <div>
      <Spacer margin={select('margin', margin, 'default', '1')}>Margin Bottom</Spacer>
      Just Text
    </div>
  ))
  .add('Spacer Right', () => (
    <Aligner>
      <Spacer margin="none" marginRight={select('marginRight', margin, 'default')}>
        Margin Right
      </Spacer>
      Just Text
    </Aligner>
  ))
  .add('Both', () => (
    <div>
      <Aligner valign="top">
        <Spacer margin={select('margin', margin, 'default')} marginRight={select('marginRight', margin, 'default')}>
          Margin
        </Spacer>
        Just Text
      </Aligner>
      Still Just Text
    </div>
  ));
