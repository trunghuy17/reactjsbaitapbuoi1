import React, { Component } from 'react'
import BTBanner from './BTBanner'
import BTBody from './BTBody'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTItem from './BTItem'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTBody/>
        <BTFooter />
      </div>
    )
  }
}
