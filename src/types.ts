export type ComponentUsageExample = {
    title: string;
    code: string;
  };
  
  export type ComponentProp = {
    name: string;
    description: string;
    type: string;
    required: boolean;
    defaultValue?: string;
  };
  
  export type Component = {
    id: string;
    name: string;
    description: string;
    category: string;
    usageExamples?: ComponentUsageExample[];
    props?: ComponentProp[];
  };
  
