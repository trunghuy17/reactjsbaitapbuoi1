import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNavCom from './BTNavCom'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <div className='d-flex'>
                    <div className='w-25'>
                        <BTNavCom />
                    </div><div className='w-75'>
                        <BTContent />
                    </div>
                </div>
                <BTFooter />
            </div>
        )
    }
}
