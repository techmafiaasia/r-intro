import React from 'react'

//components
import News_list_item from './news_list_item';

export default function News_list(props) {
    console.log('news item', props)
    const items = props.news.map((item, i) =>{
        return(
            <News_list_item key = {i} item = {item} />
        )
    })
    return (
        <div>
           {items}
        </div>
    )
}
