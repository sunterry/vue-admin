<template>
  <a-layout-footer class="web-footer">
    {{message}}
  </a-layout-footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'LayoutFooter',
})
class LayoutFooter extends Vue {
  @Prop() private message!: string;
}
export default LayoutFooter;
</script>
