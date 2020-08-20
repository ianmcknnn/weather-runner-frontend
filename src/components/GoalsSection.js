import React from 'react'
import ProgressDonut from './ProgressDonut'
import { Button, Statistic } from 'semantic-ui-react';

class GoalsSection extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="goal-progress">
        <div className="progress-donut">
          <ProgressDonut user={user} />
        </div>
        <div className="progress-desc">
          <Button onClick={() => this.lessDays(user)}>-</Button>
          <Statistic>
            <Statistic.Value>{user.weekly_run_quota}</Statistic.Value>
            <Statistic.Label>runs per week</Statistic.Label>
          </Statistic>
          <Button onClick={() => this.moreDays(user)}>+</Button>
        </div>
      </div>
    );
  }
  lessDays = (user) => {
    const newQuota = user.weekly_run_quota - 1;
    this.patchQuota(user, newQuota)
  };
  moreDays = (user) => {
    const newQuota = user.weekly_run_quota + 1;
    this.patchQuota(user, newQuota)
  };

  patchQuota = (user, newQuota) => {
    let request = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user: {
          weekly_run_quota: newQuota
        }
      }),
    };
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, request)
      .then((r) => r.json())
      .then((data) => this.props.handleLogin(data));
  };
}

export default GoalsSection;