import React from 'react';
import ImageUploader from './Components/ImageUploader/ImageUploader';
import { Switch, Route, Link } from 'react-router-dom';
import ImageViewer from './Components/ImageViewer/ImageViewer';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h1 className='text-align-center'>
          <Link to='/'>Hera Images</Link>
        </h1>
      </div>
      <main>
        <Switch>
          <Route exact path='/' component={ImageUploader} />
          <Route path='/image/:id' component={ImageViewer} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
