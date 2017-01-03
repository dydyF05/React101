import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"footer": "Homemade footer"
		}
	}
	render() {
		return (
			<div>
				{/* MultiLine
				Comment */}
				<Header/>
				<Content/>
				<footer>{this.state.footer}</footer>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		const headerStyle = {
			position: "fixed",
			width: "100%",
			top: 0,
			left: 0,
			height: 45,
			display: "flex",
    	alignItems: "center",
    	justifyContent: "center",
    	flexDirection: "column"
		}
		const style = {
			fontSize: 30,
			color: "blue",
			height: "100%",
			margin: "0 auto",
			display: "flex",
    	alignItems: "center",
    	justifyContent: "center",
    	flexDirection: "column"
		}
		return (
			<header style={headerStyle}>
				<h1 style={style} >Main title</h1>
			</header>
		);
	}
}

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: 0,
			inputVal: "chibar"
		}
		this.setNewNumber = this.setNewNumber.bind(this)
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
		this.inputChangeHandler = this.inputChangeHandler.bind(this)
	}
	componentWillMount() {
		console.log('Content WILL MOUNT!')
	}

	componentDidMount() {
		console.log('Content DID MOUNT!')
	}

	componentWillReceiveProps(newProps) {    
		console.log('Content WILL RECIEVE PROPS!')
	}

	shouldComponentUpdate(newProps, newState) {
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('Content WILL UPDATE!');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Content DID UPDATE!')
	}

	componentWillUnmount() {
		console.log('Content WILL UNMOUNT!')
	}
	setNewNumber() {
		this.setState({data: this.state.data + 1})
	}	
	forceUpdateHandler() {
		this.forceUpdate()
	}
	inputChangeHandler(e) {
		this.setState({inputVal: e.target.value})
	}
	render() {
		const style = {
			fontSize: 35,
			color: "skyblue",
			border: "1px solid #C09F03"
		}
		return (
			<div>
				<h2 onClick={this.setNewNumber} style={style} className="helloClass">val: {this.state.inputVal}</h2>
				<input type="text" value={this.state.inputVal} onChange={this.inputChangeHandler}/>
				<p id="inputView">Loreum whatever</p>
				<h5>Random number: {Math.random()}</h5>
				<button onClick={this.forceUpdateHandler}>Force update</button>
				<DTable/>
				<ChangingDiv
					myNumber = {this.state.data}
				/>
			</div>
		);
	}
}

class DTable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{
					"id": "1",
					"name": "foo",
					"age": "22"
				},
				{
					"id": "2",
					"name": "bar",
					"age": "23"
				},
				{
					"id": "3",
					"name": "tym",
					"age": "82"
				}
			]
		}
		this.setStateHandler = this.setStateHandler.bind(this);
	}

	setStateHandler() {
		const item = {id: 5, name: "hello moto", age: 99}
		const arr = this.state.data
		arr.push(item)
		this.setState({data: arr})
	}
	
	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>name</th>
							<th>age</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map( (p, i) => <DTableRow key={i} data={p}/> )}
					</tbody>
				</table>
				<button onClick={this.setStateHandler}>Set State</button>
			</div>
		)
	}
}

class DTableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		)
	}
}

class ChangingDiv extends React.Component {
	constructor(props) {
		super(props);
		this.findDomHandler = this.findDomHandler.bind(this)
	}
	componentWillReceiveProps({myNumber}) {    
		console.log('ChangingDiv WILL RECIEVE PROPS!');
		const d = document.getElementById("changingDiv");
		const c = ReactDom.findDOMNode(d);
		c.innerHTML = `Content state data received in ChangingDiv: ${myNumber}`;
	}
	findDomHandler() {
		const d = document.getElementById("changingDiv");
		const c = ReactDom.findDOMNode(d).style.background;
		ReactDom.findDOMNode(d).style.background = ( c === "skyblue" ) ? "green" : "skyblue";
	}
	render() {
		const style = {
			height: 100,
			width: 300,
			background: "skyblue"
		}
		return (
			<div>
				<div id="changingDiv" onClick={this.findDomHandler} style={style}></div>
			</div>
		)
	}
}

export default App;