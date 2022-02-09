import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width:768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`
/* 
    useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문에
    useEffect에 등록하는 함수에 async를 붙이면 안 된다.
    useEffect 내부에서 async/await 을 사용 할 때는 
    async 키워드가 붙은 또 다른 함수를 만들어서 사용해 주어야 한다.
*/

const NewsList = ({ category }) => {
    const [loading, response, error ] = usePromise(() => {
        const query = category ==='all' ? '':`&category=${category}`;
        return axios.get(
             `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8c2b21fee8234e1b802c9913d32508e1`,
        );
    }, [category]);

    //댜가 중일 때
    if(loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    //아직 response 값이 설정되지 않았을 때
    if(!response) {
        return null;
    }
    // 에러가 발생했을 때
    if(error) {
        return <NewsListBlock>Error</NewsListBlock>
    }

    //response 값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList; 