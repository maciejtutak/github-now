import { useEffect, useState } from 'react';

const useComponentMounted = () => {
    const [componentMounted, setComponentMounted] = useState(false);

    useEffect(() => {
        setComponentMounted(true);
    })

    return [componentMounted];
}

export default useComponentMounted;