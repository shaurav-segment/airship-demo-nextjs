import { Component } from "react"

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: "",
            statusMessage: "Input a new userId and click 'Register' to get started"
        }
    }

    componentDidMount () {
        if(!!window.UA) {
            window.UA.then(sdk => {
                sdk.register();
                //console.log(sdk.channel.id);
            });
            console.log("UA loaded");
        } else {
            console.log("UA not loaded");
        }
    }

    handleUserIdChange = (e) => {
        this.setState({ user_id: e.target.value });
    }

    register = (e) => {
        let { user_id } = this.state;
        if(!!window.UA) {
            window.UA.then(sdk => {
                if(!!sdk.channel.id) {
                    sdk.channel.namedUser.set(user_id);
                    sdk.addEventListener('push', e => {
                        console.log(e);
                        this.setState({
                            statusMessage: `Received message with title: ${e.push.title} and body: ${e.push.body}`
                        })
                    });
                    this.setState({ statusMessage: `${user_id} is registered. Waiting for message` })
                }
                else
                    console.log("UA channel not registered");
            });
        }
        else {
            console.log("UA not loaded at registration time");
        }

        
    }

    render() {
        let {user_id, statusMessage } = this.state;
    return (
        <div>
            <h1>Welcome to AirShip Demo</h1>
            <form>
                <input type="text" id="user_id" value ={user_id} onChange={this.handleUserIdChange}></input>
            </form>
            <button onClick={this.register}>Register</button>
            <div>
                <h3> {statusMessage} </h3>
            </div>
        </div>
    )
  }
}