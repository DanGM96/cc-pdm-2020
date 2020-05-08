import styled from "styled-components";

export {
	Container,
	Content,
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	Title,
	Description,
	Annotation,
};

const Container = styled.View`
	flex: 1;
	background-color: #8b10ae;
`;

const Content = styled.View`
	flex: 1;
	max-height: 400px;
	justify-content: center;
`;

const Card = styled.View`
	flex: 1;
	background-color: #fff;
	border-radius: 4px;
	margin-horizontal: 20px;
	margin-vertical: 0;
`;

const CardHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
`;

const CardContent = styled.View`
	flex: 1;
	padding-vertical: 0;
	padding-horizontal: 30px;
	justify-content: center;
`;

const CardFooter = styled.View`
	padding: 30px;
	background-color: #eee;
	border-radius: 4px;
`;

const Title = styled.Text`
	font-size: 13px;
	color: #999;
`;

const Description = styled.Text`
	font-size: 32px;
	margin-top: 3px;
	color: #333;
`;

const Annotation = styled.Text`
	font-size: 13px;
	color: #333;
`;
