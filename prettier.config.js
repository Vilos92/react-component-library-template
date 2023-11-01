import trivago from '@trivago/prettier-plugin-sort-imports';

export default {
  arrowParens: 'avoid',
  bracketSpacing: false,
  printWidth: 110,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [trivago, 'prettier-plugin-tailwindcss']
};
