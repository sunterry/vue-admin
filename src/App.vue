<template>
  <a-locale-provider :locale="zhCN">
    <router-view />
  </a-locale-provider>
</template>

<script lang="ts">
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
  name: 'App',
  data() {
    return {
      zhCN: zh_CN,
    };
  },
};
</script>
