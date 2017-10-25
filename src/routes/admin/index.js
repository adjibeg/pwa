import { h, Component } from 'preact';
import style from './style';
import { db } from '../../components/firebase';
import Radio from '../../components/radio';
import Button from '../../components/button';


export default class Admin extends Component {
	
	state = {questions: []};
	componentDidMount() {
		const ref = db.ref("questions");

		ref.on("value", data => {
			const questions = data.val();
			const questionKeys = Object.keys(questions);
			this.setState({questions: questionKeys});
		});
	}
	render() {
		return (
			<div class={style.admin}>
				{this.state.questions.map(question =>
					<Button key={question} action={this.setQuestion.bind(this, question)}>{question}</Button>
				)}
			</div>
		);
	}

	setQuestion(q) {
		console.log(q);
	}
}

