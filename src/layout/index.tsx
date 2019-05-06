import { Vue, Component } from 'vue-property-decorator';
import SiderMenu from './aside-menu';
import LayoutFooter from './layout-footer';
import config from '@/config';
import menuList from '@/router/config/menu/aside';
import '@/assets/styles/layout.less';

@Component({
  name: 'Layout',
  components: {
    SiderMenu,
    LayoutFooter,
  },
})
class Dashboard extends Vue {
  public BS = null;
  public menuRoutes = menuList;
  protected render() {
    return (
      <a-layout class="web-layout">
        <a-layout-header>Header</a-layout-header>
        <a-layout>
          <a-layout-sider width="240" theme="dark" class="web-sider">
            <sider-menu menuList={this.menuRoutes} />
          </a-layout-sider>
          <a-layout-content>
            layout布局
            <keep-alive>
              <router-view />
            </keep-alive>
          </a-layout-content>
        </a-layout>
        <layout-footer message={config.footerMessage} />
      </a-layout>
    );
  }
}

export default Dashboard;
