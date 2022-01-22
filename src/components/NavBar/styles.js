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
`;