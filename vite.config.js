import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// If your GitHub repository is at https://github.com/bvedantp/your-repo-name
// Your `base` should be '/your-repo-name/'
const repoName = 'wozoo';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
    ViteImageOptimizer({
      // Apply the configuration for each image format
      svg: {
        // SVGO options
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        // Options for Sharp
        quality: 80, // Lower the quality to reduce file size
      },
      jpeg: {
        // Options for Sharp
        quality: 80, // Lower the quality for JPEG files
      },
      gif: {
        // Options for gifsicle or Sharp
        // For gifsicle (if using gifsicle through Sharp or another plugin)
        optimizationLevel: 3, // Level of optimization (1-3)
        // Note: GIFs do not support lossless compression settings in Sharp
      },
      // Add more configurations for other file types if needed
    }),
  ],
});