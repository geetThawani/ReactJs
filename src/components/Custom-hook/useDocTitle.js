import {useEffect} from 'react';

function useDocTitle(count) {
    useEffect(() => {
        document.title = `Count - ${count}`
    },[count])
}
// Always create custom hook using 'use' word
export default useDocTitle;