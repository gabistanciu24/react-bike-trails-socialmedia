"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({children}) => {

  const {theme} = useContext(ThemeContext)
  //for most browsers
  const [mounted,setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(mounted){
    return<div className={theme}>{children}</div>
  }
}

export default ThemeProvider