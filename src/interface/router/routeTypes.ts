export interface IRouteItem {
  name: string;
  component?: any;
  path: string;
  redirect?: string | object;
  children?: IRouteItem[];
  meta: {
    title: string;
    hidden?: boolean;
    permission?: string | string[] | boolean;
    icon?: string;
    [key: string]: any;
  };
}
