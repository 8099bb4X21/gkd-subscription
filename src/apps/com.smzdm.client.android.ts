import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
    {
      key: 0,
      name: '内容卡片-关闭',
      fastQuery: true,
      rules: {
        matches: '@[vid="iv_content_cancel"]',
      },
      activityIds: ['com.smzdm.client.android.app.HomeActivity'],
      snapshotUrls: ['https://i.gkd.li/i/1785592872322'],
    },
    {
      key: 1,
      name: '首页Tab-未选生活时点击',
      fastQuery: true,
      actionMaximum: 1,
      rules: {
        matches: '@[vid="tv_tab_lbs"][checked=false]',
      },
      activityIds: ['com.smzdm.client.android.app.HomeActivity'],
      snapshotUrls: ['https://i.gkd.li/i/1785650392005'],
    },
    {
      key: 2,
      name: '生活频道-点美团外卖卡片',
      fastQuery: true,
      actionMaximum: 1,
      rules: {
        matches:
          '[text="生活"][checked=true] <n [vid="cl_tab"] +n [vid="cl_root"] >n @ViewGroup[vid="layout_super_business"][clickable=true] > [vid="tv_title"][text="美团外卖"]',
      },
      activityIds: ['com.smzdm.client.android.app.HomeActivity'],
      snapshotUrls: ['https://i.gkd.li/i/1785592880229'],
    },
  ],
});
