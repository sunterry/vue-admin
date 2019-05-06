import { Vue, Component } from 'vue-property-decorator';
import SiderMenu from './aside-menu';
import LayoutHeader from './layout-header';
import LayoutFooter from './layout-footer';
import config from '@/config';
import menuList from '@/router/config/menu/aside';
import '@/assets/styles/layout.less';
import { IRouteItem } from '@/interface/routes';

@Component({
  name: 'Layout',
  components: {
    LayoutHeader,
    SiderMenu,
    LayoutFooter,
  },
})
class Dashboard extends Vue {
  public BS = null;
  public menuRoutes: IRouteItem[] = menuList;
  public collapsed: boolean = false;
  protected render() {
    return (
      <a-layout class="web-layout">
        <layout-header
          collapsed={ this.collapsed }
          onToggleCollapse = { this.toggleCollapse }
        />
        <a-layout>
          <a-layout-sider
            trigger={ null }
            collapsible
            collapsed={ this.collapsed }
            theme="dark"
            class="web-sider">
            <sider-menu
              collapsed={ this.collapsed }
              menuList={this.menuRoutes}
            />
          </a-layout-sider>
          <a-layout-content>
            <keep-alive>
              <router-view />
            </keep-alive>
          </a-layout-content>
        </a-layout>
        <layout-footer message={config.footerMessage} />
      </a-layout>
    );
  }
  protected toggleCollapse(val: boolean) {
    console.log(val);
    this.collapsed = val;
  }
}

export default Dashboard;
