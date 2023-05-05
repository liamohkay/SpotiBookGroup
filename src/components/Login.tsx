import React from 'react';

type LoginProps = {
    title?: string,
}

const Login = ({ title }:LoginProps) => {
    return (
        <h1 className="text-3xl font-bold text-center">{title}</h1>
    );
}

export default Login;