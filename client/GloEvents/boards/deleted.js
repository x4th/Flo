module.exports = ({
  board,
  sender
}, i18next) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.boards.deleted.title', { board, sender })
      }
    }
  ]
});
