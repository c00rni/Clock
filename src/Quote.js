import { useCallback, useEffect, useState } from "react";
import {decode} from 'html-entities';

function Quote({open, className}) {
    const [quote, setQuote] = useState({author:"", content:""});
    const [isFetching, setIsFetching] = useState(false)

    const fetchQuote = useCallback( async () => {
        if (isFetching) return
        setIsFetching(true)

        await fetch(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`)
        .then(response => response.json())
        .then(res => {
            const randNumber = Math.floor(Math.random() * res.length)
            setQuote({author: res[randNumber].title.rendered, content: decode(res[randNumber].content.rendered.split("<p>")[1].split("</p>")[0])});
        });

        setIsFetching(false)
      }, [isFetching])

    useEffect(() => {
        fetchQuote()
    },[fetchQuote])

    return (
      <>
        <article className={`w-full flex xl:max-w-[40vw] ${open.isOpen && "hidden"} ${className}`}>
            <div className={`opacity-0 flex flex-col flex-auto ${!open.isOpen && "opacity-100"}`}>
                <p className='text-base md:text-xl font-light'>“{quote.content}”</p>
                <p className='mt-3 md:text-xl font-semibold text-base'>{quote.author}</p>
            </div>
            <div className="flex w-[30px] h-[30px] cursor-pointer items-center justify-center flex-shrink-0 flex-grow-0 transform origin-center hover:rotate-180 duration-300">
                <svg disabled={isFetching} onClick={fetchQuote} width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" fill="#FFF" fill-rule="nonzero" opacity=".5"/></svg>
            </div>

        </article>
      </>
    );
}

export default Quote;