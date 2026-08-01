import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '直播-游戏卡片-关闭',
      fastQuery: true,
      rules: {
        matches: '[vid="live_game_card_close"]',
      },
      activityIds: ['com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3'],
    },
  ],
});
