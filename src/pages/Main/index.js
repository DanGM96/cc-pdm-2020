import React from "react";
import Icon from "@expo/vector-icons/MaterialIcons";

import {
	Container,
	Content,
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	Title,
	Description,
	Annotation,
} from "./styles";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

export default function Main() {
	return (
		<Container>
			<Header />
			<Content>
				<Card>
					<CardHeader>
						<Icon name="attach-money" size={28} color="#666" />
						<Icon name="visibility-off" size={28} color="#666" />
					</CardHeader>
					<CardContent>
						<Title>Saldo disponível</Title>
						<Description>R$ 12.345.678,90</Description>
					</CardContent>
					<CardFooter>
						<Annotation>
							Trasnferência de R$ 1.234,00 recebida de Lucas Moura hoje às
							09:00h
						</Annotation>
					</CardFooter>
				</Card>
			</Content>
			<Tabs />
		</Container>
	);
}
