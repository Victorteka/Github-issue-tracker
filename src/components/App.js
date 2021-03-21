import { Container } from '@material-ui/core';
import React, {useState} from 'react'

import RepoList from './repository/RepoList'
import Header from './header/Header';
import SearchBar from './search/SearchBar';
import Footer from './footer/Footer';

function App() {
  
  const [searchTerm, setSearchTerm] = useState('')

  return (
      <>
        <Header />
        <Container maxWidth={'sm'}>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <RepoList searchTerm={searchTerm} />
        </Container>
        <Footer />
      </>
  );
}

export default App;
