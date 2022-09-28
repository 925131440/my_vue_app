import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import assign from 'object-assign'
import classNames from 'classnames'
import _ from 'lodash'
import { Rnd } from 'react-rnd'

import '../css/index.less'

class ScreenShareCapture extends Component {
  static propTypes = {
    style: PropTypes.object,
  }

  static defaultProps = {
    style: {},
  }

  state = {
    x: 0,
    y: 0,
    width: 500,
    height: 281.25,
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  updateRndElemLastSizePos = () => {
    this.rndElemLastSizePos = {
      x: this.state.x,
      y: this.state.y,
      width: this.state.width,
      height: this.state.height,
    }
  }

  calculateRndElemSizePos = (dir, ref, sizeDelta, position) => {
    const sizePos = _.clone(this.rndElemLastSizePos)
    const heightWidthRatio = 0.5625
    sizePos.x = position.x
    sizePos.y = position.y
    sizePos.width = ref.offsetWidth
    sizePos.height = ref.offsetWidth * heightWidthRatio

    this.setState(sizePos)
    return sizePos
  }


  handleDragStart = () => {
    this.updateRndElemLastSizePos()
  }

  handleDrag = (e, data) => {
    this.setState({
      x: data.x,
      y: data.y,
    })
  }

  handleDragStop = (e, data) => {
    this.setState({
      x: data.x,
      y: data.y,
    })
  }

  handleResizeStart = () => {
    this.updateRndElemLastSizePos()
  }

  handleResize = (e, dir, ref, delta, position) => {
    console.log('beibei handleresize', e, dir, ref, delta, position)
    this.calculateRndElemSizePos(dir, ref, delta, position)
  }

  rndElemLastSizePos

  rnd

  render() {
    const wrapStyles = Object.assign({}, this.props.style)
    return (
      <Rnd
        style={wrapStyles}
        bounds=".teacher-layout-component-wrap"
        dragHandleClassName="screen-share-bottom-content-wrap"
        enableResizing={{
          top: false,
          right: false,
          bottom: false,
          left: false,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true,
        }}
        position={{
          x: this.state.x,
          y: this.state.y,
        }}
        size={{
          width: this.state.width,
          height: this.state.height,
        }}
        lockAspectRatio={16 / 9}
        maxWidth="100%"
        maxHeight="100%"
        minWidth={400}
        minHeight={225}
        onDragStart={this.handleDragStart}
        onDrag={this.handleDrag}
        onDragStop={this.handleDragStop}
        onResizeStart={this.handleResizeStart}
        onResize={this.handleResize}
        onResizeStop={_.noop}
        ref={(r) => { this.rnd = r }}
      >
        <div className="screen-share-capture-component-wrap">
          <div className="screen-share-main-content-wrap">
            <span className="start-screen-share-button">开始屏幕共享</span>
          </div>
          <div className="screen-share-bottom-content-wrap">
            <div className="screen-share-bottom-left">
              <i
                className="preview-icon"
              />
              <span className="preview-text">预览</span>
            </div>
            <div className="screen-share-bottom-right">
              <i
                className={classNames({
                  'device-icon': true,
                  'camera-icon': true,
                  active: false,
                })}
              />
              <i
                className={classNames({
                  'device-icon': true,
                  'mic-icon': true,
                  active: false,
                })}
              />
              <i
                className={classNames({
                  'device-icon': true,
                  'speaker-icon': true,
                  active: false,
                })}
              />
              <i
                className={classNames({
                  'device-icon': true,
                  'wifi-icon': true,
                  active: false,
                })}
              />
              {/*<i*/}
                {/*className={classNames({*/}
                  {/*'device-icon': true,*/}
                  {/*'restart-icon': true,*/}
                  {/*active: false,*/}
                {/*})}*/}
              {/*/>*/}
              <i
                className={classNames({
                  'device-icon': true,
                  'exit-icon': true,
                  active: false,
                })}
              />
            </div>
          </div>
        </div>
      </Rnd>
    )
  }
}

export default ScreenShareCapture