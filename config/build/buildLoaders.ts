import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config';


export function buildLoaders({isDev}: BuildOptions) {

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            // настройка ипорта scss без нее undefined
                            namedExport: false,
                            // настройка чтобы генерить только модульные файлы а обычные осталять классы как есть если эту настройку не задать и
                            // глобально использовать обычные стили будет происходить генерация файла и стили не подключатся
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            // настройка именования классов в дев будет 'src-components-Counter-module__btn--WJfas'(путь до компоеннта) для читабельности, а в прод будет 'WJfas66Y'
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]'
                        },
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}