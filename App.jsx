import React from 'react';

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
	render() {
		const style = {
			fontSize: 35,
			color: "skyblue"
		}
		return (
			<div>
				<h2 style={style} className="helloClass">Subtitle {4%2}</h2>
				<p data-myAttr="test">Loreum whatever</p>
				<DTable/>
			</div>
		);
	}
}

class DTable extends React.Component {
	constructor() {
		super();

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
	}
	render() {
		return (
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

export default App;