const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path")

module.exports = (env) => {
  const envFile = env.ENV_FILE !== undefined ? `.${env.ENV_FILE}` : ""

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.[fullhash].js",
      publicPath: "/",
    },
    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "assets/[name].css",
      }),
      new Dotenv({
        path: `./.env${envFile}`,
        systemvars: true,
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: "./src/assets", to: "assets" }],
      }),
    ],
    resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@roducks": "src/libs/roducks/components",
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.html$/,
          use: ["html-loader"],
        },
        {
          test: /\.(s*)css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                url: false,
              },
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: "asset/resource",
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
            },
            {
              loader: "image-webpack-loader",
              options: {
                disable: true, // disable optimization on development
                mozjpg: {
                  progressive: true,
                  quality: 80,
                },
                optipng: {
                  optimizationLevel: 7,
                },
                gifsicle: {
                  interlaced: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                svgo: {
                  plugins: [
                    {
                      removeViewBox: false,
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    devServer: {
      static: path.join(__dirname, "dist"),
      compress: true,
      port: 3005,
      historyApiFallback: true,
      open: true,
    },
  }
}
