import { h, Component } from 'preact';
import style from './style';
import { db } from '../../components/firebase';
import Radio from '../../components/radio';
import Button from '../../components/button';

export default class Question extends Component {
	state = {question: {answers: {}}};

	componentDidMount() {
		const ref = db.ref("questions");

		ref.on("value", data => {
			const questions = data.val();
			const questionKeys = Object.keys(questions);
			const activeQuestion = questionKeys.filter(key => {return questions[key].active === true})[0];
			this.setState({questionToDisplay: activeQuestion, question: questions[activeQuestion]});
		});
	}
	render() {
		const questionView = <div class={style.question}>
				<h2>{this.state.question.text}</h2>
				{Object.keys(this.state.question.answers).map(answer => <Radio key={answer} name={this.state.questionToDisplay} action={this.setVote.bind(this)} text={this.state.question.answers[answer].text} value={answer} />
				)}
				<Button disabled={!this.state.vote} action={this.vote.bind(this)}>Submit</Button>
			</div>;

		const resultsView = <div class={style.question}>
			</div>;

		return this.state.showResults ? resultsView : questionView;
	}

	setVote(vote) {
		this.setState({vote});
	}

	vote() {
		console.log(this.state);

		const vote = db.ref(`questions/${this.state.questionToDisplay}/answers/${this.state.vote}/votes`).push();

		vote.set({voted: true});

		localStorage.setItem(this.state.questionToDispaly, "true");
		
		this.setState({showResults: true});
	}

}

