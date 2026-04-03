import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.whxinna.userplatform',
  name: '住理生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26462136',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@[text=null][clickable=true][width<500][height<200] - * >2 [text*="广告"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26332230',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@View[id=null][text=null][clickable=true][width<200 && height<200] - * >11 [text^="立即"]',
          snapshotUrls: 'https://i.gkd.li/i/26462322',
        },
      ],
    },
    {
      key: 1,
      name: '通知提示-公告',
      rules: [
        {
          activityIds: 'com.whxinna.webview.WebViewActivity',
          matches:
            '@Button[clickable=true][width<150 && height<150] - * >3 [text="温馨提示"]',
          snapshotUrls: 'https://i.gkd.li/i/26308642',
        },
      ],
    },
  ],
});
