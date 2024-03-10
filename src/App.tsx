
import UploadIcon from './assets/upload_icon.png';

import "./App.scss";

const App = () => {
	return (
		<div className="label-page">
			<div className="label-list">
                <div className="label-header">
                    <div>Labels</div>
                    <div className='icon-container'>
                        <img 
                            className='upload-icon'
                            src={UploadIcon}
                        />
                    </div>
                </div>
            </div>

            <div className="label-preview">

            </div>
		</div>
	);
}

export default App;
