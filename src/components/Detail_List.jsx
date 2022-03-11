import React from 'react'
import Card_Container from './Card_Container'

const Detail_List = (props) => {
    return (
        <ul>    
            {props.fetchData.map((data) => (
                <Card_Container 
                    key = {data.id}
                    id = {data.id}
                    title = {data.title}
                    body = {data.body}
                />
            ))}
        </ul>
    )
}

export default Detail_List;