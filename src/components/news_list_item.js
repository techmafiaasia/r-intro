import React from 'react'

export default function News_list_item(props) {
    return (
        <div>
          {props.item.id}
          {props.item.title}
          {props.item.feed}  
          newslist
        </div>
    )
}
