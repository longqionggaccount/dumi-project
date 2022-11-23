import React, { PureComponent } from 'react';
import { PathStyleExtension } from '@deck.gl/extensions';
import { setXVIZConfig, getXVIZConfig } from '@xviz/parser';
import {
  LaneLayer,
  LogViewer,
  PlaybackControl,
  StreamSettingsPanel,
  MeterWidget,
  TrafficLightWidget,
  TurnSignalWidget,
  XVIZPanel,
  VIEW_MODE,
} from 'streetscape.gl';
import { Form } from '@streetscape.gl/monochrome';

import {
  XVIZ_CONFIG,
  APP_SETTINGS,
  MAPBOX_TOKEN,
  MAP_STYLE,
  XVIZ_STYLE,
  CAR,
} from './constants';

setXVIZConfig(XVIZ_CONFIG);

const TIMEFORMAT_SCALE =
  getXVIZConfig().TIMESTAMP_FORMAT === 'seconds' ? 1000 : 1;

// __IS_STREAMING__ and __IS_LIVE__ are defined in webpack.config.js
const exampleLog = require('./log-from-file').default;

export default class Example extends PureComponent {
  state = {
    log: exampleLog,
    settings: {
      viewMode: 'PERSPECTIVE',
      showTooltip: false,
    },
  };

  componentDidMount() {
    this.state.log.on('error', console.error).connect();
  }

  _onSettingsChange = changedSettings => {
    this.setState({
      settings: { ...this.state.settings, ...changedSettings },
    });
  };

  render() {
    const { log, settings } = this.state;

    return (
      <div id="container">
        <div id="control-panel">
          <XVIZPanel log={log} name="Metrics" />
          <hr />
        </div>
      </div>
    );
  }
}
