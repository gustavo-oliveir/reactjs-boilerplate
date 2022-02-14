import React from 'react'
import LoadingICON from '../../assets/images/icons/waiting.svg'
import { useLoadingContext } from './loading.context'
import './styles.css'

const Loading = () => {
    const { loadingState: { display }} = useLoadingContext();
    return (
        <div className="loading-holder-item" style={{display: `${display}`}}>
            <div className="loading-holder-image">
                <img src={LoadingICON} alt="" />
            </div>
        </div>
    )
}
export default Loading