<template>
  <a-layout-header class="web-header">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <a-icon :type="isCollapsed" />
    </a-button>
  </a-layout-header>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

  @Component({
    name: 'LayoutHeader',
  })
  class LayoutHeader extends Vue {
    @Prop({ default: false }) private readonly collapsed!: boolean;

    get isCollapsed() {
      return this.collapsed ? 'menu-unfold' : 'menu-fold';
    }

    @Emit('toggleCollapse')
    private toggleCollapsed() {
      return !this.collapsed;
    }
  }
  export default LayoutHeader;
</script>
