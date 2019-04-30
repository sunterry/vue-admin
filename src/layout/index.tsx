import { Vue, Component } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import SiderMenu from './sider-menu';
import LayoutFooter from './layout-footer';
import config from '@/config';
import '@/assets/styles/layout.less';
import { IRouteItem } from '@/interface/router/routeTypes';

const routeModule = namespace('routers');
@Component({
  name: 'Layout',
  components: {
    SiderMenu,
    LayoutFooter,
  },
})
class Dashboard extends Vue {
  public BS = null;
  @routeModule.Action private concatRoute!: (rules: string | boolean | string[]) => Promise<IRouteItem[]>;
  @routeModule.Getter private menuRoutes!: IRouteItem[];
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
