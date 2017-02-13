/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import HomepagesItemType from '../types/HomepagesItemType';

const homepages = {
  type: HomepagesItemType,
  resolve({ request }) {
    return request.HomepageItem && {
      storeview: request.HomepageItem.storeview,
      tag: request.HomepageItem.tag,
      gender: request.HomepageItem.gender,
      deploymentDate: request.HomepageItem.deploymentDate,
      contentJson: request.HomepageItem.contentJson,
    };
  },
};

export default homepages;
