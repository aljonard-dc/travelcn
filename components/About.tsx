"use client"

import React, { useState } from 'react'
import { municipalityContent } from '@/data'

const About = () => {
	const [hoverText, setHoverText] = useState('');
	const [hoverContent, setHoverContent] = useState('');
	const [isHovering, setIsHovering] = useState(false);
  
	const handleMouseEnter = (event: React.MouseEvent<SVGPathElement>) => {
	  const target = event.currentTarget;
	  const name = target.getAttribute('name') || '';
	  const content = municipalityContent.find(item => item.name === name);
  
	  if (content) {
		setHoverContent(content.description);
	  }

	  setHoverText(name);
	  setIsHovering(true);
	};
  
	const handleMouseLeave = () => {
	  setHoverText('');
	  setIsHovering(false);
	};


  return (
	<section className='bg-green-100 my-8 py-10 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin grid grid-flow-row md:grid-cols-2 gap-8 md items-center'>
         
		<div className=' grid grid-flow-row'>
			<div className='py-4 flex flex-col md:flex-col lg:flex-col xl:flex-row gap-2 items-center'>
				<span className='font-medium text-2xl md:text-3xl lg:text-4xl'>
					Welcome to
				</span>
				<span className={`font-medium text-2xl md:text-3xl lg:text-4xl ${isHovering ? 'text-green-500' : ''}`}>
					{isHovering ? hoverText : 'Camarines Norte!'}
				</span>
			</div>
			<div className='py-2 grid gap-2'>
				{
					isHovering 
						? <p className='font-light text-lg text-center md:text-left'>{hoverContent}</p> 
						: <p className='font-light text-lg text-center md:text-left'>{municipalityContent[0].description}</p>
				}
			</div>

				  </div>
      

		<div className="relative">
		<svg   version="1.1"
			id="Layer_2"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 2456 2031"
			enableBackground="new 0 0 2456 2031"
			xmlSpace="preserve">
			<style>
				{`.st0 { fill: #DCCEE4; }
				.st1 { fill: #DBE9BB; }
				.st2 { fill: #EBCFC4; }
				.st3 { fill: #FCF9B4; }
				.st4 { fill: #F3E4B7; }
				.st5 { fill: #D8DEF0; }
				.st6 { fill: #DCE8BA; }
				.st7 { fill: #FDFAB5; }
				.st8 { fill: #D8DFF1; }
				.st9 { fill: #FFE27C; }
				.st10 { fill: #ECCFC4; }`}
			</style>
		<path name="Mercedes" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st0 hover:stroke-green-950 " d="M2247.8,1286.4c9.2,0.5,13.4,10.7,12.3,18.8c-0.7,6-3.7,14.3-9.8,16.4c-4.5,1.4-10.6,0.7-15-1.6l-0.1-0.1
			c-4.5-2.6-6.8-9.6-7.9-14.8c-0.7-4.2-1.5-8.6,1-12.1C2232,1288.1,2241.2,1285.9,2247.8,1286.4z M2297,1786.8
			c1.4-8.6,7.3-16.1,7.3-25.2c0.4-16.7-17.1-25.9-20-41.8c-5.4-26.3,1.4-54.9-9.5-80.2c-4.9-16,14.1-24,14.5-38.6
			c0.6-15.9-13.6-46-26.4-55.7c-12.8-11.1-31.8-6.8-46-14.9c-7.3-4.8-12.5-12.5-19.7-17.7c-8.1-6.4-12.6-16-18.5-24.1
			c-9.5-12.7-22.5-42.9-31.1-51.5c-1-1-6-6.2-7.4-6.3c-1.4,1.3-6,7.9-8.9,8.7c-8.1,2.2-16.5,4.2-23.9,8.2
			c-8.6,4.5-16.7,10.7-22.6,17.2c-6.9,7.5-15.4,17.6-12.2,28.5c4.4,12.2,18.3,19.2,18.7,33.7c0.7,9.4-5.2,18.4-2.1,27.6
			c3.4,9.6,13.6,15.4,23.2,17.4c8.8,1.8,18.6,0.2,26.8,2.8c4,1.2,7.6,3.4,10.6,6.4c3.8,3.7,6.8,8.4,10.9,11.8c7.3,6.6,17.8,5.9,27,7.9
			c14,2.4,24,16.5,22.7,30.5c-0.7,8.2-6,14.5-9.8,21.7c-6.2,11.9-6.8,26.4-14.6,37.5c-7.6,10.8-4,16-0.2,27c2.5,8,2.3,16.9,2.1,25.6
			c-0.2,6.8-0.2,13.7-1.6,20.4c-2.7,12.2-10.8,14.4-19.5,15c-0.2,0-0.5,0.1-0.7,0c-7.4,0.4-15.2,0-20.6,3.7c-0.7,0.8-1.4,1.6-2,2.5
			c-2.3,6.2,6.4,13.5,6.7,19.9c1.1,9-9.7,13-16.9,14.8c-8.6,2.3-17.4,4-26.3,5.1c-11.4,1.2-24.1,2.1-33,9.8
			c-9.5,8.7-15.7,17.2-26.5,12.1c0,0,0,0,0,0c0.7,0.5,4.8,5.3,6.3,6.4c5.7,4.5,22.9,31.4,28.8,35.6c12.2,8.2,23.3,17.5,34.7,26.8
			c16.3,12.9,32.3,26,48.7,38.7c7.4,5.9,29.3,32.5,37.5,17.1c3.9-10.6-0.6-22.8-0.6-33.4c-0.1-15.6,9.5-29.4,18.9-41.1
			c6.2-7.3,10.8-16.4,19.5-20.9c12-6.3,22.9,10,35-0.8c4.8-4.5,6.8-11.3,11.7-15.8c4.1-4.1,9.3-6.3,12.7-10.4c6-7.5,7.8-19.7,7.4-29.2
			C2308.1,1807.5,2294.4,1799.4,2297,1786.8z M2090.6,1302.9c10.7,6,28.5,4.1,35,15.3c3.5-0.5,6.9-1.6,10.2-2.6
			c7.7-2.5,15.8-3.6,23.4-6.2c6.6-2.3,10.1-8.4,12.2-15.1c2.8-7.8,1.5-16.1-0.5-24.1c-1.2-5.4-2.5-10.8-3.7-16.2
			c-2-8.6-3.9-17.2-6-25.8c-1.4-5.7-3.4-12-8.7-15.2c-9.3-5.3-21.8-3.4-29.7-11.4c-4.1-3.8-7.3-8.6-11.8-12c-8.5-7-18.8-3.1-23.7,5.9
			c-3.8,6.6-5,15.7-10.5,20.8c-6.2,6.2-17.6,3.1-18.5-6c-1-8.8,6.7-15.2,8.6-23.3l0-0.2c2.4-8.8-1.3-18.6-8.8-23.8
			c-4.7-3.4-10.5-4.9-15.9-7c-3.9-1.5-7.6-3.2-11.3-5.1c-4-2-7.8-4.3-11.6-6.7c-6.1-4-13.3-8-20.7-5.4c-1.9,0.6-3.8,1.4-5.6,2.4
			c-0.7,3.1-2.9,5.9-7.5,9c-10.8,7.4-13.1,18.9-8,33.1c4.4,12.2,9.6,11.9,19.5,19.5c4.3,3.3,10.4,8.3,16,12.5
			c4.9,2.8,9.8,5.6,12.3,10.7c1.2,2.9,1.4,5.2,0.8,7.1c-0.1,1.7-0.5,3.3-1.2,4.7c-4.2,6.1-17.8,3.9-24.5,4.3c-4.7,0-9.6,0-14.1,1.5
			c-1.2,0.4-2.3,0.9-3.4,1.6c10.6,3.1,20.9,7,31.1,11.1c10.5,4.1,21.3,7.7,31.2,13.2c11.8,6.5,22.5,15.5,32.5,24.2
			C2081.6,1297.2,2085.9,1300.5,2090.6,1302.9z M2355.1,1367.8l-0.1-0.1c-8.5-10.1-23.1-4.9-33.7-1c-6.1,2.2-12,4.9-14.9,10.7
			c-4.4,8.5-2.4,20.3,3.9,27.3c2.7,2.7,6.1,4.2,9.6,5.6c11.7,4.2,31.5,11,41,1.7c5.9-7.6,2.7-20.1,0.5-28.9
			C2359.9,1377.8,2358.6,1372.1,2355.1,1367.8z M2216.2,1199.2l0.2,0.1c8.6,3.3,14.4-3,16.2-10.9c2.8-10.4,1.7-21.3-1.4-31.5
			c-2.2-7.7-4.5-15.7-10.2-21.7c-8.3-9.3-24.2-13.4-27.7,2.3c-2.3,10.9-0.3,22.1,2.7,32.6C2199.6,1181.5,2204.9,1193.9,2216.2,1199.2z
			M2376.1,1274.8l-0.1-0.2c-1.5-2.9-4.2-4.9-6.8-6.8c-4.5-3.1-9.1-6.1-14.1-7.9c-6.1-2.1-12.2-4-18.2-6.4c-5.4-1.9-10.9-4.5-16.7-3.9
			c-10,1.3-11.7,13.9-9.2,22c2.6,10.5,12,14.4,22.1,16.4c6.3,1.4,12.5,2.7,18.9,3.3c7.7,0.4,18.2,0.4,23.4-6.1
			C2377.7,1282.2,2377.8,1278,2376.1,1274.8z"/>
		<path name="Basud" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st1 hover:stroke-green-950" d="M2047.6,1846.6c-2-0.9-4.2-2.4-6.6-4.4c-12.6-10.2-25.2-19.7-37.7-29.8c-20.8-16.7-41.8-33-62.7-49.6
			c-15.6-13.2-31.3-26.3-48.8-37.3l-0.2-0.1c-6.6-4.3-12.5-9.4-19.3-13.4c-4.7-3.1-22.1-11.9-28.7-17.6c9.1,1.4,15.2-3.2,19.1-14.7
			c5.8-16.6,8.6-34.3,11.7-51.6c1.8-11.7,3.8-23.8,2.2-35.7c-3.8-25-21.7-26.3-40.7-34.7c-10.8-5.2-19.7-13.2-30.9-17.7
			c-36-13.5-71.6-28.7-108.1-40.8c-12.5-4.6-28-9.7-17.5-21.1c1.5-1.4,3.2-2.8,4.7-4.2c5.8-4.6,11.6-9.5,17.1-14.3
			c11.8-10.6,23.1-22,35.1-32.3c6.4-5.4,12.3-11.2,18.6-16.7c8-6.8,16.2-13.3,24.7-19.5c8.2-6.2,16.1-12.8,24.2-19.2
			c14-11.4,27.4-23.6,41.4-34.9c12-9.8,24.8-19.4,36.2-30.1c5-4.3,7.9-8.1,8.9-11.7c3.8-4.5,7.5-9,11.7-13.1
			c9.4-9.1,19.7-17.1,30.2-25c15-12.6,23.7-19.6,44.3-13.5c1.9,0.5,3.8,1,5.6,1.6c10.7,3.2,21,7.1,31.3,11.1
			c10.5,4.1,21.3,7.7,31.2,13.2c11.8,6.5,22.5,15.5,32.5,24.2c4,3.6,8.3,6.9,13.1,9.3c10.7,6,28.5,4.1,35,15.3c1,1.8,1.7,3.8,2.1,6.3
			c3.4,26.5-4,54,3.7,80.1c1.6,6.3,4.1,12.4,6.7,18.3c2.7,6.1,3,10.5-0.4,13.4c-1.4,1.3-3.5,2.3-6.4,3.1c-8.1,2.2-16.5,4.2-23.9,8.2
			c-8.6,4.5-16.7,10.7-22.6,17.2c-6.9,7.5-15.4,17.6-12.2,28.5c4.4,12.2,18.3,19.2,18.7,33.7c0.7,9.4-5.2,18.4-2.1,27.6
			c3.4,9.6,13.6,15.4,23.2,17.4c8.8,1.8,18.6,0.2,26.8,2.8c4,1.2,7.6,3.4,10.6,6.4c3.8,3.7,6.8,8.4,10.9,11.8c7.3,6.6,17.8,5.9,27,7.9
			c14,2.4,24,16.5,22.7,30.5c-0.7,8.2-6,14.5-9.8,21.7c-6.2,11.9-6.8,26.4-14.6,37.5c-7.6,10.8-4,16-0.2,27c2.5,8,2.3,16.9,2.1,25.6
			c-0.2,6.8-0.2,13.7-1.6,20.4c-2.7,12.2-10.8,14.4-19.5,15c-0.2,0-0.5,0-0.7,0c-7.4,0.4-15.2,0-20.6,3.7c-0.4,0.3-0.8,0.6-1.1,0.9
			c-0.4,0.5-0.7,1.1-0.9,1.7c-2.3,6.2,6.4,13.5,6.7,19.9c1.1,9-9.7,13-16.9,14.8c-8.6,2.3-17.4,4-26.3,5.1c-11.4,1.2-24.1,2.1-33,9.8
			C2064.6,1843.1,2058.4,1851.6,2047.6,1846.6z"/>
		<path name="San Lorenzo Ruiz" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st2 hover:stroke-green-950" d="M1890.7,1295.2c1.5-5.4-1.5-10.4-8.8-16.7c-8.6-8-17.7-14.9-26.7-22.5c-11.7-10.7-20.2-17.8-36.2-21.1
			c-12.1-2.8-23.8-6.7-34.5,0l-0.1,0.1c-3.4,2-6.6,4.5-10,6.6c-1,0.6-2,1.2-3,1.7c-10.3,5.8-18.7,8.9-24.3,21.4c0,0,0,0,0,0
			c-0.4,1-0.9,2-1.3,3c-4.6,11-7.9,22.7-14.9,32.5c-6.3,9.3-15.8,17.1-23.3,24.3c-6.7,6.2-12.3,13.6-20.4,18.1
			c-10.3,6.2-22.4,5.8-34.4,6.6c-8.4,0.6-17.5,2.1-24.7,5.8c-12.1,6.1-20.4,16.8-32,24.2c-8.6,6-18.2,10.8-27.3,16.2
			c-7.9,4.7-15.5,10.1-23.3,15c-5.4,3.4-11,6.6-16.7,9.5c-15.5,7.8-30.3,16.4-45.9,24.3c-5.2,2.6-21.9,12.5-32,18.3
			c-2.8,1.6-5,2.9-6.4,3.6c-1.9,1.1-1.1,2.5,1,4.2c0.2,0.1,0.4,0.3,0.6,0.4c5.3,3.8,17.2,8.3,20.4,11.1c3.1,2.7,6.4,5.1,9.9,7.2
			c10.6,5.9,21.5,10.9,32.1,17c3.4,1.9,6.9,3.9,10.4,5.6c10.7,5.3,21.7,10.7,31.9,17c13.9,8.6,27.8,16.8,42.3,24.4
			c10.4,5.4,21.1,10.6,31.1,16.9c9.1,5.6,18.1,11.4,27.4,16.6c24.6,13.6,49.3,26.6,73.8,40.2c22.9,13.1,44.9,26.5,67.3,40.4
			c13.1,8.4,26.3,17.2,40.7,23.7c3.7,1.8,7,2.9,10,3.4c9.1,1.4,15.2-3.2,19.1-14.7c5.8-16.6,8.6-34.3,11.7-51.6
			c1.8-11.7,3.8-23.8,2.2-35.7c-3.8-25-21.7-26.3-40.7-34.7c-10.8-5.2-19.7-13.2-30.9-17.7c-36-13.5-71.6-28.7-108.1-40.8
			c-12.5-4.6-28-9.7-17.5-21.1c1.2-1.3,2.8-2.7,4.7-4.2c5.8-4.6,11.6-9.5,17.1-14.3c11.8-10.6,23.1-22,35.1-32.3
			c6.4-5.4,12.3-11.2,18.6-16.7c8-6.8,16.2-13.3,24.7-19.5c8.2-6.2,16.1-12.8,24.2-19.2c14-11.4,27.4-23.6,41.4-34.9
			c12-9.8,24.8-19.4,36.2-30.1c1.1-1,2.1-1.9,3-2.8C1888,1300.8,1889.9,1298,1890.7,1295.2z"/>
		<path name="Daet" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st3 hover:stroke-green-950" d="M2020.2,1220.4c-2.2-1.3-4.7-3-7.3-5c-5.6-4.2-11.7-9.2-16-12.5c-9.9-7.5-15.1-7.3-19.5-19.5
			c-5.1-14.2-2.8-25.7,8-33.1c4.6-3.2,6.8-6,7.5-9c0.9-3.8-0.5-8-2.5-13.9c-3.8-11.1-0.9-26-10.3-34.6l-0.1-0.1
			c-1.3-1.1-2.7-1.8-4-2.4c-9.3-4-18.2,2.9-25.1,10.1c-13.6,12.1-26.9,23.1-41.8,33.7c-28.5,19.6-60,34.2-91.8,47.7
			c-13.1,5.9-25.2,12.4-38.5,17.5c-7.8,2.7-15.7,5.3-23.5,8.2c-2.5,0.9-4.5,0.8-6.1,1.1c0.2,7.1-0.2,14.3,0.1,21.4
			c0.4,11.8,0.1,23.5-2.5,34.7c0.2,0,0.4,0.1,0.5,0.1c5.6-12.4,13.9-15.6,24.3-21.4c1-0.6,2-1.1,3-1.7c3.3-2.2,6.6-4.6,10-6.6l0.1-0.1
			c10.6-6.7,22.4-2.8,34.5,0c16,3.3,24.4,10.4,36.2,21.1c9,7.6,18.1,14.5,26.7,22.5c7.3,6.3,10.2,11.4,8.8,16.7
			c-0.8,2.8-2.7,5.7-5.9,8.8c1.9-0.2,3.8-0.8,5.7-1.9c7.8-5,13.6-12.3,20.6-18.3c10-9.1,20.7-17.3,31.4-25.9
			c14-11.7,19.9-1.4,30.8-5.7c3.1-1.6,5.8-4.7,9.4-6.9c1-0.6,2.2-1.2,3.4-1.6c4.5-1.5,9.4-1.5,14.1-1.5c6.7-0.3,20.2,1.8,24.5-4.3
			c0.7-1.4,1.1-3,1.2-4.7C2026.2,1228.2,2023.8,1222.5,2020.2,1220.4z"/>
		<path name="San Vicente" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st4 hover:stroke-green-950" d="M1747.7,1196.4c-2.2-11.9-11.7-18-20.5-25.3c-6.9-5.6-13.1-12.9-21.9-15.6c-1.2-0.4-2.4-0.7-3.6-0.9
			c-8.4-1.7-17.3-0.8-25.8-0.6c-2,0.1-4,0.3-6,0.4c-1.3,0.1-2.7,0.1-4.1,0.2c-11.4,0.6-23.2,1.6-31.9,7.6c-5.7,3.9-9.4,10.1-11.2,16.8
			c-3.2,11.7-0.8,24.8-5.9,36.2c-2.7,6.6-7.2,12.4-11.4,18.1c-10.3,14-20.1,28.4-29.3,43.2c-9.2,14.7-20.9,27.8-30.7,42.1
			c-21.4,29.3-43.6,57.8-62.9,88.3c-0.3,0.5-0.6,1-1,1.5c-0.1,0.2-0.2,0.3-0.3,0.5c-0.2,0.3-0.4,0.7-0.7,1.1c-0.1,0.2-0.2,0.4-0.4,0.6
			c-0.2,0.3-0.4,0.7-0.6,1.1c-0.1,0.2-0.2,0.4-0.4,0.6c-0.2,0.4-0.4,0.7-0.7,1.1c-0.1,0.2-0.2,0.4-0.3,0.6c-0.3,0.4-0.5,0.9-0.8,1.3
			c-0.1,0.1-0.2,0.3-0.2,0.4c-0.7,1.2-1.4,2.5-2.1,3.8c0,0,0,0,0,0.1c-0.4,0.6-0.7,1.3-1.1,1.9c0,0.1-0.1,0.1-0.1,0.2
			c-0.3,0.6-0.7,1.3-1,1.9c0,0,0,0,0,0.1c-7,12.9-14.4,27.9-21.6,39.1l0,0c10.1-5.8,26.8-15.7,32-18.3c15.6-8,30.4-16.5,45.9-24.3
			c5.7-2.9,11.3-6.1,16.7-9.5c7.8-5,15.3-10.3,23.3-15c9-5.4,18.7-10.2,27.3-16.2c11.6-7.4,19.8-18.1,32-24.2
			c7.2-3.7,16.3-5.2,24.7-5.8c11.9-0.8,24-0.4,34.4-6.6c8.1-4.5,13.7-11.9,20.4-18.1c7.5-7.2,17.1-15,23.3-24.3
			c7-9.8,10.3-21.5,14.9-32.5c0.3-1,0.5-2.1,0.7-3.1c2.5-11.3,2.8-22.9,2.5-34.7c-0.2-7.1,0.2-14.2-0.1-21.4c-0.1-4.1-0.5-8.1-1.3-12
			L1747.7,1196.4z"/>
		<path name="Talisay" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st5 hover:stroke-green-950" d="M1965.6,1077c-3.2-4.8-9.4-5.9-14.8-6.7c-4.5-0.6-8.9-1.7-12.8-3.8c-8-4.7-13.5-12.7-19.5-19.7
			c-9.5-11.9-18.5-24-27.6-36.4c-3.8-5.3-7.6-10.5-11.4-15.7c-2.5-3.4-4.9-7.4-8-10.3c-1.4-1.2-2.7-2-4.2-2.1c-0.6,0-1.2,0-1.8,0.2
			c-2.8,0.9-4.9,4-6.4,6.6c-11.7,19.9-23.3,39.9-34.5,60c-3.6,6.5-7.4,12.8-11.2,19.2c-2.8,4.6-5,9.9-9.1,13.3
			c-5.4,4.7-13.4,3.5-20.2,3.8c-10.6,0.5-21.4,3.4-30.8,8.4c-10,6-18.1,14.8-25.8,23.5l-0.1,0.1c-2.1,2.4-4.1,4.7-6.4,6.9
			c-3.8,3.9-8.3,7.3-11.8,11.2c-1.7,1.9-3.3,4-4.4,6.3c-0.3,0.6-0.6,1.2-0.8,1.8c-1.3,3.3-2,7.1-2.2,11.1c1.2,0.2,2.4,0.5,3.6,0.9
			c8.8,2.7,15,10,21.9,15.6c8.8,7.3,18.3,13.4,20.5,25.3l0,0.2c0.8,3.9,1.2,8,1.3,12c1.7-0.4,3.6-0.3,6.1-1.1
			c7.9-2.9,15.8-5.5,23.5-8.2c13.3-5.1,25.4-11.6,38.5-17.5c31.7-13.5,63.3-28.1,91.8-47.7c14.9-10.6,28.1-21.6,41.8-33.7
			c6.9-7.2,15.8-14.1,25.1-10.1C1973.1,1085.5,1967.3,1079.3,1965.6,1077z"/>
		<path name="Vinzons" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st6 hover:stroke-green-950" d="M1935.7,438.8l0,0.2c1.7,9.5,0.4,17.9-11.6,16.5c-4.4-0.3-9.4-1.2-12-4.4c-3.7-4.9-3.4-12.6,0.9-17
			C1919.9,426.9,1933.7,427.9,1935.7,438.8z M1831.3,910.4c-1.4-3.9-2.7-7.8-6.1-10.2c-8.1-4.9-13,2.5-13.6,10.1
			c-1.1,8.9-0.8,31.9,8.3,36.3c2.9,1.4,6.8,1.2,10.5,1.2c6.2,0.1,10.5-2.7,9.5-9.3l0-0.2C1838.1,928.9,1834.2,919.6,1831.3,910.4z
			M1967.9,328.8c-1.5-2.5-3.7-4.3-6.1-6.1c-5.6-3.9-11.5-8-18.1-10.1c-10.8-3.3-20.2-2.2-26.9-13.3c-2.1-3.2-4.9-6.3-8.3-8.6
			c-4.3-2.7-8.9-5.3-13.5-6.8c-5-1.5-10.5-2.6-13.3-7.5l-0.1-0.1c-3.8-5.5-5.2-14.2-12.2-16.1c-3.2-1-6.7-0.8-10-0.8
			c-5,0.1-11.1-0.5-15.2,2.2c-4.3,3-5.9,10.8-1.2,14.1c2.6,2,7.2,2.4,11.3,3c6.1,0.8,12.6,2,17.3,6.3c3.3,2.9,5.7,6.7,7.3,10.8
			c2.1,5.5,2.7,11.5,6.8,15.7c2.4,2.5,5.6,4.2,8.8,5.8c9.4,4.6,20.5,7.9,30.9,11.6c11.3,3.6,22.4,8.6,34.3,9.6
			C1966.7,339.4,1972.3,336,1967.9,328.8z M1963.2,227.9c4.2-0.5,8.6-1.6,10.9-4.8l0.1-0.1c3.1-4.9,1.6-12.6-1.5-17.3
			c-2.8-4-7.6-5-12.5-5.4c-4.5-0.4-9.1-0.4-12.4,2.5c-4.9,4.4-5.1,12.2-2.3,17.8C1948.6,226.8,1956.6,228.6,1963.2,227.9z
			M1769.2,227.8c6.3,3.2,14.7,2.4,21.6,0.9c6.5-1.6,12.6-4.8,17.6-9.1c10.5-9.1,24-19.3,38.7-14.2c6,2.2,9.2,7.4,14.7,10.6
			c3.1,1.8,7,3.6,10,3.4c4.9-0.4,8.8-4.8,10.8-9.1c3.4-7.4,3.1-16.2,6.4-23.6c1.8-3.7,5.5-4.8,10-5.8c4.1-0.9,8.1-2,12.1-3.4
			c5.8-2,11.6-3.3,13.2-8.9c1-4.9,1.5-12.1-2.5-15.6l-0.1-0.1c-1.6-1.3-3.8-2.1-5.8-2.7c-11.5-3.5-13.2-8.3-8.5-18.5
			c2.4-5,5.3-8.9,9-12.8c6.4-6.3,10.2-11.4,10.9-20.6c0.4-5.4,0.5-11-2.8-14.6c-3.5-3.7-10.7-5.6-15.8-3.8c-3.5,1.2-6.4,3.9-9.8,5.7
			c-2.6,1.4-5.5,2.3-8.1,3.7c-4,1.9-7.4,4.9-10.8,8c-3.2,3.1-6.5,6.2-9,9.9c-4.3,6.3-5.4,14.6-6.4,22.1c-0.6,4.3-0.9,8.5-2.3,12.5
			c-2,5.8-5.8,11.8-11.6,14.5c-6.9,2.6-14.5,1.8-21.7,3.3c-15.1,2.5-12.5,11.7-22.6,16.6c-8.4,3.3-18.8,1.8-26.9,6.3
			c-6.4,3.9-7.1,12.4-9.9,18.9C1766.9,209,1760.3,221.9,1769.2,227.8z M1567.1,160.4c4.7,0.1,10.5-0.6,13.4-4.3
			c4.3-5.7,4.1-13.8,2.5-20.4c-1.8-7.6-6.7-12.6-14.1-14.1c-4.4-1-10.5-2.5-14.2,0.1l-0.1,0.1c-6.5,5.4-4.6,20.8-2.2,28.4
			C1554.4,157.6,1559.8,160.5,1567.1,160.4z M1493.4,336.6c2,8.2,5.8,16.4,8.6,24.5c2.9,7.8,3.7,15.4,8.3,22.3
			c1.6,2.5,3.3,4.5,5.7,5.8c3.1,1.6,7.4,1.9,10.3,0.3c6.7-3.5,5.5-15.6,3.8-21.9c-1.9-6.3-4.7-12.1-8.2-17.4
			c-3.9-5.5-8.3-10.3-12.8-15.1c-3.1-2.8-5.7-6.5-9.6-8.3c-6.7-2.9-7.8,4.3-6.2,9.5L1493.4,336.6z M1834.3,963.4
			c-12.9-1.4-26.2,0.2-39.2-1.2c-15.9-1.4-31.4-5.4-47-8.4c-7.5-0.8-11.2-7.7-1.4-9.6c8.8-1.2,17.8,1.5,26.5,3.3
			c9.6,2.5,20.9,6.1,21.2-8c0.1-11.4,2.5-26-4.4-35.5c-5.3-6-14.8-5-20.4-10.5c-4.9-4.2-8-12.8-2.2-17.3c6.3-3.9,13.6,2.2,20.8,2.4
			c5.5,0.8,29.5,2.2,22.3-7.8c-8.8-5.2-20.5-6.8-30.3-10c-25.2-6.8-47.6-24.1-65-43c-8.4-12.1-17.8-23.8-25-36.8
			c-3.4-7.4-8.6-13.5-13.5-19.8c-8.3-12-14.6-24-27-32.1c-2.2-1.6-4.9-3.6-7.7-4.8c-2.2-0.9-4.5-1.4-6.6-0.7
			c-13.4,6.4-12.4,44.6-9.9,57.6c5.6,10.7,20.5,16.9,21,30.7l0,0.2c1.1,29.7,1.4,59.6,0.5,89.3c-0.8,5.7-3.4,11.5-4.6,17.3
			c20.2,4.5,14.5,20.7,10.9,37.7c-2.7,12.7,9.8,19.9,15.3,29.7c7.6,13.3,5.8,34.2,3.9,49.2c-4,17.2-5,24.9,0.7,41.9
			c4,15.8,2.5,33.1,2.6,49.5c-0.2,8.6,1.1,20.2-5.9,26c0,0.7,0,1.4,0,2.1c2-0.1,4.1-0.2,6-0.4c8.5-0.2,17.4-1.1,25.8,0.6
			c0.2-4,0.9-7.8,2.2-11.1c0.3-0.6,0.5-1.2,0.8-1.8c1-2.3,2.4-4.4,4.4-6.3c3.6-3.9,8-7.3,11.8-11.2c2.2-2.2,4.3-4.5,6.4-6.9l0.1-0.1
			c7.7-8.6,15.8-17.4,25.8-23.5c9.4-5,20.2-8,30.8-8.4c6.8-0.3,14.7,0.9,20.2-3.8c4.1-3.5,6.3-8.8,9.1-13.3
			c3.8-6.3,7.6-12.7,11.2-19.2c11.2-20.1,22.8-40.1,34.5-60c1.6-2.5,3.7-5.7,6.4-6.6c0.4-1.2,0.9-2.3,1.2-3.5
			C1864.2,966.9,1844.5,965.3,1834.3,963.4z"/>
		<path name="Paracale" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st0 hover:stroke-green-950" d="M1279.3,653c4.6,17,9.3,34,13.9,51.1l0,0.2c6.7,25.9,22.4,59.7,15.7,86.2c-5.9,13.9-20.1,21-29.8,31.9
			c-12.6,11.1-6.7,19.2-2.4,32.6c6.1,18.7,13.5,37,22.6,54.5c3.1,7.8,5.4,15.7,8.2,23.6c37.3,0.4,74.6,2.1,111.8,2.7
			c7.2,0,14.4-0.8,21.3-2.7c9-2.4,17.6-7.2,26.6-9.7c10.5-3.3,21.6-2.3,32.1,0.6c19.8,5.4,39,13.2,59.2,17.5
			c9.5,2.2,20.2,2.9,28.4-3.2c5.6-3.9,10.1-10.1,15.7-14.1c10.2-7.6,24.2-7.8,36.3-6.4c1.3,0.2,2.4,0.4,3.5,0.6
			c1.2-5.8,3.8-11.6,4.6-17.3c0.9-29.7,0.6-59.6-0.5-89.3l0-0.2c-0.5-13.8-15.4-20-21-30.7c-2.5-13-3.5-51.2,9.9-57.6
			c2.1-0.6,4.4-0.2,6.6,0.7c0.5-2.8,0.3-5.6-1.5-8.3c-4.1-4.7-10.1-7.9-15.4-11.3c-11.7-7.1-23.8-14.8-37.8-15.3
			c-13.1,0.3-27.6-3.7-39.7,2.5c-13.8,9-23,24.5-38.8,30.8c-13.1,5.3-19-2.8-13.6-15c9.1-22.1-9.9-20.2-25.3-19.1
			c-6.9,0.7-13-4.5-10.1-11.7c1.8-5.7,7.3-9.4,9.5-14.9c2.4-6.2,1.2-14.7,1.4-21.9c0.6-11.6-1.9-20.5-15.2-21.6
			c-35.3-3.2-23.1-8.8-48.1-17.3c-12.9-4.1-25.7-8.8-38-14.5c-12.3-5.3-27.3-13.4-40.2-5.9c-9.9,6-11,19.1-16.5,28.4
			c-6.6,11.5-17.8,16.8-30.4,19.2c-1,0.3-1.8,0.7-2.5,1.2C1272.1,634,1277.8,645.5,1279.3,653z"/>
		<path name="Jose Panganiban" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st7 hover:stroke-green-950" d="M831.6,581.2c4.1,8.2,2.7,18.6,3.2,27.6c2.2,29.6,0.8,59.4,3,89c0.7,14.1,3,28.1,3.9,42.3
			c0.7,24.5-0.5,49.1,3,73.5c0.8,19.5,11.2,70.2-2.4,83.9c0,0.8,0,1.6,0,2.4c5,0.1,10,0.6,15,2.1c4.2,1.1,8.3,2.8,12.4,4.3
			c15.4,5.5,31.9,5.9,47.2,12.3c22.6,8.3,44.5,18.4,68.7,20.3c50.4,6.2,100.6,13.3,150.5,21.9c27.9,6.6,40.8-6.4,63.5-19
			c39-22.6,53.2-8.9,93.6-8.8c4.8,0,9.6,0.1,14.4,0.1c-2.8-7.9-5.1-15.8-8.2-23.6c-9.1-17.5-16.5-35.8-22.6-54.5
			c-4.3-13.4-10.2-21.5,2.4-32.6c9.7-11,23.9-18.1,29.8-31.9c6.7-26.5-9.1-60.4-15.7-86.2l0-0.2c-4.6-17-9.3-34-13.9-51.1
			c-1.5-7.5-7.2-19,0.5-23.8c-7.2-5.6-17.5-9.1-27.4-7.3c-11.4,1.6-15.9-4.8-15.5-15.4c-1.6-15.6,1-31.5-2.9-46.9
			c-1.9-27.1-18.9-25-40-20.2c-42.4,13.6-28-3.5-49.7-13.5c-8.7-1.8-13.9,6.8-21.2,9.7c-8.9,3.6-22.1-0.1-28.6,8.3
			c-12.2,49.9,37.6,84.8,62,121.7c5.4,8.5,14.2,16.4,15,26.8c-3,17-25.7,12.1-35.2,3.6c-15.2-11.6-23.7-33.5-44.3-35.3
			c-12.9-2.9-10.1,11.9-13.1,19.7c-11,21.3-13.6-26.7-23.9-28.7c-24-7.6-14,33.7-10.6,46c7,23.2-23,18.1-33.7,8.4
			c-6.9-5.6-8.9-14.9-11.1-23.1c-4.7-19.8,34.1-11.9,3.5-51.8l-0.1-0.1c-6.4-9.1-1.5-22.2-7.7-31.2c-4.6-4.7-13.6-2.9-14,4.4
			c-3.3,20.8-1.2,42-3.3,62.9c0.6,8-5.3,12.6-13,11.8c-16.9,1.6-62.6-14.3-59.3-34.9c4.3-7,15-8.2,19.1-15.5c9.1-22.5-14-24-30.3-23.6
			c-12.8-0.8-24-7.2-34.9-13.3c-5-0.8-24.4-14.6-36.7-19.6C826.3,574.5,829.4,577.5,831.6,581.2z"/>
		<path name="Labo" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st8 hover:stroke-green-950" d="M1673.2,1076.9c-5.6-17-4.6-24.7-0.7-41.9c1.9-15,3.7-35.9-3.9-49.2c-5.5-9.7-18-17-15.3-29.7
			c3.6-16.9,9.2-33.2-10.9-37.7c-1.1-0.2-2.2-0.5-3.5-0.6c-12.1-1.4-26-1.2-36.3,6.4c-5.6,4-10.1,10.2-15.7,14.1
			c-8.2,6.1-18.9,5.4-28.4,3.2c-20.1-4.3-39.4-12.2-59.2-17.5c-10.5-2.9-21.6-3.9-32.1-0.6c-8.9,2.6-17.6,7.3-26.6,9.7
			c-6.9,2-14.1,2.7-21.3,2.7c-37.3-0.6-74.6-2.3-111.8-2.7c-4.8-0.1-9.6-0.1-14.4-0.1c-40.5-0.2-54.6-13.8-93.6,8.8
			c-22.6,12.5-35.5,25.5-63.5,19c-50-8.7-100.2-15.7-150.5-21.9c-24.2-1.9-46.2-12-68.7-20.3c-15.3-6.3-31.7-6.7-47.2-12.3
			c-4.1-1.4-8.2-3.1-12.4-4.3c-5-1.5-10-2-15-2.1c-1.5,0-3,0-4.5,0.1c-6.8,0.3-13.7,1.2-20.7,1.5c-38.9,2.4-78.1,3.3-117.1,6.2
			c-26.1,1.5-52.3,1.3-78.5,2.2c-4.3,0.1-8.7,0.3-13,0.9c0,0,0,0,0,0c-4.9,0.6-9.7,1.7-14.3,3.4c-14.9,5.8-26.4,17.6-40,25.6
			c-17.3,10.5-29.3,25.8-36.7,44.6c-5.4,13-10.6,26.2-16.5,39.1c-12.1,25.2-23.2,51.1,1.8,69.9c0.9,0.7,1.9,1.4,3,2.1l0.2,0.1
			c7.5,4.8,15.9,7.9,24,11.6c17.6,8.2,35.5,15.2,53.7,21.8c58.7,23.3,116.8,47.9,175.1,72c157.5,64.2,319.6,117.1,475.1,185.9
			c53.9,19.2,106.9,41,159.5,63.6c10.2,4.4,20.5,8.6,31.1,11.6c7.3,2,17.9,6.4,21.4,8.1c0.1-0.1,0.1-0.2,0.2-0.4
			c1.7-2.2,3.4-4.7,5.2-7.4l0,0c7.2-11.2,14.6-26.2,21.6-39.1c0,0,0,0,0-0.1c0.3-0.6,0.7-1.3,1-1.9c0-0.1,0.1-0.1,0.1-0.2
			c0.4-0.7,0.7-1.3,1.1-1.9c0,0,0,0,0-0.1c0.7-1.3,1.4-2.6,2.1-3.8c0.1-0.1,0.2-0.3,0.2-0.4c0.3-0.4,0.5-0.9,0.8-1.3
			c0.1-0.2,0.2-0.4,0.3-0.6c0.2-0.4,0.4-0.7,0.7-1.1c0.1-0.2,0.2-0.4,0.4-0.6c0.2-0.4,0.4-0.7,0.6-1.1c0.1-0.2,0.2-0.4,0.4-0.6
			c0.2-0.4,0.4-0.7,0.7-1.1c0.1-0.2,0.2-0.3,0.3-0.5c0.3-0.5,0.6-1,1-1.5c19.2-30.5,41.5-59,62.9-88.3c9.8-14.3,21.5-27.3,30.7-42.1
			c9.2-14.8,19-29.2,29.3-43.2c4.2-5.7,8.7-11.5,11.4-18.1c5.1-11.4,2.7-24.5,5.9-36.2c1.8-6.7,5.5-12.9,11.2-16.8
			c8.8-6,20.5-7,31.9-7.6c0.2-0.1,0.4-0.1,0.6-0.2c1.3-0.6,2.5-1.3,3.4-2.1c7-5.8,5.8-17.3,5.9-26
			C1675.6,1109.9,1677.2,1092.7,1673.2,1076.9z"/>
		<path name="Capalonga" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st9 hover:stroke-green-950" d="M699.9,907.7c38.9-2.9,78.1-3.9,117.1-6.2c7-0.4,13.8-1.3,20.7-1.5c1.5-0.5,2.8-1.2,4.1-2.1
			c0.1-0.1,0.3-0.3,0.4-0.4c13.6-13.8,3.2-64.4,2.4-83.9c-3.4-24.4-2.2-49-3-73.5c-0.8-14.1-3.1-28.1-3.9-42.3
			c-2.2-29.6-0.8-59.4-3-89c-0.5-9.1,0.9-19.4-3.2-27.6c-2.2-3.7-5.3-6.6-8.8-9.2c-10-7.2-23.9-10.8-33.9-17.3
			c-13.8-7-22.9-20-38-24.1c-14.4-4.7-32,0.2-45.7-6.4c-7.6-3.8-12-11.6-19.1-16.1c-6.8-4.7-18-6.6-24.7-1.6
			c-17,18.4,10.1,38.4,17.9,54.7c10.8,21.7-8.5,27.4-22.5,12.3c-6.9-6.7-12.7-14.5-17.4-22.8c-5.6-12.1-13.5-24.5-26.9-14.2
			c-11,8.3-28,20.7-41.2,10.3c-4.8-4-7.7-10.6-13-14.1c-12-7.6-21,5.7-30.8,11.7c-6.5,4.3-14.3,7-20,12.4c-7.7,7-7.2,19.8-16.2,25.8
			c-13,9.7-40.8,5.9-49.3,21.1c-2.4,5.3-1.6,12.6-5,17.7c-5.3,8.2-16.7,3.9-20.4-3.7c-3.6-5.6-5.7-13.8-9.5-18
			c-11.6-11.7-15.4,8.1-16.5,16.7c-2.3,10.3-7.4,20.1-8.6,30.9c-1.2,20.9-8.9,31.5-27.9,40.4c-19.7,9.9-23.4,9.2-42.8,1.7
			c-8-0.6-10.4,9.4-14.4,14.7c-4.7,7-11.7,11.5-14.8,18.9c-2.6,8.3-14.5,20.2-12.7,28.5c0,0,0,0.1,0,0.1c4.3,0.4,8.3,2.1,11.9,6
			c0.5,0.3,0.8,0.7,0.9,1.1c3.1,3.7,5.6,8.2,8.4,12.3c4.6,7,9.7,13.6,15.4,19.9c7.8,8.8,16.3,17.4,27.5,21.8
			c23.1,8.5,29.4-9.2,45.7-18.8c29-13.6,40.4,33.6,81,32.3c14.2,0.4,31.4-7,43.2,3.8c4.7,4.1,8.1,10.7,12.7,15.3c3.9,4,8.8,6.5,14.2,8
			c23.1,4.7,27.6,8.7,45.2,24.2c5.5,4.7,10.9,9.3,16.4,13.9c3.3,2.8,6.7,6.1,8,9.9c0.5,1.5,9.9,9.2,8.4,9.5h0c4.3-0.6,8.7-0.8,13-0.9
			C647.6,909.1,673.8,909.3,699.9,907.7z"/>
		<path name="Santa Elena" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="st10 hover:stroke-green-950" d="M500.9,1023.5c5.9-12.8,11.1-26,16.5-39.1c7.4-18.8,19.5-34.2,36.7-44.6c13.6-8.1,25.1-19.9,40-25.6
			c4.6-1.7,9.4-2.8,14.3-3.4c0,0,0,0,0,0c1.4-0.3-7.9-8-8.4-9.5c-1.2-3.8-4.7-7.1-8-9.9c-5.5-4.6-10.9-9.3-16.4-13.9
			c-17.6-15.5-22.1-19.5-45.2-24.2c-5.4-1.5-10.3-4-14.2-8c-4.6-4.6-8-11.1-12.7-15.3c-11.8-10.8-29-3.3-43.2-3.8
			c-40.6,1.3-51.9-45.9-81-32.3c-16.3,9.6-22.6,27.3-45.7,18.8c-11.2-4.3-19.8-13-27.5-21.8c-5.7-6.3-10.8-12.9-15.4-19.9
			c-2.8-4.2-5.2-8.7-8.4-12.3c-0.3-0.4-0.6-0.7-0.9-1.1c-3.5-3.9-7.5-5.6-11.9-6c-6.3-0.6-13.2,1.7-20.2,4.1
			c-10.4,2.9-21.7,7.6-21.2,20.3c0.1,13.4,10.8,22.3,16.8,33.5c3.4,6.6,5.2,13.9,8.3,20.5c5.9,12.8,17.2,21.9,26.5,32
			c14.8,14.8,1.1,23.6-15.1,22c-7.8-0.7-14.4-4.7-21-8.9c-6.8-4.4-13.8-8.7-19-14.7c-4.5-4.9-8.2-11.1-14.6-13.6
			c-6.4-2.8-13.8,1.1-16.2,7.5c-2.8,7-2,17.9-0.1,26.1c1.8,7.4,7.5,12.5,14.3,15.8c17.3,7.3,18.9,20.7,14.9,37.8
			c-1.6,7.1-4.1,14.7-9.5,19.8c-8.4,8.2-20.4,4.8-24.5-5.7c-3.1-6.9-3.5-16-6.9-22.7c-3.8-8.3-13.7-13.7-22.6-11.2
			c-18.7,5.7-8.2,38.3-7.6,53c1.3,14.2-2.1,28.1-1.5,42.3c0.6,14.7,1.5,29.3,2.2,44c0.3,6.3,1,13.3,4.6,18.5
			c5.1,7.5,13.9,9.6,22.2,13.3c20.6,8.5,32.5,22.3,21.5,44.5c-4.6,9-8.8,20.7-16.1,27.4c-7.8,7.1-15.5-2.1-20.5-8.1
			c-5.6-6.7-13.6-11.8-21.9-15.1c-7.2-3.2-16.8-4.8-21.6,3c-2.1,3.1-3.6,7.1-4.8,10.8c-4.2,12.2-9.3,23.9-14.3,35.6
			c-6.3,14.8-12.6,30-16.5,45.9c-3.8,15.2-10.2,30.5-4.2,45.8c3.4,9.9,7.6,20.2,15.3,27.6c13.3,11.6,32.3,16.2,49.5,18.8
			c31.4,3.4,63.6,4.5,94.9-0.7c17.2-2.9,33.9-7.9,50.3-13.6c9-3.1,17.9-6.5,26.7-10.3c5.7-2.5,11.6-5.6,15.9-10
			c8-7.9,10.8-19.3,15-29.9c5.4-14.2,11.1-28.7,19.9-40.9l0.1-0.2c23.8-34.3,56-60.9,87.8-87.5c6.6-5.9,13-12.6,19.7-18.5
			c6.1-5.8,7.3-4.4,16.6-10.2c1.4-0.9,9.8-4.5,9.8-6.2c0,0,0,0,0,0C477.7,1074.6,488.8,1048.8,500.9,1023.5z"/>
		</svg>
		</div>
	</div>
</section>
  )
}

export default About