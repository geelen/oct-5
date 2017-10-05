import { observable } from 'mobx'

const MY_AVATAR = 'https://fillmurray.com/80/80'
let BILL_MURRAY = 'https://fillmurray.com/96/96'

const store = observable({
  messages: [
    {
      avatarUrl: BILL_MURRAY,
      lines: [
        'A couple of lines.',
        'Of text'
      ]
    }
  ],
  messageEl: null
})

export const handleNewMessage = (newMessage) => {
  store.messages = store.messages.concat({
    avatarUrl: MY_AVATAR,
    lines: [
      newMessage
    ]
  })

  requestAnimationFrame(() => {
    if (store.messageEl) store.messageEl.scrollTop = 100000
  })
}

export const messageElementCallback = el => {
  store.messageEl = el
}

export default store
