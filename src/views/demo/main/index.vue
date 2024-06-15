<template>
  <page-wrapper
    content-full-height
    dense
    fixed-height
    content-background
    content-class="main-out-page"
  >
    <div class="page-header">
      <img
        @click="goHome"
        class="cursor-pointer hover:bg-[rgba(0,0,0,0.02)]"
        src="../../../assets/images/main-out/logo.svg"
        alt=""
      />
      <Icon
        @click="goToSearchPage"
        :size="20"
        :icon="'ant-design:unordered-list-outlined'"
        class="cursor-pointer"
      />
    </div>
    <div class="page-content">
      <a-input-search
        v-model:value="searchValue"
        placeholder="请输入序列号..."
        enter-button
        @search="onSearch"
        style="width: 360px"
      />
      <div class="mt-8">
        <!--        <img :src="imgPath" alt="" />-->
        <AImage :width="200" :src="imgPath" :fallback="fallback" />
      </div>
    </div>
  </page-wrapper>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { PageWrapper } from '@/components/Page';
  import Icon from '@/components/Icon/Icon.vue';
  import { router } from '@/router';
  import { getImageApi } from '@/api/scan';

  // import { useGlobSetting } from '@/hooks/setting';
  import { Image as AImage } from 'ant-design-vue';
  import { fallback } from '@/views/demo/search/data';

  // const globSetting = useGlobSetting();

  const searchValue = ref('');
  const imgPath = ref('');
  async function onSearch() {
    // const basicUrl = globSetting.apiUrl;
    const res = await getImageApi({ SeriainNumber: searchValue.value });
    imgPath.value = res.Base64;
    // imgPath.value = basicUrl + '/' + res.imgPath;
  }

  function goHome() {
    router.push('/main');
  }

  function goToSearchPage() {
    router.push('/search');
  }
</script>

<style scoped lang="less">
  .main-out-page {
    display: flex;
    flex-direction: column;
    height: 100%;

    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
