export default function Solution({ solution }) {
  if (solution.length > 0) {
    return (
      <>
        <h2>Solutions</h2>
        <div className="solution">
          {solution.map((soln, _) => (
            <h3 key={soln}>{soln}</h3>
          ))}
        </div>
      </>
    )
  } else {
    return <h2>No Solutions!</h2>
  }
}