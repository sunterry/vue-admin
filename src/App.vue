<template>
  <a-locale-provider :locale="zhCN">
    <router-view />
  </a-locale-provider>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'ant-design-vue';

@Component({
  name: 'App',
})
class App extends Vue {
  public zhCN: LocaleProvider = zh_CN;
}

export default App;
</script>
