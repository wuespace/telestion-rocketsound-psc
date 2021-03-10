/*
This file gets manipulated automatically using the tc-cli.

Please do not remove the // XXX_IMPORT_MARK comments or you will loose the ability to generate widgets automatically
using the tc-cli generate widget command.
 */

import { Widget } from '@wuespace/telestion-client-types';
import { widget as sampleWidget } from './sample-widget';
import { widget as nineDofWidget } from './9dof-widget';
import { widget as mapWidget } from './map-widget';
import { widget as stateWidget } from './state-widget';
import { widget as graphWidget } from './graph-widget';
import { widget as waveformWidget } from './waveform-widget';
import { widget as spectrogramWidget } from './spectrogram-widget';
import { widget as gpsDetailsWidget } from './gps-details-widget';
import { widget as placeholderWidget } from './placeholder-widget';
// IMPORT_INSERT_MARK

export const projectWidgets: Widget[] = [
	// ARRAY_FIRST_ELEMENT_INSERT_MARK
	placeholderWidget,
	gpsDetailsWidget,
	spectrogramWidget,
	mapWidget,
	stateWidget,
	graphWidget as Widget,
	nineDofWidget,
	sampleWidget,
	waveformWidget as Widget
];
