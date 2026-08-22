import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '阅读页-点击即刻联网横幅下方',
      fastQuery: true,
      activityIds: ['com.dragon.read.reader.ui.ReaderActivity'],
      rules: [
        {
          matches: "[text*='即刻联网'][visibleToUser=true]",
          actionCd: 20000,
          position: {
            x: 'screenWidth * 4 / 5',
            top: 'height + 100',
          },
        },
      ],
      snapshotUrls: ['https://i.gkd.li/i/1786967226174'],
    },
    {
      key: 1,
      name: '阅读页-我要参与广告关闭',
      fastQuery: true,
      rules: {
        matches:
          '@[name="android.widget.ImageView"][width<100][height<100][visibleToUser=true] <n * >(3) [text="我要参与" || text="立即前往"]',
        actionCd: 120000,
      },
      activityIds: ['com.dragon.read.reader.ui.ReaderActivity'],
      snapshotUrls: ['https://i.gkd.li/i/1787187806280'],
    },
  ],
});
