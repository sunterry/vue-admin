import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'login',
})
class Login extends Vue {
  protected render() {
    return (
      <div>login</div>
    );
  }
}

export default Login;
