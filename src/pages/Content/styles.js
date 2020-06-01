import styled from "styled-components";

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #eee;
`;

export const Image = styled.View`
    height: 420px;
    flex 1;
    padding:2%;
`;

export const ContentImage = styled.Image`
	height: 100%;
	width: 100%;
	margin-top: 1%;
`;

export const Header = styled.View`
	height: auto;
	flex: 1;
	padding: 15px 10px;
`;

export const Title = styled.Text`
	font-size: 16px;
	color: #000;
	font-weight: bold;
`;

export const Body = styled.View`
	height: auto;
	flex: 1;
	padding: 15px 10px;
`;
