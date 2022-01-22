import styled from 'styled-components';

export const Container = styled.header`


	width: 100%;
	height: 60px;
	margin-top: 30px;

	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: var(--backgroundElements);

	@media (max-width: 768px){
		font-size: 1rem;
	}
`;