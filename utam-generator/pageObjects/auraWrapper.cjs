
'use strict';

var core = require('@utam/core');
var _ActivityPanelComposer = require('salesforce-pageobjects/lightning/pageObjects/activityPanelComposer');
var _PathassistantCollapsibleDrawer = require('salesforce-pageobjects/runtime_sales/pageObjects/pathassistantCollapsibleDrawer');
var _AuraRelatedListContainer = require('salesforce-pageobjects/lists/pageObjects/auraRelatedListContainer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _ActivityPanelComposer__default = /*#__PURE__*/_interopDefaultLegacy(_ActivityPanelComposer);
var _PathassistantCollapsibleDrawer__default = /*#__PURE__*/_interopDefaultLegacy(_PathassistantCollapsibleDrawer);
var _AuraRelatedListContainer__default = /*#__PURE__*/_interopDefaultLegacy(_AuraRelatedListContainer);

async function _utam_get_activityPanel(driver, root) {
    let _element = root;
    const _locator = core.By.css("runtime_sales_activities-activity-panel-composer");
    return _element.findElement(_locator);
}

async function _utam_get_collapsibleDrawer(driver, root) {
    let _element = root;
    const _locator = core.By.css(".runtime_sales_pathassistantCollapsibleDrawer");
    _element = new core.ShadowRoot(driver, _element);
    return _element.findElement(_locator);
}

async function _utam_get_auraRelatedListContainer(driver, root) {
    let _element = root;
    const _locator = core.By.css(".forceRelatedListContainer");
    _element = new core.ShadowRoot(driver, _element);
    return _element.findElement(_locator);
}

/**
 * Selector: flexipage-aura-wrapper.
 * Represents the flexipage-aura-wrapper Lightning web component.
 * Get the runtime_sales:pathassistantCollapsibleDrawer component.
 * generated from JSON __generated__/auraWrapper.utam.json
 * @version 2023-02-28T10:20:45.316Z
 * @author Salesforce
 */
class AuraWrapper extends core.UtamBasePageObject {
    constructor(driver, element, locator) {
        super(driver, element, locator);
    }

    async __getRoot() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const BaseUtamElement = core.createUtamMixinCtor();
        return new BaseUtamElement(driver, root);
    }
    
    async getActivityPanel() {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_activityPanel(driver, root);
        element = await core.createInstance(_ActivityPanelComposer__default["default"], driver, element);
        await element.__beforeLoad__();
        return element;
    }
    
    async getCollapsibleDrawer() {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_collapsibleDrawer(driver, root);
        element = await core.createInstance(_PathassistantCollapsibleDrawer__default["default"], driver, element);
        await element.__beforeLoad__();
        return element;
    }
    
    async getAuraRelatedListContainer() {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_auraRelatedListContainer(driver, root);
        element = await core.createInstance(_AuraRelatedListContainer__default["default"], driver, element);
        await element.__beforeLoad__();
        return element;
    }
    
}

module.exports = AuraWrapper;
