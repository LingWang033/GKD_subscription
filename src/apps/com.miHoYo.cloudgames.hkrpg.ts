import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
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
    {
      key: 2,
      name: '全屏广告-自动更新游戏', // 我知道这是错误归类，这软件就是必须强制最新版，不然玩不了...
      desc: '开屏弹窗更新自动确定',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches:
            '[vid="mUpgradeDialogOK"][text="立即更新"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25571790',
        },
      ],
    },
  ],
});
