/*
 * @Author: zhengqifeng 
 * @Date: 2019-01-01 20:43:36 
 * @Last Modified by: zhengqifeng
 * @Last Modified time: 2019-01-01 20:43:58
 */

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

