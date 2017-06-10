import React from 'react'
import MemeImage from '../assets/KasumiDisgust.png'
import './HomeView2.scss'

export const HomeView2 = () => (
	<div className='wholeScreen'>
		<div className=''>
			<div className='mainDisplay inblock'>
				<img src={MemeImage} />
			</div>
			<div className='rightSideBar inblock' >Testing the layout</div>
		</div>
		<div className='bottomBar inblock' >???? layout</div>
	</div>
)
//      <img src="http://danbooru.donmai.us/data/__kasumi_kantai_collection_drawn_by_kaeru_ka_l__cc1322b601d4f6d9d2a1393bf6084c20.png" />

export default HomeView2
