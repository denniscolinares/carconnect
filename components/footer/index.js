"use strict";

import { Fragment } from "react";

import styles from "@/components/footer/footer.module.scss";
import PropTypes from "prop-types";

const FooterComponent = (props) => {
	
	return (
			<Fragment>
				<footer className={styles.footerComponent}>
					<div className="bg-contactUs h-22 py-1.5 md:px-12 md:py-2">
					
					</div>
				</footer>
			</Fragment>
	);
};

FooterComponent.defaultProps = {

};

FooterComponent.propTypes = {
	
};


export default FooterComponent;
