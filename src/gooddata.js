// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.
import { factory } from '@gooddata/gooddata-js';
import config from '../package.json';

if (process.env.NODE_ENV === 'production') {
  config.domain = 'https://developer.na.gooddata.com';
}

export const sdk = factory(config);
export const projectId = config.projectId;
export const domain = config.domain;

window.gooddata = sdk;