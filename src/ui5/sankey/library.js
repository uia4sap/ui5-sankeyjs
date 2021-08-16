/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5.sankeyjs.
 */
sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/library'
], function (
	jQuery,
	library
) {
	"use strict";

	/**
	 * An sankeyjs library.
	 *
	 * @namespace
	 * @name ui5.sankeyjs
	 * @public
	 */

	// library dependencies

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name: "ui5.sankeyjs",
		dependencies: ["sap.ui.core"],
		types: [],
		interfaces: [],
		controls: [],
		elements: [],
		noLibraryCSS: false,
		version: "${version}"
	});

	return ui5.sankeyjs;

});
