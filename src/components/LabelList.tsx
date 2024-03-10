import { open } from '@tauri-apps/api/dialog';
import { readTextFile } from '@tauri-apps/api/fs';
import { useEffect, useState } from 'react';
import UploadIcon from '../assets/upload_icon.png';

import './LabelList.scss';

const LabelList = () => {
    const [csv, setCsv] = useState<string>();

    useEffect(() => {
        console.log(csv?.split('\r\n'));
    }, [csv]);

    const onUpload = () => {
        const file = open({
            multiple: false,
			directory: false,
			filters: [{
				name: 'CSV',
				extensions: ['csv']
			}]
        });

        file.then(async (path) => {
            if (path !== null && typeof path === "string") {
                const contents = await readTextFile(path);
                setCsv(contents);
            }
        })
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