import React, { Component } from 'react'
import { Layout, Pagination, Tabs, Button } from 'antd'
import { inject, observer } from "mobx-react"
import {
    update_last_one,
    is_inner,
    is_buttom_array,
    is_close_btn,
    is_scale_btn
} from '../feature/Tool.js'
import {
    canvas_layer
} from '../feature/Canvas_layer.js'

import {
    canvas_background
} from '../feature/Canvas_background.js'

const { Content } = Layout
const { TabPane } = Tabs;

@inject("store")
@observer
export default class canvas extends Component {
    componentDidMount() {
        canvas_layer(
            this.refs.canvas_layer,
            this.props.store
        )
    }

    render() {
        return (
            <div className="content-container-show">
                <canvas
                    height={`${screen.height-93 > 600 ? 600 : screen.height-93}`}
                    width={`${screen.width > 400 ? 400 : screen.width}`}
                    crossOrigin="anonymous"
                    ref="canvas_layer" />
                <canvas
                    height={`${screen.height-93 > 600 ? 600 : screen.height-93}`}
                    width={`${screen.availWidth > 400 ? 400 : screen.availWidth}`}
                    crossOrigin="anonymous"
                    ref="canvas_background" />
            </div>
        )
    }
};
