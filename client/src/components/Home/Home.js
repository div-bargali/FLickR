import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Pagination from '../Pagination';
import { getPosts, getPostsBySearch } from '../../actions/posts'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Sidebar from '../Sidebar/Sidebar';

import useStyles from './styles';

// this allows to use useQuery as a hook
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const user = JSON.parse(localStorage.getItem('profile'));
  const query = useQuery();
  const history = useHistory();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() || tags) {
      // dispatch -> fetch search post
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      // search post
      searchPost();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete ));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit" >
              <TextField
                name="search"
                variant="outlined"
                label="Search Posts"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
              <Button className={classes.searchButton} variant="contained" onClick={searchPost} color="primary" >
                Search
              </Button>
            </AppBar>
            { user?.result?.name ? (
              <>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                <Paper elevation={6} className={classes.pagination} >
                  <Pagination page={page} />
                </Paper>
              </>
              ) : (
              <>
                <Sidebar />
                <Paper elevation={6} className={classes.pagination} >
                  <Pagination page={page} />
                </Paper>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>    
  );
}

export default Home;