import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@layouts/App';
import SWRDevtools from '@jjordy/swr-devtools';
import { cache, mutate } from 'swr';

render(
  <BrowserRouter>
    <>
      {process.env.NODE_ENV === 'production' ? null : <SWRDevtools cache={cache} mutate={mutate} />}
      <App />
    </>
  </BrowserRouter>,
  document.querySelector('#app'),
);

// 폴더구조
// pages - 서비스 페이지
// components - 짜잘 컴포넌트
// layouts - 공통 레이아웃
