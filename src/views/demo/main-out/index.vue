<template>
  <page-wrapper
    content-full-height
    dense
    fixed-height
    content-background
    content-class="main-out-page"
  >
    <div class="page-header">
      <img src="../../../assets/images/main-out/img.png" alt="" />
    </div>
    <div class="page-content">
      <a-input-search
        v-model:value="value"
        placeholder="请输入序列号..."
        enter-button
        class="lg:w-1/4 md:w-1/3"
        @search="onSearch"
      />
      <div class="mt-8">
        <img src="../../../assets/images/main-out/bg.png" alt="" />
      </div>
    </div>
  </page-wrapper>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import PageWrapper from '@/components/Page/src/PageWrapper.vue';

  const value = ref('');
  function onSearch() {}
</script>

<style scoped lang="less">
  .main-out-page {
    display: flex;
    flex-direction: column;
    height: 100%;

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

    .page-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100% - 64px);

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 320px;
      }

      img {
        display: block;
        width: auto;
        max-height: 100%;
      }
    }
  }
</style>
