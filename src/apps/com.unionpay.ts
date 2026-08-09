import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 0,
      name: '局部广告-申卡限时图标',
      desc: '点击申卡限时左侧图标',
      fastQuery: true,
      activityIds: ['com.unionpay.activity.react.UPActivityReactNative'],
      rules: [
        {
          key: 0,
          matches: '@ViewGroup[visibleToUser=true] + [text*="申卡限时"]',
        },
      ],
      snapshotUrls: ['https://i.gkd.li/i/1786187353911'],
    },
  ],
});
