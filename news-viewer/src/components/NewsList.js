import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

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

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

/* 
    useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문에
    useEffect에 등록하는 함수에 async를 붙이면 안 된다.
    useEffect 내부에서 async/await 을 사용 할 때는 
    async 키워드가 붙은 또 다른 함수를 만들어서 사용해 주어야 한다.
*/

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8c2b21fee8234e1b802c9913d32508e1",
                );
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    //댜가 중일 때
    if(loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    //아직 articles 값이 설정되지 않았을 때
    if(!articles) {
        return null;
    }

    //articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList; 