import React, {useState} from 'react';
import './SurveyBlock.css';
import survey_image from '../../static/img/survey_image.png'


import useToken from "../../data/useToken";


const SurveyBlock = () => {
    const {token, setToken} = useToken();
    // const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

    return (
            <div className='survey_block'>
                <div className='main_survey_info'>
                    <div><img className={'survey_image'} src={survey_image} alt={'Обложка опроса'}/></div>
                    <div className={'survey_base_info'}>
                        <div className={'survey_base_info_block'}>Активный</div>
                        <div className={'survey_base_info_block'}>19Р</div>
                        <div className={'survey_base_info_block'}>
                            <div>Вопросов</div>
                            <div>12</div>
                        </div>
                        <div className={'survey_base_info_block'}>
                            <div>Ответили</div>
                            <div>70/100</div>
                        </div>
                    </div>
                </div>
                <div className='card_title'><h3>Ваша обувь</h3></div>
                <div className={'public_date'}>Опубликован: 12 декабря</div>
            </div>
    );

}

export default SurveyBlock;