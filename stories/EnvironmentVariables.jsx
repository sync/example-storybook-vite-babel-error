
export function EnvironmentVariables() {
  return (
    <div>
      <h1>import . meta . env:</h1>
      <div>{JSON.stringify(import.meta.env, null, 2)}</div>
      <h1>import . meta . env . STORYBOOK:</h1>
      <div>{import.meta.env.STORYBOOK}</div>
    </div>
  )
}
