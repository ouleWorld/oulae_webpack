import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.less';
import { routesList } from './routes';

// 布局组件
const Layout = () => {
  return (
    <div className={styles['layout-container']}>
      <nav>
        {routesList.map((ele) => (
          <div
            className={styles['btn']}
            key={ele}
          >
            <Link to={ele}>{ele}</Link>
          </div>
        ))}
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default Layout;
