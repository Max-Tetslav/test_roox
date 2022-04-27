import path from "path";
import { CleanPlugin, Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const devServer = (isDev: string) => !isDev ? {} : {
	devServer: {
		open: true,
		hot: true,
		port: 8080,
	}
};

const webpackConfig = ({mode}: {mode: string}): Configuration => ({
  entry: "./src/index.tsx",

  ...(mode === 'development' ? {devtool: "eval-source-map"} : {}),
  
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "build[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:mp3|wav|ogg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /build/,
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({ filename: 'style.[chunkhash].css' }),
    new DefinePlugin({
      "process.env": process.env.production || !process.env.development,
    }),
    new CleanPlugin(),
  ],
});

export default webpackConfig;