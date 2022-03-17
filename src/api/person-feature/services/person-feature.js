'use strict';

/**
 * person-feature service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::person-feature.person-feature');
