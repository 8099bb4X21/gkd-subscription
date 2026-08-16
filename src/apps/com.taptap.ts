import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taptap',
  name: 'TapTap',
  groups: [
    {
      key: 0,
      name: '升级弹窗-关闭',
      fastQuery: true,
      rules: {
        matches: '@[id="com.taptap.app.game:id/btn_dismiss"]',
        action: 'click',
      },
      activityIds: ['com.taptap.upgrade.library.dialog.UpgradeDialogAct'],
      snapshotUrls: ['https://i.gkd.li/i/1786753252071'],
    },
  ],
});
