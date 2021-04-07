import React, { useState, useEffect, useMemo } from "react";
import { Button } from "react-native";
import Constants from "expo-constants";
import socketio from "socket.io-client";

import { Container } from "./styles";
import OrderStatus from "../../components/OrderStatus";

const Main = () => {
	const [orderStatus, setOrderStatus] = useState(0);

	const { manifest } = Constants;
	const uri = `http://${manifest.debuggerHost.split(":").shift()}:3000`;

	const socket = useMemo(() => socketio(uri), []);

	useEffect(() => {
		socket.on("status", (status) => {
			console.log("novo status", status);
			setOrderStatus(status);
		});
	}, [socket]);

	function buy() {
		//Fazer um novo pedido
		console.log("Pedido realizado");
		socket.emit("new_order");
	}

	return (
		<Container>
			<Button
				title="Fazer pedido"
				disabled={orderStatus !== 0}
				onPress={() => buy()}
			/>
			<OrderStatus title="Pedido recebido" isChecked={orderStatus >= 1} />
			<OrderStatus
				title="Pedido está sendo preparado"
				isChecked={orderStatus >= 2}
			/>
			<OrderStatus title="Pedido à caminho" isChecked={orderStatus >= 3} />
			<OrderStatus title="Pedido entregue" isChecked={orderStatus >= 4} />
		</Container>
	);
};

export default Main;
