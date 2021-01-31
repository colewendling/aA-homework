import React from 'react';

const Counts = (props) => {
  // debugger
  return (
    <ul>
    {
    props.banana.map((count, idx) => {
      
     return <li key={idx}>You Have: {count} kittens.</li>})
    }
  </ul>)
};

// const Counts = ({banana}) => (
//   // debugger
//   <ul>
//     {
//       banana.map((count, idx) => <li key={idx}>You Have: {count} kittens.</li>)
//     }
//   </ul>
// );

// For lifecycle method demo:
//
// class Counts extends React.Component {
//   componentDidMount() { debugger }
//   componentDidUpdate(prevProps) { debugger }
//   componentDidUpdate(prevProps, prevState) { debugger }
//   componentWillUnmount() { debugger }
//   static getDerivedStateFromProps(props, state) { debugger }

//   render() {
//     return (
//       <ul>
//         {
//           this.props.previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
//         }
//       </ul>
//     )
//   }
// }

export default Counts;