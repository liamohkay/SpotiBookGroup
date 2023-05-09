import React, { useEffect } from 'react';
import FacebookLogin from './components/FacebookLogin';

function App() {
 
  // Initialized faceobok SDK
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : process.env.REACT_APP_FACEBOOK_APP_ID,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v16.0'
      });
    };
  }, [])


  return (
    <div className="App">
      <h1 className="text-center">SpotiBookGroup started construction 5/4/23</h1>
      <FacebookLogin />
    </div>
  );
}

export default App;
