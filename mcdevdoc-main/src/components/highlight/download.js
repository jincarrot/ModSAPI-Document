import React from 'react';
import Highlight from './standard';

export default function Download({
    text = "下载",
    url = "",
    isInline = false
}) {
    let fontSize = isInline ? "medium" : "xx-large"
    return (
        <a
            class="btn green_btn large_btn"
            text={text}
            href={url}
            fontSize={fontSize}
        >下载</a>
    )
}
