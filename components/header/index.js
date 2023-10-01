"use strict";

import {Fragment} from "react";
import Image from 'next/image';
import PropTypes from "prop-types";

import styles from "@/components/header/header.module.scss";

const HeaderComponent = (props) => {
	
	return (
			<Fragment>
				<header className={styles.headerComponent}>
					
					<div className="h-22 left-0 right-0 top-0 z-50 flex flex-col bg-white shadow-sm transition-all lg:h-29 md:h-29">
						<div className="bg-contactUs py-1.5 md:px-12 md:py-2">
							<div className="align-center container mx-auto flex justify-center h-7 lg:justify-end"></div>
						</div>
						
						<div className="flex grow items-center justify-center bg-white md:py-3 xl:py-4">
							<div className="container mx-auto">
								<Image
										src="/carconnect.svg"
										width={250}
										height={37}
										alt="Picture of the author"
								/>
							</div>
						
						</div>
						
						
					</div>
					
				</header>
			</Fragment>
	);
};

HeaderComponent.defaultProps = {
	
};

HeaderComponent.propTypes = {

};


export default HeaderComponent;
