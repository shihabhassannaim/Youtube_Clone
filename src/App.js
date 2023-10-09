import {BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import {Box} from '@mui/material'
import Feed from './Components/Feed/Feed';
import VideoDetail from './Components/VideoDetail/VideoDetail';
import ChannelDetail from './Components/ChannelDetail/ChannelDetail';
import SearchFeed from './Components/SearchFeed/SearchFeed';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
       <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/Video/:id' element={<VideoDetail/>} />
          <Route path='/Channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
