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
      name: '首页Tab-自动切生活+点美团外卖卡片',
      fastQuery: true,
      matchTime: 300000,
      activityIds: ['com.smzdm.client.android.app.HomeActivity'],
      snapshotUrls: [
        'https://i.gkd.li/i/1785650392005',
        'https://i.gkd.li/i/1785592880229',
      ],
      rules: [
        {
          key: 0,
          name: '未选生活时点击',
          actionMaximum: 1,
          resetMatch: 'app',
          matches: '@[vid="tv_tab_lbs"][checked=false]',
        },
        {
          key: 1,
          name: '生活频道-点美团外卖卡片',
          preKeys: [0],
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '[text="生活"][checked=true] <n [vid="cl_tab"] +n [vid="cl_root"] >n @ViewGroup[vid="layout_super_business"][clickable=true] > [vid="tv_title"][text="美团外卖"]',
        },
      ],
    },
  ],
});
