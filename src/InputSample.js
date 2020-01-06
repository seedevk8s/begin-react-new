import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <input onChange={onChange}/>
            <button>초기화</button>
            <div>
                <b>값: </b>
                오늘은 1월 6일입니다.
            </div>
        </div>
    );
}

export default InputSample;

















