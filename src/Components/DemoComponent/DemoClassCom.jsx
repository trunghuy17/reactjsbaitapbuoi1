//rcc: react class component
import React, { Component } from 'react'

export default class DemoClassCom extends Component {

    //render: la phương thức mặc định xác định giao diện của thể <democlasscom />
    render() {


        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>

        )
    }
}

