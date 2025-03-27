sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.sales.labs.salesorder',
            componentId: 'SalesOrderItemObjectPage',
            contextPath: '/SalesOrderManage/_Item'
        },
        CustomPageDefinitions
    );
});