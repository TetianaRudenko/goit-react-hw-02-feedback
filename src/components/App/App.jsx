import React, { Component } from 'react';
import { FeedbackWrap } from "./App.styled";
import { Section } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Notification } from "../Notification/Notification";

export class App extends Component  {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = option => {
    this.setState(state => {
      return {
        [option]: state[option] + 1,
      }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good / (good + neutral + bad)) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <FeedbackWrap>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statictics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} />
        </Section>
        
        <Notification message="There is no feedback" total={total}/>

      </FeedbackWrap>
    );
  }
}
