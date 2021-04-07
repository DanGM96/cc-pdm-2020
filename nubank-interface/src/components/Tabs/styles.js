import styled from "styled-components";

export { Container, TabsContainer, TabItem, TabText };

const Container = styled.View`
	height: 100px;
	margin-top: 20px;
	margin-bottom: 15px;
`;

// ScrollView é muito dependente de atributos...
const TabsContainer = styled.ScrollView.attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		paddingLeft: 10,
		paddingRight: 20,
	},
})``;

const TabItem = styled.View`
	width: 100px;
	height: 100px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 3px;
	margin-left: 10px;
	padding: 10px;
	justify-content: space-between;
`;

const TabText = styled.Text`
	font-size: 13px;
	color: #fff;
`;
