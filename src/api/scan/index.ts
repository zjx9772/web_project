import { defHttp } from '/@/utils/http/axios';

enum Api {
  // ScanList = '/scan/getDemoList',
  ScanList = '/scan/GetHistoryList',
  GetImage = '/scan/GetImage',
}

// 分页列表
export const getScanListApi = (params: any) => defHttp.post<any>({ url: Api.ScanList, params });

// 获取图片
export const getImageApi = (params: any) => defHttp.post<any>({ url: Api.GetImage, params });
