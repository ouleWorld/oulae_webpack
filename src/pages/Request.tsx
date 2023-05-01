import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Request: React.FC = () => {
  useEffect(() => {
    console.log('注意点： 生产环境的代理是不会生效的！');
    axios.get('/getip').then((res) => {
      console.log('res11: ', res);
    });
  }, []);

  return <div>Request</div>;
};

export default Request;
