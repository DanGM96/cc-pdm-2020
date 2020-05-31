import styled from "styled-components";

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #eee;
`;

export const Imagem = styled.View`
    height: 420px;
    flex 1;
    background-color: #353535;
    padding:2%;
`;

export const CardImage = styled.Image`
	height: 100%;
	width: 100%;
	margin-top: 1%;
`;

export const Detalhes = styled.View`
	background-color: #0079d3;
	height: auto;
	flex: 1;
	padding: 15px 10px;
`;

export const Name = styled.Text`
	font-size: 30px;
	color: #fff;
`;

export const Effect = styled.Text`
	color: #fff;
`;

export const Type = styled.Text`
	font-size: 16px;
	color: #ffffff8e;
`;

export const MonsterDetails = styled.Text`
	color: #ffffff8e;
	font-size: 12px;
`;

export const PriceDetails = styled.View`
	border-top-width: 1px;
	border-top-color: #ce324f;
	background-color: #353535;
	height: auto;

	padding: 20px 10px;
	border-bottom-width: 1px;
	border-bottom-color: #ce324f;
`;

export const Website = styled.View`
	background-color: #353535;
	height: auto;
	flex: 1;
	flex-direction: row;
	border-bottom-width: 1px;
	border-bottom-color: #ffffff8e;
`;

export const WebsiteName = styled.Text`
    color: #fff;
    flex: 1
    text-align: left;
    font-size: 16px;
`;

export const Price = styled.Text`
    flex: 1
    font-size: 16px;
    text-align: right;
    color: green;
`;
