import React from 'react';
import styled from 'styled-components';
import logo from '../navbar/SlackLogo.PNG';

const Sidebar = () => {
	return (
		<StyledSideBar>
			<div>
				<h1>Welcome</h1>
				<img src={logo} alt="slack logo" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam provident facilis debitis id!
					Magnam provident reprehenderit nobis tempora quod dolorum tenetur natus quo? Unde, ullam. Non
					voluptate est nisi!
				</p>
			</div>
		</StyledSideBar>
	);
};

export default Sidebar;

export const StyledSideBar = styled.div`
	height: 100%;
	width: 400px;
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	background-color: #ffffff;
	border-left: 1px solid #583753;
	box-shadow: -4px 0px 48px -6px rgba(0, 0, 0, 0.75);
	padding: 20px;
	overflow-x: hidden;
`;
