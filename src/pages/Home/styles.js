import styled from "styled-components";

export const Container = styled.View`
	flex: 1;
	background-color: #eee;
`;

export const Header = styled.View`
	background-color: #0079d3;
	height: 40px;
	padding-left: 10px;
`;

export const Logo = styled.Text`
	color: #fff;
	font-size: 28px;
`;

export const Description = styled.Text`
	color: #ffffff8e;
	font-size: 10px;
`;

export const CardDetails = styled.View`
	background-color: #202020;
	height: 15px;
	border-bottom-width: 1px;
	border-bottom-color: #ffffff1e;
`;

export const CardDetailsText = styled.Text`
	color: #ffffff8e;
	font-size: 10px;
	margin-left: 5%;
`;

export const ListaCards = styled.View`
	background-color: #fff;
	flex: 1;
`;

export const Botao = styled.View`
	border: 2px solid white;
	border-radius: 4px;
`;

export const ButtonContainer = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	background-color: #fff;
	height: 100px;
	width: 74%;
`;

export const ButtonText = styled.Text`
	color: #444;
	padding: 3%;
`;
