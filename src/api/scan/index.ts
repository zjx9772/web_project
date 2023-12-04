import { defHttp } from '/@/utils/http/axios';

enum Api {
  ScanList = '/scan/getDemoList',
}

export const getScanList = (params: any) => defHttp.get<any>({ url: Api.ScanList, params });
