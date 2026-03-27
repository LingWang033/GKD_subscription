import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
    {
      key: 0,
      name: '开屏广告-自动下载版本更新',
      desc: '强制更新否则不让玩(本质和开屏广告性质一样)',
      matchTime: 16000,
      actionMaximum: 2,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
      rules: [
        {
          key: 0,
          name: '点击[立即更新]',
          matches:
            '[vid="mUpgradeTitle"][visibleToUser=true] +3 LinearLayout > [vid="mUpgradeDialogOK"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26311879',
          exampleUrls: 'https://e.gkd.li/eda9555c-565a-4c75-844d-3529d552e203',
        },
        {
          preKeys: [0],
          name: '点击[开始安装]',
          matches:
            'ViewGroup[childCount=3] > [vid="mDescription"][visibleToUser=true] + [vid="mBtnConfirm"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26311880',
          exampleUrls: 'https://e.gkd.li/752b4fcb-f86a-4a69-b29b-17eaa7c62763',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动点击[使用流量进行游戏]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches: '[text="使用流量进行游戏"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f33b53ea-32a2-48b3-a4a8-54bfa8b1fdd8',
          snapshotUrls: 'https://i.gkd.li/i/14784161',
        },
      ],
    },
  ],
});
