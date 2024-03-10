import UploadIcon from '../assets/upload_icon.png';

import './LabelList.scss';

const LabelList = () => {
    const onUpload = () => {

    };

    return (
			<div className="label-list">
                <div className="label-header">
                    <div>Labels</div>
                    <div 
                        className='icon-container'
                        onClick={onUpload}
                    >
                        <img 
                            className='upload-icon'
                            src={UploadIcon}
                            alt='upload-button'
                        />
                    </div>
                </div>
            </div>
    );
}

export default LabelList;