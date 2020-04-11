import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ImageViewer from '../Components/ImageViewer/ImageViewer';
import ImageUploader from '../Components/ImageUploader/ImageUploader';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ImageUploader} />
            <Route path="/image/:id" component={ImageViewer} />
        </Switch>
    );
};

export default Routes;
