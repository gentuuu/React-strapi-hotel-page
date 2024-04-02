'use strict';

/**
 * pokoj service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pokoj.pokoj');
