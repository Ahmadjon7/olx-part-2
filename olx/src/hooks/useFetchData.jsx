import instance from '../api/instance';
import { useEffect ,useState } from 'react';

const useFetchData = (ENDPOINT) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        instance.get(ENDPOINT)
            .then(reseponse => {
                setData(reseponse.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            }
            )
    },[ENDPOINT])
    return [data, isLoading];
};

export default useFetchData;