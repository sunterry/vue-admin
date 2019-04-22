import { Vue, Component } from 'vue-property-decorator';
import SiderMenu from './sider-menu';
import '@/assets/styles/layout.less';

@Component({
  name: 'Layout',
  components: {
    SiderMenu,
  },
})
class Dashboard extends Vue {
  public BS = null;
  protected render() {
    return (
      <a-layout class="web-layout">
        <a-layout-header>Header</a-layout-header>
        <a-layout>
          <a-layout-sider class="web-sider">
            <sider-menu />
          </a-layout-sider>
          <a-layout-content>Content</a-layout-content>
        </a-layout>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    );
  }
}

export default Dashboard;
