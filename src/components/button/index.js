import { h, Component } from 'preact';
import style from './style';

export default class Button extends Component {
	render() {
		const {children, action, disabled} = this.props;
		return (
			<button disabled={disabled} onClick={action} class={style.button}>{children}</button>
		);
	}
}
