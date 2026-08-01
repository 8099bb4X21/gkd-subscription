import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: 'VIP会员开通弹窗-关闭',
      rules: {
        matches:
          '@ViewGroup[clickable=true] <n ViewGroup > ViewGroup > [text*="首VIP歌曲，开通VIP"]',
      },
      activityIds: [
        'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
      ],
      snapshotUrls: ['https://i.gkd.li/i/1785504624547'],
    },
  ],
});
