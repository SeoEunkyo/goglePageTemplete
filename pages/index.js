import React from 'react'
import {Container} from '@material-ui/core'
import Title from '../components/GoogleHome/Title'
import SearchBar from '../components/GoogleHome/SearchBar'
import RecommendList from '../components/GoogleHome/RecommendList'


const Home = () => (
    <Container>
        <Title />
        <SearchBar />

        <div style={{marginTop : '12%'}}>
            <RecommendList />
            <RecommendList />
        </div>
    </Container>
);

export default Home
