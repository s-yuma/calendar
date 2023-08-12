import React from 'react';
import Image from 'next/image'
import News from '../components/News'
import Weather from '../components/Weather'
import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const EarthAnimation = dynamic(() => import('../components/EarthAnimation'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>fuhguv</div>
  )
}
