import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import {BuildEnv, BuildPaths} from './config/build/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

export default (env: BuildEnv) => {
    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config

}