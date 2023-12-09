import { Component } from "react";
import "./App.css";

class VoteButton extends Component {
  onTrigger = () => {
    this.props.parentCallback("vote");
  }

  render() {
    return(
      <button className="voteBtd" onClick={this.onTrigger}>Click to Vote</button>
    )
  }
}

class UnvoteButton extends Component {
  onTrigger = () => {
    this.props.parentCallback("unvote");
  }

  render() {
    return(
      <button className="voteBtd" onClick={this.onTrigger}>Click to Unvote</button>
    )
  }
}

class FoodBox extends Component {
  state = {
    voteValue: 0
  }

  handleVote = (action) => {
    if (action === 'vote') {
      if (this.state.voteValue < 10) {
        this.setState({ voteValue: this.state.voteValue + 1 });
      }
      else {
        alert("Cannot Vote more");
      }
    } else if (action === 'unvote') {
      if (this.state.voteValue > 0) {
        this.setState({ voteValue: this.state.voteValue - 1 });
      }
      else {
        alert("Cannot unvote");
      }
    }
  }

  render() {
    var output = "";
    if (this.state.voteValue === 0) {
      output = "MIN";
    }
    else if (this.state.voteValue === 10) {
      output = "MAX";
    }
    else {
      output = this.state.voteValue;
    }

    return(
      <div className="box">
        <div className="content">
          <div className="info">
            <h2>{this.props.title}</h2>
            <h3>{this.props.name}</h3>
            <p>{this.props.info}</p>
          </div>
          <img className="image" src={this.props.picSrc} alt={this.props.picName} width="300" />
        </div>
        <div className="vote">
          <VoteButton parentCallback={this.handleVote} />
          <div className="number"><b>{output}</b></div>
          <UnvoteButton parentCallback={this.handleVote} />
        </div>
      </div>
    )
  }
}

class MainPage extends Component {
  render() {
    return(
      <div>
        <h1>โหวตอาหาร</h1>
        <FoodBox title="อาหารคาว" name="ข้าวผัด" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis posuere massa. Sed eu venenatis dolor. Nullam et nibh pulvinar lacus vulputate aliquet sed ut metus. Mauris quis nunc at ex gravida consequat quis et ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." picSrc="https://sgp1.vultrobjects.com/img-in-th/UWrJuJ.jpeg" picName="Fried Rice"/>
        <FoodBox title="อาหารหวาน" name="ขนมชั้น" info="Nam efficitur mauris vitae libero varius facilisis. Nunc in rhoncus risus. Phasellus cursus ipsum quis mattis accumsan. Suspendisse ac dolor a arcu vulputate suscipit. Maecenas facilisis enim quis mollis rhoncus. Etiam rhoncus consequat malesuada. Aliquam lacinia vestibulum neque, in finibus velit dictum id. Donec et dictum urna. Nam eleifend non turpis vel fermentum. " picSrc="https://sgp1.vultrobjects.com/img-in-th/UWrUMy.jpeg" picName="Steamed Pandan Layer Cake"/>
      </div>
    )
  }
}


export default MainPage;
