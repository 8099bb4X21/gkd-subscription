import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1679135103,
  name: '8099bb4X21的GKD订阅',
  version: 0,
  author: '8099bb4X21',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/8099bb4X21/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
