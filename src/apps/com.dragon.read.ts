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
          matches: "[text*='即刻联网']",
          position: {
            left: 'width/2',
            top: 'height + 100',
          },
        },
      ],
      snapshotUrls: ['https://i.gkd.li/i/1786967226174'],
    },
  ],
});
