import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import '../index.css'
import ChatEntry from '../components/ChatEntry'
import { BILL_MURRAY } from '../store'

const Box = styled.div`
  border: 2px dotted hsla(0, 100%, 50%, 0.5);
`

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('ChatEntry', module)
  .add('With a single line', () => (
    <Box>
      <ChatEntry
        entry={
          {
            avatarUrl: BILL_MURRAY,
            lines: ['A couple of lines.',]
          }
        }
      />
    </Box>
  ))
  .add('With three lines', () => (
    <Box>
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
    </Box>
  ))
  .add('With a sick photo included', () => (
    <Box>
      <ChatEntry
        entry={
          {
            avatarUrl: BILL_MURRAY,
            lines: [
              'A couple of lines.',
              'Of text.',
              'And a third.',
              'Check out this photo: http://source.unsplash.com/random?ocean isn\'t it cool!?',
            ]
          }
        }
      />
    </Box>
  ))
  .add('With a sick photo half way down tho', () => (
    <Box>
      <ChatEntry
        entry={
          {
            avatarUrl: BILL_MURRAY,
            lines: [
              'A couple of lines.',
              'Check out this photo: http://source.unsplash.com/random?dog isn\'t it cool!?',
              'Of text.',
              'And a third.',
            ]
          }
        }
      />
    </Box>
  ))
