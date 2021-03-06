import styled from 'styled-components';


export const FooterBar = styled.footer`
	width: 100%;
	height: 180px;
	padding: 20px;
	/* background-color: var(--backgroundElements); */
	background-image: var(--backgroundImage);
	background-size: 512px;
	background-repeat: no-repeat;
	background-position: left;
	background-color: var(--backgroundElements);


	div {
		max-width: 260px;
		margin: 0 auto;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		
		h3 {
			margin-bottom: 1em;
			color: var(--colorDark);
			transition: 0.8s;
			
			&:hover {
				color: var(--colorDefault);
			}
		}
		
		p {
			margin-top: 1em;
			color: var(--colorDark)
			
			span {
				font-weight: bold;
			}
		}
		
		ul {
			margin-top: 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			li {
				list-style: none;
				margin: 0 1em;
				padding: 5px;
				font-size: 32px;

				a {
					text-decoration: none;
					color: var(--colorDark);
					cursor: pointer;
					transition: 0.8s;
				
					&:hover {
						color: var(--colorDefault)
					}				
				}
			}
		}
	}
`;