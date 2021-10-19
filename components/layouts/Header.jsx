import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

export default function Header() {
	return (
		<div>
			<ProSidebar breakPoint='md'>
				<Menu>
					<MenuItem>Dashboard</MenuItem>
					<MenuItem>Component 1</MenuItem>
					<MenuItem>Component 2</MenuItem>
				</Menu>
			</ProSidebar>
		</div>
	);
}
