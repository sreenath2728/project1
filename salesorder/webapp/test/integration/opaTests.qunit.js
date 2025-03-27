sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sales/labs/salesorder/test/integration/FirstJourney',
		'com/sales/labs/salesorder/test/integration/pages/SalesOrderManageList',
		'com/sales/labs/salesorder/test/integration/pages/SalesOrderManageObjectPage',
		'com/sales/labs/salesorder/test/integration/pages/SalesOrderItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrderManageList, SalesOrderManageObjectPage, SalesOrderItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sales/labs/salesorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesOrderManageList: SalesOrderManageList,
					onTheSalesOrderManageObjectPage: SalesOrderManageObjectPage,
					onTheSalesOrderItemObjectPage: SalesOrderItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);