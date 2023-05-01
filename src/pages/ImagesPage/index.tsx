import * as React from 'react';
import { useEffect } from 'react';
// 在 JavaScript 中使用 import 语句导入图片时，Webpack 会自动使用 file-loader 或 url-loader 处理图片，并返回图片的 URL
import ImagesUrl from '../../images/th.jpeg';
import './index.less';

const ImagesPage = () => {
  useEffect(() => {
    console.info('ImagesUrl: ', ImagesUrl);
  }, []);

  return <div className="imagesPageContainer"></div>;
};

export default ImagesPage;
