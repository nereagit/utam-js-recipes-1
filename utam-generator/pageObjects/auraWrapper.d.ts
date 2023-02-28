
import { Driver as _Driver, Element as _Element, Locator as _Locator, UtamBasePageObject as _UtamBasePageObject } from '@utam/core';
import _ActivityPanelComposer from 'salesforce-pageobjects/lightning/pageObjects/activityPanelComposer';
import _PathassistantCollapsibleDrawer from 'salesforce-pageobjects/runtime_sales/pageObjects/pathassistantCollapsibleDrawer';
import _AuraRelatedListContainer from 'salesforce-pageobjects/lists/pageObjects/auraRelatedListContainer';

/**
 * Selector: flexipage-aura-wrapper.
 * Represents the flexipage-aura-wrapper Lightning web component.
 * Get the runtime_sales:pathassistantCollapsibleDrawer component.
 * generated from JSON __generated__/auraWrapper.utam.json
 * @version 2023-02-28T10:20:45.316Z
 * @author Salesforce
 */
export default class AuraWrapper extends _UtamBasePageObject {
    constructor(driver: _Driver, element?: _Element, locator?: _Locator);
    getActivityPanel(): Promise<_ActivityPanelComposer>;
    getCollapsibleDrawer(): Promise<_PathassistantCollapsibleDrawer>;
    getAuraRelatedListContainer(): Promise<_AuraRelatedListContainer>;
}