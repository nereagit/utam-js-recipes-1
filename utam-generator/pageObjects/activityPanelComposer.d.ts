
import { Driver as _Driver, Element as _Element, Locator as _Locator, UtamBasePageObject as _UtamBasePageObject } from '@utam/core';
import _ButtonGroup from 'salesforce-pageobjects/lightning/pageObjects/buttonGroup';

/**
 * Selector: runtime_sales_activities-activity-panel-composer.
 * Represents the activityPanel component.
 * generated from JSON __generated__/activityPanelComposer.utam.json
 * @version 2023-02-28T10:20:45.293Z
 * @author Salesforce
 */
export default class ActivityPanelComposer extends _UtamBasePageObject {
    constructor(driver: _Driver, element?: _Element, locator?: _Locator);
    getButtonGroup(buttonName: string): Promise<_ButtonGroup>;
}