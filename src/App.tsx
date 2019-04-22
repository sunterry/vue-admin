import { Component, Vue } from 'vue-property-decorator';
import { LocaleProvider } from 'ant-design-vue';
// @ts-ignore
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';


@Component({
  name: 'App',
  components: {
    'a-locale-provider': LocaleProvider,
  },
})
class App extends Vue {
  protected render() {
    return (
      <div id="app">
        <a-locale-provider locale={ zh_CN }>
          <router-view />
        </a-locale-provider>
      </div>
    );
  }
}

export default App;
