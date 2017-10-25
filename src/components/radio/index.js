import { h, Component } from 'preact';
import style from './style';

export default class Radio extends Component {
	render() {
		const {name, value, text, action } = this.props;
		return (
			<div class={style.radio}>
    			<input id={value} type="radio" name={name} value={value} onChange={e => action(value)} />
    			<label for={value}>{text}</label>
			</div>
		);
	}
}