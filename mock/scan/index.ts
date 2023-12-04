import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from '../_util';

const demoList = (() => {
  const result: any[] = [];
  for (let index = 1; index < 20; index++) {
    result.push({
      id: `${index}`,
      'SerialNum|1000000000000000-10000000000000000': 1000000000000000,
      Date: `@date('yyyy-MM-dd')`,
      Time: `@time('HH:mm')`,
      'CompareResult|1': ['OK', 'ERROR'],
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/scan/getDemoList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList);
    },
  },
] as MockMethod[];
