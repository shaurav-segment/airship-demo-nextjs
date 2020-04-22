import { Fragment } from 'react';
import App from 'next/app';

export default class CustomApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Fragment>
                <div>
                    <Component />
                </div>
            </Fragment>
        );
    }
}