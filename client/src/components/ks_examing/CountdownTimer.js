import React from 'react';
// var moment=require('moment');

//倒计时组件，每秒更新一次，倒计时结束时发布'timer.over'
var CountdownTimer = React.createClass({
  getInitialState: function() {
    return {
      secondsRemaining: 0
    };
  },
  tick: function() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  },
  componentDidMount: function() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <h1>{this.sec2str(this.state.secondsRemaining)}</h1>
    );
  },

	sec2str(t){
		if(t<0){
      PubSub.publish('timer.over');
      return '时间到';
    }
	    var d = Math.floor(t/86400),
	        h = ('0'+Math.floor(t/3600) % 24).slice(-2),
	        m = ('0'+Math.floor(t/60)%60).slice(-2),
	        s = ('0' + t % 60).slice(-2);
	    return (d>0?d+'d ':'')+(h>0?h+':':'')+(m>0?m+':':'')+(t>60?s:s+'s');
	}
});
module.exports=CountdownTimer;
