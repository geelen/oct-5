import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import '../index.css'
import ChatEntry from '../components/ChatEntry'
import { BILL_MURRAY } from '../store'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('ChatEntry', module)
  .add('With a single line', () => (
    <ChatEntry
      entry={
        {
          avatarUrl: BILL_MURRAY,
          lines: ['A couple of lines.',]
        }
      }
    />
  ))
  .add('With three lines', () => (
    <ChatEntry
      entry={
        {
          avatarUrl: BILL_MURRAY,
          lines: [
            'A couple of lines.',
            'Of text.',
            'And a third.'
          ]
        }
      }
    />
  ))
