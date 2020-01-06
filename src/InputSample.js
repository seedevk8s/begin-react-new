import React from 'react';

function InputSample() {
    const onChange = (e) => {
        console.log(e.target);
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

















