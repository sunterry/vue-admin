<template>
  <a-layout-header class="web-header">
    <layout-logo />
    <div class="web-header-content">
      <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
        <a-icon :type="isCollapsed" />
      </a-button>
      <div class="web-header-menu">
        <a-menu
          v-model="current"
          mode="horizontal"
        >
          <a-menu-item key="mail">
            <a-icon type="mail" />Navigation One
          </a-menu-item>
          <a-menu-item key="app" disabled>
            <a-icon type="appstore" />Navigation Two
          </a-menu-item>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"><a-icon type="setting" />Navigation Three - Submenu</span>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1">Option 1</a-menu-item>
              <a-menu-item key="setting:2">Option 2</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="Item 2">
              <a-menu-item key="setting:3">Option 3</a-menu-item>
              <a-menu-item key="setting:4">Option 4</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import LayoutLogo from '../layout-logo';

@Component({
  name: 'LayoutHeader',
  components: {
    LayoutLogo,
  },
})
class LayoutHeader extends Vue {

  get isCollapsed() {
    return this.collapsed ? 'menu-unfold' : 'menu-fold';
  }
  public current: string[] = ['mail'];
  @Prop({ default: false }) private readonly collapsed!: boolean;

  @Emit('toggleCollapse')
  private toggleCollapsed() {
    return !this.collapsed;
  }
}
export default LayoutHeader;
</script>
