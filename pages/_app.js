import React from 'react'
import App from 'next/app'
import '../styles/styles.scss'
import Head from 'next/head'

import Sidebar from '../components/sidebar'

class Layout extends App {

	render() {
	
	const { Component, pageProps } = this.props
	return (
		<section className={`layout__wrapper`}>
			<Head>
				<title>Hire Me - Tim Lentz</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<script src="https://kit.fontawesome.com/e7539705e5.js" Secure sameSite="None" crossOrigin="anonymous"></script>
			</Head>
			<section className={`layout__nav`}>
				<Sidebar />
			</section>
			<section className={`layout__content`}>
				<Component {...pageProps} />
			</section>
		</section>
	)

	}
}

export default Layout
