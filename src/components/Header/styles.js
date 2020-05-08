import styled from "styled-components";

export { Container, Top, Title };

const Container = styled.View`
	align-items: center;
	padding-top: 40px;
	padding-horizontal: 0;
	padding-bottom: 0;
`;

const Top = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`;

const Title = styled.Text`
	font-size: 18px;
	color: #fff;
	font-weight: bold;
	margin-left: 8px;
`;
