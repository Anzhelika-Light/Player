import React, { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

// Робимо localStorage_key константою, щоб не шукати потім по проекту
const LS_KEY = 'reader_item_index';

export default class Reader extends Component {
  state = {
    index: 0,
  };
  componentDidMount = () => {
    const savedState = localStorage.getItem(LS_KEY);
    // Робимо, тільки якщо savedState не null, тобто щось збережено в localStorage, це не перше відкриття
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  };

  changeIndex = value => {
    this.setState(prevState => ({
      index: prevState.index + value,
    }));
  };

  //   Замість 2 методів - 1 onChange
  //   onPrev = () => {
  //     this.setState(prevState => ({
  //       index: prevState.index - 1,
  //     }));
  //   };

  //   onNext = () => {
  //     this.setState(prevState => ({
  //       index: prevState.index + 1,
  //     }));
  //   };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const currentItem = items[index];
    const totalItems = items.length;
    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={index + 1} total={totalItems} />
        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}
