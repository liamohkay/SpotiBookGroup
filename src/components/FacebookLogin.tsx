import React from 'react';

const FacebookLogin = () => {
    const handleLogin = () => {
      window.FB.login(resp => {
        if (resp.status === "connected") {
          console.log(resp.authResponse.accessToken)
        }
      })
    }

    return (
        <button onClick={handleLogin}>Here is a button</button>
    );
}

export default FacebookLogin;