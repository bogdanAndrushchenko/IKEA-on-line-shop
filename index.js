
import generateHeader from './scripts/generateHeader.js';
import generateFooter from './scripts/generateFooter.js';
import generateCatalog from './scripts/generateCatalog.js';
import generateGoodsPage from './scripts/generateGoodsPage.js';

import {loadData} from './scripts/loadData.js';

generateHeader();
generateFooter();
generateCatalog();
generateGoodsPage();
loadData();