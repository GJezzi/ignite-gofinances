import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Title, Icon, Button } from './styles';

interface Props extends RectButtonProperties {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const icons = {
	up: 'arrow-up-circle',
	down: 'arrow-down-circle',
};

export const TransactionTypeButton = ({
	title,
	type,
	isActive,
	...rest
}: Props) => {
	return (
		<Container isActive={isActive} type={type}>
			<Button {...rest}>
				<Icon name={icons[type]} type={type} />
				<Title>{title}</Title>
			</Button>
		</Container>
	);
};
