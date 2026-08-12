import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: 'VIP会员开通弹窗-关闭',
      fastQuery: true,
      rules: {
        matches:
          '@ViewGroup[clickable=true] <n ViewGroup > ViewGroup > [text*="首VIP歌曲，开通VIP"]',
      },
      activityIds: [
        'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
      ],
      snapshotUrls: ['https://i.gkd.li/i/1785504624547'],
    },
    {
      key: 1,
      name: '听有声书即可领取弹窗-关闭',
      fastQuery: true,
      rules: {
        matches: '@ImageView[clickable=true] - [text*="即可领取"]',
      },
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      snapshotUrls: ['https://i.gkd.li/i/1786288126314'],
    },
    {
      key: 2,
      name: '升级弹窗-关闭',
      fastQuery: true,
      rules: {
        matches: '@[id="com.netease.cloudmusic:id/md_dialog_cm_close_btn"]',
      },
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      snapshotUrls: ['https://i.gkd.li/i/1786288092356'],
    },
    {
      key: 3,
      name: '支付方式选择-返回',
      fastQuery: true,
      rules: {
        matches: '[text="微信支付"]',
        action: 'back',
        actionDelay: 500,
      },
      activityIds: [
        'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
      ],
      snapshotUrls: ['https://i.gkd.li/i/1786449283842'],
    },
  ],
});
