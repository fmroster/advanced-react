import {createContext, useEffect} from "react";

export const LoginContext = createContext(null)

export const LoginProvider = ({children}) => {
    useEffect(() => {
        setInterval(() => {
            const url = import.meta.env.BASE_URL + 'api/token/refresh'
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refresh: localStorage.getItem('refresh')
                })
            }).then(res => res.json())
            .then((data) => {
                console.log(data)
            })
        }, 5000)
    }, []);
}


