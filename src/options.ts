interface Options {
  name?: string;
  version?: string;
  src?: string;
  dest?: string;
  components?: string;
  pluginType?: 'component' | 'hook' | 'directive';
  plugins?: string[];
  allPackages?: any[];
  precss?: 'less' | 'scss' | '';
  device?: 'pc' | 'mobile';
}

const options: Options = {};
export default options;

export function fetchTemplateFiles(): string[] {
  return [
    'package.json',
    'vue.config.js',
    'babel.config.js',
    '.stylelintrc.js',
    'postcss.config.js',
    'src/App.vue',
    'src/main.ts',
    'src/components/index.ts',
    'src/store/sys/log.ts',
    `src/styles/global.${options.precss}`,
    `src/styles/mixins.${options.precss}`,
    `src/styles/variable.${options.precss}`,
  ]
}
