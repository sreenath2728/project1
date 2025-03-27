sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        Sales: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
