import { defineConfig } from 'umi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import CONFIG from './config';

export default defineConfig({
    dynamicImport: {
        loading: '@/components/Loading/GlobalLoading',
    },
    chunks: ['basic', 'vendors.umi', 'umi'],
    chainWebpack: (config, { webpack }) => {
        config.merge({
            optimization: {
                splitChunks: {
                    chunks: 'all',
                    minSize: 30000,
                    maxSize: 0,
                    name: true,
                    minChunks: 1,
                    maxAsyncRequests: 10,
                    maxInitialRequests: 5,
                    automaticNameDelimiter: '.',
                    cacheGroups: {
                        basic: {
                            name: 'basic',
                            test({ resource }) {
                                return /(@antd|antd|@ant-design|react)/.test(
                                    resource,
                                );
                            },
                            priority: 100,
                        },
                        monacoEditor: {
                            name: true,
                            test({ resource }) {
                                return /monaco/.test(resource);
                            },
                            priority: 99,
                        },
                    },
                },
            },
        });
        //更多配置 https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        config.plugin('monaco-editor-webpack-plugin').use(MonacoWebpackPlugin, [
            // 按需配置
            {
                languages: CONFIG.monacoEditorSupportedLanguages,
                publicPath: CONFIG.publicPath,
            },
        ]);
        return config;
    },
    title: CONFIG.title,
    nodeModulesTransform: {
        type: 'none',
    },
    analytics: CONFIG.analytics,
    hash: true,
    routes: [
        { path: '/', component: '@/pages/index', exact: true },
        { path: '/code', component: '@/pages/code', exact: true },
        // { path: '/diff', component: '@/pages/diff', exact: true }
    ],
    publicPath: CONFIG.publicPath,
});
