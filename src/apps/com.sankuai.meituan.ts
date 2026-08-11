import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '收银台-支付结果操作',
      activityIds: ['com.meituan.android.hybridcashier.HybridCashierActivity'],
      rules: [
        {
          key: 0,
          name: '点击横幅提示',
          matches:
            '@Image[clickable=true] <2 * < * > * > [text$="即可完成"][name="android.widget.Button"]',
        },
        {
          key: 1,
          name: '完成',
          matches:
            '[vid="mil_container"] @[text="完成"][name="android.widget.Button"]',
        },
        {
          key: 2,
          name: '直接退出',
          matches:
            '[vid="mil_container"] @[text="直接退出"][name="android.widget.TextView"]',
        },
      ],
    },
    {
      key: 2,
      name: '外卖平台-完成',
      fastQuery: true,
      rules: {
        matches:
          '@[text="完成"][name="android.widget.TextView"][clickable=true]',
      },
      activityIds: [
        'com.sankuai.waimai.platform.machpro.container.WMMPActivity',
      ],
      snapshotUrls: ['https://i.gkd.li/i/1785668346548'],
    },
    {
      key: 3,
      name: '骑行订单-关闭先骑后付提示',
      rules: {
        matches:
          '[text*="开通先骑后付"] +n @[name="android.view.View"] +n [id="payBottomPanel"] >n [text="开通并支付"]',
      },
      activityIds: ['com.meituan.msc.modules.container.MSCActivity'],
      snapshotUrls: ['https://i.gkd.li/i/1786403684430'],
    },
  ],
});
