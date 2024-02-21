<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex flex-col">
    <div class="page-header">
      <img src="../../../assets/images/main-out/logo.svg" alt="" />
    </div>
    <BasicTable @register="registerTable" class="w-full" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'SerialNum'">
          <a @click="openImage(record)">{{ record.SerialNum }}</a>
        </template>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">Excel Export</a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';

  import { BasicTable, useTable } from '@/components/Table';
  import { getImageApi, getScanListApi } from '@/api/scan';
  import { PageWrapper } from '@/components/Page';

  import { columns, searchFormSchema } from './data';
  import { useGlobSetting } from '@/hooks/setting';
  import { jsonToSheetXlsx } from '@/components/Excel';

  const globSetting = useGlobSetting();

  const searchInfo = reactive<Recordable>({});
  const [registerTable, { getForm }] = useTable({
    title: 'QUERY RESULTS',
    api: getScanListApi,
    rowKey: 'id',
    columns,
    showIndexColumn: false,
    formConfig: {
      labelWidth: 80,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true,
      submitButtonOptions: {
        text: 'Submit',
      },
      resetButtonOptions: {
        text: 'Reset',
      },
    },
    useSearchForm: true,
    bordered: true,
    handleSearchInfoFn(info) {
      console.log('handleSearchInfoFn', info);
      return info;
    },
  });

  async function handleCreate() {
    const form = getForm();
    const values = form.getFieldsValue();
    const res = await getScanListApi(values);
    jsonToSheetXlsx({
      data: res.items,
      header: {
        id: 'No',
        SerialNum: 'SerialNum',
        Date: 'Date',
        Time: 'Time',
        CompareResult: 'Compare_Result',
      },
      filename: 'export.xlsx',
      json2sheetOpts: {
        // 指定顺序
        header: ['id', 'SerialNum', 'Date', 'Time', 'CompareResult'],
      },
    });
  }

  async function openImage(record) {
    const basicUrl = globSetting.apiUrl;
    const res = await getImageApi({ SeriainNumber: record.SerialNum });
    window.open(basicUrl + '/' + res.imgPath);
  }
</script>
<style scoped lang="less">
  .page-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 64px;
    padding: 0 16px;

    img {
      display: block;
      width: auto;
      height: 64px;
    }
  }
</style>
