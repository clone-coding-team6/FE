import MainCard from './MainCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  __readArticles,
  __readOneArticle,
} from '../redux/modules/articleSlice';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../shared/Cookie';

const MainList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.article.articles);
  const articles = data.data;
  // console.log(data);
  const { isLoading } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(__readArticles());
    // if (articles.code === '1005' || articles.code === '1003') {
    //   return navigate('/login');
    // }
  }, [dispatch]);

  return (
    <ListContainer>
      {articles?.map((article) => (
        <MainCard key={article.postId} article={article} />
      ))}
    </ListContainer>
  );
};

export default MainList;

const ListContainer = styled.div`
  margin-right: 32px;
`;
