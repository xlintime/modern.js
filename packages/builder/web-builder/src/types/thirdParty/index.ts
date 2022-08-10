import type WebpackChain from '@modern-js/utils/webpack-chain';
import type webpack from 'webpack';
import type { Configuration as WebpackConfig } from 'webpack';
import type TerserPlugin from 'terser-webpack-plugin';
import type CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import type ForkTSCheckerPlugin from 'fork-ts-checker-webpack-plugin';

export type { CopyPluginOptions } from './CopyWebpackPlugin';

export type TerserPluginOptions = TerserPlugin.BasePluginOptions &
  TerserPlugin.DefinedDefaultMinimizerAndOptions<TerserPlugin.TerserOptions>;

export type CssMinimizerPluginOptions = CssMinimizerPlugin.BasePluginOptions &
  CssMinimizerPlugin.DefinedDefaultMinimizerAndOptions<CssMinimizerPlugin.CssNanoOptionsExtended>;

export type { BabelConfigUtils } from '@modern-js/babel-preset-app';

export type { TransformOptions as BabelTransformOptions } from '@babel/core';

export type { Options as TSLoaderOptions } from 'ts-loader';

export type ForkTSCheck = ConstructorParameters<typeof ForkTSCheckerPlugin>[0];

export type { webpack, WebpackChain, WebpackConfig };