import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
	<div className='tc'>
		<h1 className=''>Space KC Clone</h1>
		<IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
			{' · '}
		<Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
			{' · '}
		<Link to='/HomeView2' activeClassName=''>New page</Link>
		<div className='page-layout__viewport'>
			{children}
		</div>
	</div>
)
PageLayout.propTypes = {
	children: PropTypes.node,
}

export default PageLayout
