import React from "react";
import { Container } from "../../globalStyles";
import "./style.css";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="item">
        <button onClick={(e) => this.togglePanel(e)} className="collapsible">
          {this.props.title}{" "}
        </button>
        <div className="contentdd">
          {this.state.open ? <div>{this.props.text}</div> : null}
        </div>
      </div>
    );
  }
}

class DropdownSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsList: [
        {
          title: "How many travel vaccines can I take at one time?",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        },
        {
          title: "How many travel vaccines can I take at one time?",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        },
        {
          title: "How many travel vaccines can I take at one time?",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        },
        {
          title: "How many travel vaccines can I take at one time?",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        },
      ],
    };
  }
  render() {
    const list = this.state.questionsList;
    const half = Math.floor(list.length / 2);
    return (
      <div>
        <Container>
          <h2 className="faqhead">Problem with Conventenial</h2>
          <div className="wrapper">
            <div className="col">
              {list &&
                list.length > 0 &&
                list.map((item, i) =>
                  i < half || i >= half ? (
                    <Collapsible title={item.title} text={item.text} />
                  ) : null
                )}
            </div>
            {/* <div className="col">
              {list &&
                list.length > 0 &&
                list.map((item, i) =>
                  i >= half ? (
                    <Collapsible title={item.title} text={item.text} />
                  ) : null
                )}
            </div> */}
          </div>
        </Container>
      </div>
    );
  }
}

export default DropdownSection;
