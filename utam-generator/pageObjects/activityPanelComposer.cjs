
'use strict';

var core = require('@utam/core');
var _ButtonGroup = require('salesforce-pageobjects/lightning/pageObjects/buttonGroup');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _ButtonGroup__default = /*#__PURE__*/_interopDefaultLegacy(_ButtonGroup);

async function _utam_get_buttonGroup(driver, root, buttonName) {
    let _element = root;
    const _locator = core.By.css("lightning-button-group[data-target-selection-name=\"" + buttonName + "\"]");
    _element = new core.ShadowRoot(driver, _element);
    return _element.findElement(_locator);
}

/**
 * Selector: runtime_sales_activities-activity-panel-composer.
 * Represents the activityPanel component.
 * generated from JSON __generated__/activityPanelComposer.utam.json
 * @version 2023-02-28T10:20:45.293Z
 * @author Salesforce
 */
class ActivityPanelComposer extends core.UtamBasePageObject {
    constructor(driver, element, locator) {
        super(driver, element, locator);
    }

    async __getRoot() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const BaseUtamElement = core.createUtamMixinCtor();
        return new BaseUtamElement(driver, root);
    }
    
    async getButtonGroup(buttonName) {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_buttonGroup(driver, root, buttonName);
        element = await core.createInstance(_ButtonGroup__default["default"], driver, element);
        await element.__beforeLoad__();
        return element;
    }
    
}

module.exports = ActivityPanelComposer;
