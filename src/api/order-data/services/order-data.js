'use strict';

/**
 * order-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-data.order-data');
