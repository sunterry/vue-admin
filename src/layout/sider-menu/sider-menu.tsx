import { Vue, Component } from 'vue-property-decorator';
import BScroll from 'better-scroll';

@Component({
  name: 'sider-menu',
})
class SiderMenu extends Vue {
  private BS: BScroll | undefined;

  // public BS: BScroll = new BScroll(this.$el);

  public initScroll() {
    this.BS = new BScroll(this.$el, {
      mouseWheel: true,
      click: true,
      // 如果你愿意可以打开显示滚动条
      // scrollbar: {
      //   fade: true,
      //   interactive: false
      // }
    });
  }

  public scrollDestory() {
    try {
      (this.BS as BScroll).destroy();
    } catch (e) {
      delete this.BS;
      this.BS = undefined;
    }
  }

  public mounted() {
    console.log(111);
    this.initScroll();
  }

  public beforeDestroy() {
    this.scrollDestory();
  }

  protected render() {
    return (
      <div class="web-menu">
        <a-menu theme="dark" mode="inline">
          <a-menu-item key="1">
            <a-icon type="user"/>
            <span className="nav-text">nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera"/>
            <span className="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload"/>
            <span className="nav-text">nav 3</span>
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="bar-chart"/>
            <span className="nav-text">nav 4</span>
          </a-menu-item>
          <a-menu-item key="5">
            <a-icon type="cloud-o"/>
            <span className="nav-text">nav 5</span>
          </a-menu-item>
          <a-menu-item key="6">
            <a-icon type="appstore-o"/>
            <span className="nav-text">nav 6</span>
          </a-menu-item>
          <a-menu-item key="7">
            <a-icon type="team"/>
            <span className="nav-text">nav 7</span>
          </a-menu-item>
          <a-menu-item key="8">
            <a-icon type="shop"/>
            <span className="nav-text">nav 8</span>
          </a-menu-item>
        </a-menu>
      </div>
    )
  }
}
export default SiderMenu;
