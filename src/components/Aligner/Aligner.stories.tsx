// tslint:disable:jsx-use-translation-function
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import { Aligner } from '.';
import { Spacer } from '../Spacer';

const stories = storiesOf('Aligner', module);

const valing = ['center', 'top', 'bottom', 'baseline'];

stories.addDecorator(withKnobs);
stories
  .add('Two columns', () => (
    // @ts-ignore
    <Aligner valign={select('valing', valing, 'center')}>
      <Aligner.Left>
        Left
        <br /> Content
      </Aligner.Left>
      <Aligner.Right>Right Content</Aligner.Right>
    </Aligner>
  ))
  .add('Other', () => (
    // @ts-ignore
    <Aligner valign={select('valing', valing, 'top')}>
      <Spacer marginRight="default">
        <div>
          Texty <br /> text
        </div>
      </Spacer>
      <div>Example with alignment of other elements</div>
    </Aligner>
  ))
  .add('Centering Element', () => (
    <Aligner>
      <Aligner.Center>Text On Center</Aligner.Center>
    </Aligner>
  ));
