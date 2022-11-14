import React from 'react';
import Header from "../../components/Header_home-page/Header-home-page";
import './Home-page.scss'
import PedalBikeIcon from '@mui/icons-material/PedalBike';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className="home-container">
                <div className="content-container">
                    <div className="content">
                        <div className="table">
                            <div className="moto-left">
                                <div className="item item-logo">
                                    <PedalBikeIcon />
                                </div>
                                <div className="item item-logo">
                                </div>
                                <div className="item item-logo">
                                </div>
                                <div className="item item-logo">
                                    <PedalBikeIcon />
                                </div>
                                <div className='item-logo'>
                                </div>
                            </div>
                            <div className="moto-right">
                                <div className="item item-logo">
                                    <PedalBikeIcon />
                                </div>
                                <div className="item item-logo">
                                    <PedalBikeIcon />
                                </div>
                                <div className="item item-logo">
                                    <PedalBikeIcon />
                                </div>
                                <div className="item item-logo">
                                </div>
                                <div className='item-logo'>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="number">
                                <div className="item-number item-border color-access">
                                    1
                                </div>
                                <div className="item-number item-border color-danger">
                                    2
                                </div>
                                <div className="item-number item-border color-danger">
                                    3
                                </div>
                                <div className="item-number item-border color-access">
                                    4
                                </div>
                                <div className="item-number item-border color-danger">
                                    5
                                </div>
                                <div className="item-number item-border color-access">
                                    6
                                </div>
                                <div className="item-number item-border color-access">
                                    7
                                </div>
                                <div className="item-number item-border color-access">
                                    8
                                </div>
                                <div className="item-number item-border color-danger">
                                    9
                                </div>
                                <div className="item-number color-danger">
                                    10
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-container">
                        <div className="button-content">
                            <div className='button' value=""  >
                                <a href="/userInfo">情報</a>
                            </div>
                            <div className='button' value=""  >
                                <a href="/payment">予約</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
