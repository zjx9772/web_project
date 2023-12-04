<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex flex-col">
    <div class="page-header">
      <img src="../../../assets/images/main-out/logo.svg" alt="" />
    </div>
    <BasicTable @register="registerTable" class="w-full" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">Excel Export</a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';

  import { BasicTable, useTable } from '@/components/Table';
  import { getScanList } from '@/api/scan';
  import { PageWrapper } from '@/components/Page';

  import { columns, searchFormSchema } from './data';

  defineOptions({ name: 'AccountManagement' });
  const searchInfo = reactive<Recordable>({});
  const [registerTable] = useTable({
    title: 'QUERY RESULTS',
    api: getScanList,
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

  function handleCreate() {
    console.log('导出');
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
