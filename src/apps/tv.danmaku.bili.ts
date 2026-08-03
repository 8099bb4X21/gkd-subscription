import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '局部广告-直播间悬浮窗广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: ['com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3'],
      rules: [
        {
          key: 0,
          matches: [
            '[vid="shopping_close" || vid="live_game_card_close" || vid="match_close" || vid="iv_pop_rank_guide_card_close" || vid="card_close"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13200549',
            'https://i.gkd.li/i/22990081',
            'https://i.gkd.li/i/23098023',
            'https://i.gkd.li/i/25238734',
            'https://i.gkd.li/i/25569011',
          ],
        },
        {
          key: 1,
          matches: [
            '@[vid="close" || vid="iv_close"] - [vid="up_avatar" || vid="gift_icon" || vid="follow_container"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14782965',
            'https://i.gkd.li/i/18046573',
            'https://i.gkd.li/i/22990105',
          ],
        },
        {
          key: 2,
          matches: [
            '@[clickable=true][visibleToUser=true] < [vid="pager"] < FrameLayout[index=parent.childCount.minus(1)] <(2,3,4) [vid="vertical_container"]',
          ],
          actionMaximum: 1,
          matchTime: 10000,
          snapshotUrls: [
            'https://i.gkd.li/i/24985920',
            'https://i.gkd.li/i/25240029',
            'https://i.gkd.li/i/25369451',
            'https://i.gkd.li/i/25569011',
          ],
        },
      ],
    },
  ],
});
