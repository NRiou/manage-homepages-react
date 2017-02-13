/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const HomepagesItemType = new ObjectType({
  name: 'HomepageItem',
  fields: {
    storeview: { type: new NonNull(StringType) },
    tag: { type: new NonNull(StringType) },
    gender: { type: StringType },
    deploymentDate: { type: new NonNull(StringType) },
    contentJson: { type: StringType },
  },
});

export default HomepagesItemType;
