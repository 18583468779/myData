import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const Redirect: React.FC =() =>{
    const nav = useNavigate();
    useEffect(()=>{
      nav('/welcome/1')
    },[])
    return null;
} 