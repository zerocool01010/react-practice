import React, {useEffect} from "react"
import Card from './cards/Card'

const Componentnew = () => {

    useEffect(()=> {
        console.log('se esta montando el componente')
        return () => {
            console.log('desmontando')
        }
    }, [])

    return <Card>
    <p style={{padding: 10}}>Ready to edit</p>
    </Card>
}

export default Componentnew