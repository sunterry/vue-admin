export default interface IPermissionRouter {
  name: string;
  path: string;
  component: string;
  componentPath: string;
  meta: {
    title: string;
    cache?: boolean;
    hidden?: boolean;
  };
  children?: IPermissionRouter[];
}
