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

export const addCurrentMessageToStore = (newMessage) => {
  const mostRecent = store.messages[store.messages.length - 1]

  if (mostRecent && mostRecent.avatarUrl === MY_AVATAR) {
    mostRecent.lines.push(newMessage)
  } else {
    store.messages.push({
      avatarUrl: MY_AVATAR,
      lines: [
        newMessage
      ]
    })
  }

  requestAnimationFrame(() => {
    if (store.messageEl) store.messageEl.scrollTop = 100000
  })
}

export default store
