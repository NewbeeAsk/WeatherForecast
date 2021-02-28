import React from 'react';
import s from './mainpage.module.css'
import {connect} from "react-redux";
import WeatherContainerComponent from "./WeatherForm/WeatherContainerComponent";
import WeatherTabContainerComponent from "./WeatherTab/WeatherTabContainerComponent";

class Content extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className={s.contentWrapper}>
                <div className={s.input}><WeatherContainerComponent/></div>
                <div className={s.input}><WeatherTabContainerComponent/></div>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
});


export const ContentContainer = connect(mapStateToProps, {}) (Content);
