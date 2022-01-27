import styled from 'styled-components';

export const Container = styled.nav`
	margin-right: 10px;

	ul{
		max-width: 320px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		li{
			list-style: none;

			a {
				padding: 1em;
				font-size: 1.1em;
				text-decoration: none;
				color: var(--colorDark);

				&:hover{
				color: var(--colorDefault);
				}    
			}
		}    
	}

	@media(max-width: 720px){
		ul{
			visibility: hidden;
		}
	}
}

`;

export const MenuIcon = styled.div`
	position: absolute;
	visibility: hidden;
	width: 40px;
	height: 40px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 22px;
	border-radius: 50%;
	background-color: #00a1b3;
	margin-top: -9px;
  margin-left: 229px;
	cursor: pointer;

	@media(max-width: 720px){
			visibility: visible;
	}

	@media(max-width: 500px){
			margin-left: 200px;
	}

	@media(max-width: 430px){
			margin-top: 0px;
			margin-left: 190px;
	}
`;
