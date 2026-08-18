import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '游戏推广卡片-关闭',
      fastQuery: true,
      rules: {
        matches:
          '@View[clickable=true][width<=101][height<=101][top<500] +n [clickable=true] > [id="m.l.live.plugin:id/download_component_bg"]',
        action: 'click',
      },
      activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
      snapshotUrls: ['https://i.gkd.li/i/1786616809712'],
    },
  ],
});
