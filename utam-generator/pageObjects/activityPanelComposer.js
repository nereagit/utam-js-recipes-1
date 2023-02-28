
import { By as _By, ShadowRoot as _ShadowRoot, createUtamMixinCtor as _createUtamMixinCtor, createInstance as _createInstance, UtamBasePageObject as _UtamBasePageObject } from '@utam/core';
import _ButtonGroup from 'salesforce-pageobjects/lightning/pageObjects/buttonGroup';

async function _utam_get_buttonGroup(driver, root, buttonName) {
    let _element = root;
    const _locator = _By.css("lightning-button-group[data-target-selection-name=\"" + buttonName + "\"]");
    _element = new _ShadowRoot(driver, _element);
    return _element.findElement(_locator);
}

/**
 * Selector: runtime_sales_activities-activity-panel-composer.
 * Represents the activityPanel component.
 * generated from JSON __generated__/activityPanelComposer.utam.json
 * @version 2023-02-28T10:20:45.293Z
 * @author Salesforce
 */
export default class ActivityPanelComposer extends _UtamBasePageObject {
    constructor(driver, element, locator) {
        super(driver, element, locator);
    }

    async __getRoot() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const BaseUtamElement = _createUtamMixinCtor();
        return new BaseUtamElement(driver, root);
    }
    
    async getButtonGroup(buttonName) {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_buttonGroup(driver, root, buttonName);
        element = await _createInstance(_ButtonGroup, driver, element);
        await element.__beforeLoad__();
        return element;
    }
    
}