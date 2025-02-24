import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.ts'],

  format: ['esm'],
  dts: true,
  bundle: true,
  outDir: 'lib',
  clean: true,
  onSuccess: async () => {
    //console.log('Building CSS');
  },
});
