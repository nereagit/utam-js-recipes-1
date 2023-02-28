
import { By as _By, ShadowRoot as _ShadowRoot, createUtamMixinCtor as _createUtamMixinCtor, createInstance as _createInstance, UtamBasePageObject as _UtamBasePageObject } from '@utam/core';
import _ActivityPanelComposer from 'salesforce-pageobjects/lightning/pageObjects/activityPanelComposer';
import _PathassistantCollapsibleDrawer from 'salesforce-pageobjects/runtime_sales/pageObjects/pathassistantCollapsibleDrawer';
import _AuraRelatedListContainer from 'salesforce-pageobjects/lists/pageObjects/auraRelatedListContainer';

async function _utam_get_activityPanel(driver, root) {
    let _element = root;
    const _locator = _By.css("runtime_sales_activities-activity-panel-composer");
    return _element.findElement(_locator);
}

async function _utam_get_collapsibleDrawer(driver, root) {
    let _element = root;
    const _locator = _By.css(".runtime_sales_pathassistantCollapsibleDrawer");
    _element = new _ShadowRoot(driver, _element);
    return _element.findElement(_locator);
}

async function _utam_get_auraRelatedListContainer(driver, root) {
    let _element = root;
    const _locator = _By.css(".forceRelatedListContainer");
    _element = new _ShadowRoot(driver, _element);
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
export default class AuraWrapper extends _UtamBasePageObject {
    constructor(driver, element, locator) {
        super(driver, element, locator);
    }

    async __getRoot() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const BaseUtamElement = _createUtamMixinCtor();
        return new BaseUtamElement(driver, root);
    }
    
    async getActivityPanel() {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_activityPanel(driver, root);
        element = await _createInstance(_ActivityPanelComposer, driver, element);
        await element.__beforeLoad__();
        return element;
    }
    
    async getCollapsibleDrawer() {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_collapsibleDrawer(driver, root);
        element = await _createInstance(_PathassistantCollapsibleDrawer, driver, element);
        await element.__beforeLoad__();
        return element;
    }
    
    async getAuraRelatedListContainer() {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_auraRelatedListContainer(driver, root);
        element = await _createInstance(_AuraRelatedListContainer, driver, element);
        await element.__beforeLoad__();
        return element;
    }
    
}