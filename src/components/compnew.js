import React, {useEffect} from "react"

const Componentnew = () => {

    useEffect(()=> {
        console.log('se esta montando el componente')
        return () => {
            console.log('desmontando')
        }
    }, [])

    return <p>Ready to edit</p>
}

export default Componentnew