export class QuestionBase<T> {
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  display: boolean;
  options: {key: any, value: string}[];
  child: any[];
  prefix: string;
  postfix: string;
  id_parent: string;
  value_checkbox: boolean;

  constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      display?: boolean;
      options?: {key: any, value: string}[];
      child?: any[];
      prefix?: string;
      postfix?: string;
      id_parent?: string;
      value_checkbox?: boolean;
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.display = !!options.display;
    this.type = options.type || '';
    this.options = options.options || [];
    this.child = options.child || [];
    this.prefix = options.prefix || '';
    this.postfix = options.postfix || '';
    this.id_parent = options.id_parent || '';
    this.value_checkbox = options.value_checkbox || false;
  }
}
